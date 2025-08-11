#!/bin/bash

echo "🧪 Testing Turn2Law Backend Setup..."
echo ""

# Test 1: Check if dependencies are installed
echo "1️⃣  Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
else
    echo "❌ Dependencies not installed. Run: npm install"
    exit 1
fi

# Test 2: Check TypeScript compilation
echo ""
echo "2️⃣  Testing TypeScript compilation..."
if npm run build > /dev/null 2>&1; then
    echo "✅ TypeScript compilation successful"
else
    echo "❌ TypeScript compilation failed"
    exit 1
fi

# Test 3: Check environment file
echo ""
echo "3️⃣  Checking environment configuration..."
if [ -f ".env" ]; then
    echo "✅ .env file exists"
    if grep -q "your-project-ref" .env; then
        echo "⚠️  Using placeholder Supabase credentials"
        echo "   Update .env with real values from supabase.com"
    else
        echo "✅ Real Supabase credentials detected"
    fi
else
    echo "❌ .env file missing. Copy from .env.example"
    exit 1
fi

# Test 4: Start server briefly
echo ""
echo "4️⃣  Testing server startup..."
npm run dev &
SERVER_PID=$!
sleep 3

if kill -0 $SERVER_PID 2>/dev/null; then
    echo "✅ Server started successfully"
    kill $SERVER_PID 2>/dev/null
    wait $SERVER_PID 2>/dev/null
else
    echo "❌ Server failed to start"
    exit 1
fi

echo ""
echo "🎉 All tests passed! Your backend is ready."
echo ""
echo "Next steps:"
echo "1. Update .env with real Supabase credentials"
echo "2. Run: npm run dev"
echo "3. Test: curl http://localhost:3001/health"
