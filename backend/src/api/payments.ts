import { Router } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { supabase } from '../config/supabase';

const router = Router();

// Initialize Razorpay (you'll need to add these to .env)
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'your_key_id',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'your_key_secret',
});

// Create payment order
router.post('/create-order', async (req, res) => {
  try {
    const { consultation_id, amount } = req.body;

    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      receipt: `consultation_${consultation_id}`,
      notes: {
        consultation_id,
      },
    };

    const order = await razorpay.orders.create(options);

    res.json({ success: true, data: order });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Verify payment
router.post('/verify-payment', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      consultation_id,
    } = req.body;

    // Verify signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'your_key_secret')
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature !== expectedSign) {
      return res.status(400).json({ success: false, error: 'Invalid signature' });
    }

    // Update consultation payment status
    const { data: consultation, error } = await supabase
      .from('consultations')
      .update({
        payment_status: 'paid',
        razorpay_payment_id,
        status: 'accepted',
      })
      .eq('id', consultation_id)
      .select()
      .single();

    if (error) throw error;

    return res.json({ success: true, data: consultation });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
