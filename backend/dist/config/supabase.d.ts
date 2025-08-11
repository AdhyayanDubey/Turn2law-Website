export declare const supabaseAdmin: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
export declare const supabase: import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
export declare const db: {
    users: import("@supabase/postgrest-js").PostgrestQueryBuilder<any, any, "users", unknown>;
    lawyers: import("@supabase/postgrest-js").PostgrestQueryBuilder<any, any, "lawyers", unknown>;
    consultations: import("@supabase/postgrest-js").PostgrestQueryBuilder<any, any, "consultations", unknown>;
    auth: import("@supabase/supabase-js/dist/module/lib/SupabaseAuthClient").SupabaseAuthClient;
    storage: import("@supabase/storage-js").StorageClient;
    channel: (name: string) => import("@supabase/supabase-js").RealtimeChannel;
};
export declare const createSupabaseClient: () => import("@supabase/supabase-js").SupabaseClient<any, "public", any>;
export default supabaseAdmin;
//# sourceMappingURL=supabase.d.ts.map