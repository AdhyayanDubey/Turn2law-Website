import { Router, Request, Response } from 'express';
import { db } from '../config/supabase';
import jwt, { SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const router = Router();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().min(2),
  userType: z.enum(['client', 'lawyer']),
  phone: z.string().optional()
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

// Register new user
router.post('/register', async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const { email, password, fullName, userType, phone } = validatedData;

    // Check if user already exists
    const { data: existingUser } = await db.users
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user in Supabase
    const { data: user, error } = await db.users
      .insert([{
        email,
        password: hashedPassword,
        full_name: fullName,
        user_type: userType,
        phone
      }])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to create user' });
    }

    // Generate JWT token
    const payload = { userId: user.id, email: user.email, userType: user.user_type };
    const secret = process.env.JWT_SECRET!;
    const options: SignOptions = { expiresIn: '7d' };
    const token = jwt.sign(payload, secret, options);

    return res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        userType: user.user_type
      },
      token
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid input', details: error.errors });
    }
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Login user
router.post('/login', async (req: Request, res: Response) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const { email, password } = validatedData;

    // Find user
    const { data: user, error } = await db.users
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const payload = { userId: user.id, email: user.email, userType: user.user_type };
    const secret = process.env.JWT_SECRET!;
    const options: SignOptions = { expiresIn: '7d' };
    const token = jwt.sign(payload, secret, options);

    return res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        userType: user.user_type
      },
      token
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid input', details: error.errors });
    }
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Get current user profile
router.get('/profile', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const { data: user, error } = await db.users
      .select('id, email, full_name, user_type, phone, created_at')
      .eq('id', decoded.userId)
      .single();

    if (error || !user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({ user });

  } catch (error) {
    console.error('Profile error:', error);
    return res.status(401).json({ error: 'Invalid token' });
  }
});

export default router;
