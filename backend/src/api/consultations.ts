import { Router } from 'express';
import { supabase } from '../config/supabase';

const router = Router();

// Create a new consultation
router.post('/consultations', async (req, res) => {
  try {
    const {
      client_id,
      lawyer_id,
      title,
      description,
      legal_area,
      urgency,
      consultation_type,
      scheduled_at,
      duration_minutes
    } = req.body;

    // Get lawyer's hourly rate
    const { data: lawyer, error: lawyerError } = await supabase
      .from('lawyers')
      .select('hourly_rate')
      .eq('id', lawyer_id)
      .single();

    if (lawyerError) throw lawyerError;

    // Calculate fee based on duration
    const fee = (lawyer.hourly_rate * duration_minutes) / 60;

    const { data: consultation, error } = await supabase
      .from('consultations')
      .insert([{
        client_id,
        lawyer_id,
        title,
        description,
        legal_area,
        urgency,
        consultation_type,
        scheduled_at,
        duration_minutes,
        fee
      }])
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, data: consultation });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get consultations for a user
router.get('/consultations/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const { data: consultations, error } = await supabase
      .from('consultations')
      .select(`
        *,
        client:profiles!consultations_client_id_fkey (
          full_name,
          email
        ),
        lawyer:profiles!consultations_lawyer_id_fkey (
          full_name,
          email
        )
      `)
      .or(`client_id.eq.${userId},lawyer_id.eq.${userId}`)
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ success: true, data: consultations });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update consultation status
router.patch('/consultations/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const { data: consultation, error } = await supabase
      .from('consultations')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, data: consultation });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
