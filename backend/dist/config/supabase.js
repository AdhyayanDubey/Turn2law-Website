"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSupabaseClient = exports.db = exports.supabase = exports.supabaseAdmin = void 0;
// Supabase Configuration - All-in-One Solution for Budget-Friendly Setup
const supabase_js_1 = require("@supabase/supabase-js");
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
exports.supabaseAdmin = (0, supabase_js_1.createClient)(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
// Client-side Supabase client (for frontend operations)
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseAnonKey);
// Database helper functions
exports.db = {
    // Users
    users: exports.supabaseAdmin.from('users'),
    lawyers: exports.supabaseAdmin.from('lawyers'),
    consultations: exports.supabaseAdmin.from('consultations'),
    // Auth helpers
    auth: exports.supabaseAdmin.auth,
    // Storage helpers
    storage: exports.supabaseAdmin.storage,
    // Real-time helpers
    channel: (name) => exports.supabase.channel(name)
};
// Export for frontend use
const createSupabaseClient = () => exports.supabase;
exports.createSupabaseClient = createSupabaseClient;
exports.default = exports.supabaseAdmin;
//# sourceMappingURL=supabase.js.map