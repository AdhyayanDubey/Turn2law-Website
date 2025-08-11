# Turn2Law Backend (India Budget Stack)

## 🚀 Quick Start

```bash
npm install
cp .env.example .env
# Add your Supabase credentials to .env
npm run dev
```

## 📊 Stack

- **Database & Auth:** Supabase (PostgreSQL + Auth)
- **Payments:** Razorpay (India-focused)
- **Email:** EmailJS + Gmail SMTP
- **Deployment:** Vercel
- **Runtime:** Node.js + Express + TypeScript

> 🚫 **Note:** Firebase has been completely removed in favor of the budget-friendly Supabase stack

## 🔧 Environment Variables

Copy `.env.example` to `.env` and fill in:

```bash
# Supabase (get from supabase.com dashboard)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# JWT
JWT_SECRET=your-long-random-secret

# Razorpay (when ready for payments)
RAZORPAY_KEY_ID=rzp_test_your_key
RAZORPAY_KEY_SECRET=your_secret
```

## 📁 Project Structure

```
src/
├── index.ts          # Main server
├── api/             # API routes
│   └── auth.ts      # Authentication endpoints
└── config/          # Configuration
    └── supabase.ts  # Database connection
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## 🔗 API Endpoints

- `GET /health` - Health check
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

## 💰 Cost

- **Development:** ₹0/month (completely free)
- **Production:** ₹2,800/month for 10k+ users
- **75% cheaper** than alternatives

## 📚 Documentation

See main project files:
- `../QUICK_START.md` - 5-minute setup guide
- `INDIA_BUDGET_STACK.md` - Detailed service comparison
