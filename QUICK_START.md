# 🚀 5-Minute Setup Guide (India Budget Stack)

## Step 1: Install Dependencies (2 minutes)

```bash
# Backend setup
cd backend
npm install

# Frontend setup  
cd ../frontend
npm install
```

## Step 2: Setup Supabase (2 minutes)

1. Go to [supabase.com](https://supabase.com) 
2. Sign up with GitHub (free)
3. Click "New Project"
4. Choose organization, enter:
   - Name: `turn2law`
   - Database Password: `yourpassword123`
   - Region: `Southeast Asia (Singapore)` or `Central India (Mumbai)`
5. Wait 2 minutes for setup
6. Go to Settings > API and copy:
   - Project URL
   - Anon public key  
   - Service role key

## Step 3: Setup Environment (30 seconds)

```bash
cd backend
cp .env.example .env
# Edit .env and add your Supabase keys
```

## Step 4: Create Database Tables (1 minute)

Go to Supabase Dashboard > SQL Editor and run:

```sql
-- Create users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  user_type VARCHAR(10) CHECK (user_type IN ('client', 'lawyer')),
  phone VARCHAR(15),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create lawyers table
CREATE TABLE lawyers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  specialization TEXT[] NOT NULL DEFAULT '{}',
  experience_years INTEGER DEFAULT 0,
  hourly_rate DECIMAL(10,2) DEFAULT 0,
  bio TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create consultations table
CREATE TABLE consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES users(id),
  lawyer_id UUID REFERENCES lawyers(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  amount DECIMAL(10,2),
  scheduled_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Step 5: Run Everything (30 seconds)

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

## 🎉 Done!

- Frontend: http://localhost:9002
- Backend API: http://localhost:3001
- Health Check: http://localhost:3001/health

## 🔑 Quick Test

Test your API:
```bash
curl http://localhost:3001/health
```

Should return:
```json
{
  "status": "OK",
  "timestamp": "2025-01-11T...",
  "environment": "development"
}
```

## 🚨 Common Issues

### 1. "Cannot find module" errors
```bash
cd backend && npm install
cd frontend && npm install
```

### 2. Database connection failed
- Check your Supabase URL and keys in `.env`
- Make sure you created the tables in Step 4

### 3. Port already in use
```bash
# Kill processes on ports
lsof -ti:3001 | xargs kill -9
lsof -ti:9002 | xargs kill -9
```

## 📱 Next Steps

1. **Setup Razorpay** (when ready for payments)
2. **Setup EmailJS** (for notifications)
3. **Deploy to Vercel** (when ready for production)

## 💰 Cost Tracking

Current usage (all FREE for 6+ months):
- Database: 0/500MB
- Storage: 0/1GB  
- Bandwidth: 0/2GB
- Auth Users: 0/50,000

You're all set to build your legal platform! 🎯
