# 🚀 Turn2Law Development Guide

## 📋 **Your Complete Step-by-Step Roadmap**

### **Phase 1: Setup & Infrastructure (Day 1-2)**

#### **✅ Step 1: Environment Setup (COMPLETED)**
- ✅ Project restructured with frontend/backend separation
- ✅ Backend TypeScript errors fixed
- ✅ Budget-friendly stack implemented (Supabase + Razorpay)

#### **🔧 Step 2: Get Real Credentials**

**2.1 Supabase Setup (FREE)**
```bash
# 1. Go to https://supabase.com/dashboard
# 2. Create account (use GitHub/Google for quick signup)
# 3. Create new project:
#    - Project name: "turn2law"
#    - Region: "ap-south-1" (Mumbai - best for India)
#    - Database password: Create strong password
# 4. Wait 2-3 minutes for project creation
# 5. Go to Settings > API
# 6. Copy these values to backend/.env:
```

Update `backend/.env`:
```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-anon-key-from-supabase
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-from-supabase
```

**2.2 Database Schema Setup**
```bash
# 1. In Supabase dashboard, go to SQL Editor
# 2. Copy and paste the entire content from database_schema.sql
# 3. Click "Run" to create all tables
```

**2.3 Razorpay Setup (FREE for testing)**
```bash
# 1. Go to https://razorpay.com/
# 2. Create account with Indian phone number
# 3. Go to Account & Settings > API Keys
# 4. Generate Test Keys (free for development)
# 5. Copy to backend/.env:
```

Update `backend/.env`:
```env
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxx
RAZORPAY_KEY_SECRET=your-test-secret-key
```

---

### **Phase 2: Backend Development (Day 2-3)**

#### **🔧 Step 3: Test Backend**

```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Should see:
# 🚀 Turn2Law Backend Server running on port 3001
# 📚 Environment: development
# 🔗 Health check: http://localhost:3001/health
```

**Test API endpoints:**
```bash
# Test health check
curl http://localhost:3001/health

# Test auth endpoint
curl -X POST http://localhost:3001/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","full_name":"Test User"}'
```

#### **📱 Step 4: Available API Endpoints**

Your backend now has these working endpoints:

**Authentication:**
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

**Lawyers:**
- `GET /api/lawyers` - Get all available lawyers
- `GET /api/lawyers/:id` - Get lawyer details
- `GET /api/lawyers/search/:specialization` - Search by specialization

**Consultations:**
- `POST /api/consultations` - Create consultation
- `GET /api/consultations/user/:userId` - Get user's consultations
- `PATCH /api/consultations/:id/status` - Update consultation status

**Payments:**
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify-payment` - Verify payment

---

### **Phase 3: Frontend Development (Day 3-5)**

#### **🔧 Step 5: Setup Frontend**

```bash
# Terminal 2: Start frontend
cd frontend
npm install
npm run dev

# Should open: http://localhost:9002
```

#### **📱 Step 6: Frontend Development Priorities**

**Day 3: Core Pages**
1. **Landing Page** ✅ (Already exists)
   - Update hero section with actual features
   - Connect "Get Started" button to signup

2. **Authentication Pages**
   - Signup form (connect to `/api/auth/signup`)
   - Login form (connect to `/api/auth/login`)
   - User type selection (Client/Lawyer)

3. **Lawyer Listing Page**
   - Fetch from `/api/lawyers`
   - Search/filter functionality
   - Lawyer cards with ratings

**Day 4: Core Features**
1. **Lawyer Profile Page**
   - Detailed lawyer info
   - Book consultation button
   - Reviews section

2. **Consultation Booking**
   - Date/time picker
   - Service selection
   - Payment integration

3. **Dashboard (Client)**
   - Upcoming consultations
   - Past consultations
   - Payment history

**Day 5: Advanced Features**
1. **Payment Integration**
   - Razorpay checkout
   - Payment success/failure pages
   - Receipt generation

2. **Chat System** (Basic)
   - Message interface
   - File sharing
   - Consultation notes

---

### **Phase 4: Integration & Testing (Day 6-7)**

#### **🔧 Step 7: Frontend-Backend Integration**

Create API service layer in frontend:

```typescript
// frontend/src/lib/api.ts
const API_BASE = 'http://localhost:3001/api';

export const authAPI = {
  signup: (data: SignupData) => fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }),
  login: (data: LoginData) => fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
};

export const lawyersAPI = {
  getAll: () => fetch(`${API_BASE}/lawyers`),
  getById: (id: string) => fetch(`${API_BASE}/lawyers/${id}`),
  search: (specialization: string) => fetch(`${API_BASE}/lawyers/search/${specialization}`)
};
```

#### **🧪 Step 8: Testing**

```bash
# Test full user flow:
# 1. User signup
# 2. Browse lawyers
# 3. Book consultation
# 4. Make payment
# 5. Access dashboard
```

---

### **Phase 5: Deployment (Day 8-9)**

#### **🌐 Step 9: Deploy to Production**

**Frontend (Vercel - FREE):**
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy frontend
cd frontend
vercel

# Follow prompts, connect to GitHub
```

**Backend (Railway/Render - FREE tier):**
```bash
# Option 1: Railway (recommended)
# 1. Go to railway.app
# 2. Connect GitHub repo
# 3. Deploy backend folder
# 4. Add environment variables

# Option 2: Render
# 1. Go to render.com
# 2. Connect GitHub repo
# 3. Create Web Service
# 4. Add environment variables
```

---

## 🎯 **Immediate Next Steps (Start NOW):**

### **Today (Day 1):**
1. **Get Supabase credentials** (15 mins)
2. **Run database schema** (5 mins)
3. **Update .env file** (5 mins)
4. **Test backend health** (5 mins)

```bash
# Quick test commands:
cd backend
npm run dev

# In another terminal:
curl http://localhost:3001/health
```

### **Tomorrow (Day 2):**
1. **Get Razorpay test keys** (10 mins)
2. **Test payment endpoints** (20 mins)
3. **Start frontend auth pages** (4 hours)

### **Day 3:**
1. **Complete lawyer listing page** (6 hours)
2. **Create booking flow** (2 hours)

---

## 💰 **Current Costs (Ultra Budget):**

- **Supabase**: ₹0/month (Free tier: 500MB DB, 50MB file storage)
- **Razorpay**: ₹0/month (2% transaction fee only)
- **Vercel**: ₹0/month (Free tier: unlimited personal projects)
- **Railway/Render**: ₹0/month (Free tier: 512MB RAM, sleep after 30min inactivity)

**Total**: ₹0/month for development + testing! 🎉

---

## 📞 **Need Help?**

Your project structure is now perfect for development:

```
Turn2law Website/
├── frontend/          # Next.js app (port 9002)
├── backend/           # Express API (port 3001)
├── database_schema.sql # Ready to run in Supabase
└── DEVELOPMENT_GUIDE.md # This guide
```

**Start with Step 2.1 (Supabase setup) - everything else is ready!** 🚀
