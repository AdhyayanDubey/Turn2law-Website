"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supabase_1 = require("../config/supabase");
const router = (0, express_1.Router)();
// Get all available lawyers
router.get('/lawyers', async (req, res) => {
    try {
        const { data: lawyers, error } = await supabase_1.supabase
            .from('lawyers')
            .select(`
        *,
        profiles (
          full_name,
          email,
          phone
        )
      `)
            .eq('verified', true)
            .eq('availability_status', 'available');
        if (error)
            throw error;
        res.json({ success: true, data: lawyers });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
// Get lawyer by ID
router.get('/lawyers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data: lawyer, error } = await supabase_1.supabase
            .from('lawyers')
            .select(`
        *,
        profiles (
          full_name,
          email,
          phone
        ),
        reviews (
          rating,
          review_text,
          created_at,
          profiles!reviews_client_id_fkey (
            full_name
          )
        )
      `)
            .eq('id', id)
            .single();
        if (error)
            throw error;
        res.json({ success: true, data: lawyer });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
// Search lawyers by specialization
router.get('/lawyers/search/:specialization', async (req, res) => {
    try {
        const { specialization } = req.params;
        const { data: lawyers, error } = await supabase_1.supabase
            .from('lawyers')
            .select(`
        *,
        profiles (
          full_name,
          email
        )
      `)
            .contains('specializations', [specialization])
            .eq('verified', true);
        if (error)
            throw error;
        res.json({ success: true, data: lawyers });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
exports.default = router;
//# sourceMappingURL=lawyers.js.map