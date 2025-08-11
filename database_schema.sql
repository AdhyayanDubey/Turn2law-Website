-- Turn2Law Database Schema
-- Run this in Supabase SQL Editor

-- Enable Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  user_type TEXT CHECK (user_type IN ('client', 'lawyer')) NOT NULL DEFAULT 'client',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create lawyers table
CREATE TABLE public.lawyers (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  bar_registration_number TEXT UNIQUE,
  specializations TEXT[] DEFAULT '{}',
  experience_years INTEGER DEFAULT 0,
  location TEXT,
  hourly_rate DECIMAL(10,2),
  availability_status TEXT CHECK (availability_status IN ('available', 'busy', 'offline')) DEFAULT 'available',
  rating DECIMAL(3,2) DEFAULT 0.00,
  total_cases INTEGER DEFAULT 0,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create consultations table
CREATE TABLE public.consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lawyer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  legal_area TEXT NOT NULL,
  urgency TEXT CHECK (urgency IN ('low', 'medium', 'high', 'urgent')) DEFAULT 'medium',
  status TEXT CHECK (status IN ('pending', 'accepted', 'in_progress', 'completed', 'cancelled')) DEFAULT 'pending',
  consultation_type TEXT CHECK (consultation_type IN ('video', 'phone', 'chat', 'in_person')) DEFAULT 'video',
  scheduled_at TIMESTAMPTZ,
  duration_minutes INTEGER DEFAULT 30,
  fee DECIMAL(10,2),
  payment_status TEXT CHECK (payment_status IN ('pending', 'paid', 'refunded')) DEFAULT 'pending',
  razorpay_payment_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create messages table (for chat feature)
CREATE TABLE public.messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  consultation_id UUID REFERENCES public.consultations(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  message_text TEXT,
  message_type TEXT CHECK (message_type IN ('text', 'file', 'image')) DEFAULT 'text',
  file_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  consultation_id UUID REFERENCES public.consultations(id) ON DELETE CASCADE,
  client_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  lawyer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  review_text TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lawyers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (basic - you can refine these)
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR ALL USING (auth.uid() = id);

CREATE POLICY "Users can view all lawyers" ON public.lawyers
  FOR SELECT USING (TRUE);

CREATE POLICY "Lawyers can update own profile" ON public.lawyers
  FOR ALL USING (auth.uid() = id);

CREATE POLICY "Users can view consultations they're part of" ON public.consultations
  FOR ALL USING (auth.uid() = client_id OR auth.uid() = lawyer_id);

CREATE POLICY "Users can view messages in their consultations" ON public.messages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.consultations 
      WHERE id = consultation_id 
      AND (client_id = auth.uid() OR lawyer_id = auth.uid())
    )
  );

CREATE POLICY "Users can view reviews for consultations they're part of" ON public.reviews
  FOR ALL USING (auth.uid() = client_id OR auth.uid() = lawyer_id);

-- Create triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_lawyers_updated_at BEFORE UPDATE ON public.lawyers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_consultations_updated_at BEFORE UPDATE ON public.consultations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
