# Turn2Law Platform

A comprehensive legal consultation platform connecting clients with qualified lawyers.

## Project Structure

```
Turn2Law Website/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js app router
│   │   ├── components/      # React components
│   │   ├── ai/             # AI/GenKit integration
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility libraries
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Backend API (Budget Stack)
│   ├── src/
│   │   ├── index.ts        # Main server
│   │   ├── api/            # API routes (auth.ts)
│   │   └── config/         # Supabase configuration
│   ├── README.md           # Backend setup guide
│   ├── INDIA_BUDGET_STACK.md # Service comparison
│   └── package.json
├── docs/                   # Project documentation
├── QUICK_START.md         # 5-minute setup guide
└── README.md              # This file
```

## Getting Started

### 🎯 Quick Setup

#### Frontend Development
```bash
cd frontend
npm install
npm run dev
```
Your frontend will be available at `http://localhost:9002`

#### Backend Development  
```bash
cd backend
./setup.sh          # Run setup script
npm install
npm run dev
```
Your API will be available at `http://localhost:3001`

### 📋 Prerequisites
- Node.js 18+ and npm
- Git
- Code editor (VS Code recommended)

### 🔑 Environment Setup
1. Copy `.env.example` to `.env` in backend folder
2. Sign up for recommended services (see SERVICE_COMPARISON.md)
3. Add your API keys to `.env`
4. Run setup scripts

## Tech Stack

### Frontend
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Radix UI Components

### Backend (Ultra Budget-Friendly India Stack 🇮🇳)
- **All-in-One:** Supabase (Database + Auth + Storage + Realtime)
- **Payments:** Razorpay (2% fees, built for India)
- **Email:** EmailJS (200 free) + Gmail SMTP (500/day free)
- **Deployment:** Vercel (100GB bandwidth free)

### 💰 Cost Breakdown
- **First 6 months:** ₹0/month (100% FREE!)
- **After scaling:** ₹2,800/month (~$35) for 10k+ users
- **Savings vs Premium:** ₹8,800/month (~$105) saved!

### Why This Stack is Perfect for India?
✅ **6+ months completely free** - perfect for MVP development
✅ **Razorpay integration** - UPI, cards, wallets, EMI options
✅ **Indian data residency** - compliance with local laws
✅ **No forex charges** - all payments in INR
✅ **Ultra-low scaling costs** - 75% cheaper than international alternatives
