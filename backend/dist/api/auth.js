"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supabase_1 = require("../config/supabase");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const zod_1 = require("zod");
const router = (0, express_1.Router)();
// Validation schemas
const registerSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    fullName: zod_1.z.string().min(2),
    userType: zod_1.z.enum(['client', 'lawyer']),
    phone: zod_1.z.string().optional()
});
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
// Register new user
router.post('/register', async (req, res) => {
    try {
        const validatedData = registerSchema.parse(req.body);
        const { email, password, fullName, userType, phone } = validatedData;
        // Check if user already exists
        const { data: existingUser } = await supabase_1.db.users
            .select('email')
            .eq('email', email)
            .single();
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
        // Create user in Supabase
        const { data: user, error } = await supabase_1.db.users
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
        const secret = process.env.JWT_SECRET;
        const options = { expiresIn: '7d' };
        const token = jsonwebtoken_1.default.sign(payload, secret, options);
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
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ error: 'Invalid input', details: error.errors });
        }
        console.error('Registration error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
// Login user
router.post('/login', async (req, res) => {
    try {
        const validatedData = loginSchema.parse(req.body);
        const { email, password } = validatedData;
        // Find user
        const { data: user, error } = await supabase_1.db.users
            .select('*')
            .eq('email', email)
            .single();
        if (error || !user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Verify password
        const isValidPassword = await bcrypt_1.default.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Generate JWT token
        const payload = { userId: user.id, email: user.email, userType: user.user_type };
        const secret = process.env.JWT_SECRET;
        const options = { expiresIn: '7d' };
        const token = jsonwebtoken_1.default.sign(payload, secret, options);
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
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ error: 'Invalid input', details: error.errors });
        }
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
// Get current user profile
router.get('/profile', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const { data: user, error } = await supabase_1.db.users
            .select('id, email, full_name, user_type, phone, created_at')
            .eq('id', decoded.userId)
            .single();
        if (error || !user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json({ user });
    }
    catch (error) {
        console.error('Profile error:', error);
        return res.status(401).json({ error: 'Invalid token' });
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map