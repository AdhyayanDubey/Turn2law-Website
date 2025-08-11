// Supabase Configuration - All-in-One Solution for Budget-Friendly Setup
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'placeholder-anon-key';

// Check if we have real Supabase credentials
const hasRealCredentials = process.env.SUPABASE_URL && 
  process.env.SUPABASE_URL !== 'https://your-project-ref.supabase.co' &&
  process.env.SUPABASE_SERVICE_ROLE_KEY && 
  process.env.SUPABASE_SERVICE_ROLE_KEY !== 'your-service-role-key';

if (!hasRealCredentials) {
  console.warn('⚠️  Using placeholder Supabase credentials. Please update .env with real values from supabase.com');
}

// Server-side Supabase client (with service role key for admin operations)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Client-side Supabase client (for frontend operations)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database helper functions
export const db = {
  // Users
  users: supabaseAdmin.from('users'),
  lawyers: supabaseAdmin.from('lawyers'),
  consultations: supabaseAdmin.from('consultations'),
  
  // Auth helpers
  auth: supabaseAdmin.auth,
  
  // Storage helpers
  storage: supabaseAdmin.storage,
  
  // Real-time helpers
  channel: (name: string) => supabase.channel(name)
};

// Export for frontend use
export const createSupabaseClient = () => supabase;

export default supabaseAdmin;
