#!/bin/bash

echo "🚀 Setting up Turn2Law Backend..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "🔑 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please edit .env file with your actual credentials"
else
    echo "✅ .env file already exists"
fi

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p src/api src/middleware src/utils

echo "🎉 Backend setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your credentials"
echo "2. Choose your database (Supabase or Firebase)"
echo "3. Run 'npm run dev' to start development server"
echo ""
echo "📚 Read README.md for detailed setup instructions"
