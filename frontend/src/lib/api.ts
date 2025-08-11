// Frontend API Service Layer
// Place this in: frontend/src/lib/api.ts

const API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.com/api' 
  : 'http://localhost:3001/api';

export interface User {
  id: string;
  email: string;
  full_name: string;
  user_type: 'client' | 'lawyer';
}

export interface Lawyer {
  id: string;
  full_name: string;
  specializations: string[];
  experience_years: number;
  hourly_rate: number;
  rating: number;
  location: string;
  availability_status: 'available' | 'busy' | 'offline';
}

export interface Consultation {
  id: string;
  title: string;
  description: string;
  legal_area: string;
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'accepted' | 'in_progress' | 'completed' | 'cancelled';
  scheduled_at: string;
  fee: number;
  payment_status: 'pending' | 'paid' | 'refunded';
}

// Authentication API
export const authAPI = {
  async signup(data: {
    email: string;
    password: string;
    full_name: string;
    user_type: 'client' | 'lawyer';
  }) {
    const response = await fetch(`${API_BASE}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async login(data: { email: string; password: string }) {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getProfile(token: string) {
    const response = await fetch(`${API_BASE}/auth/profile`, {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },
};

// Lawyers API
export const lawyersAPI = {
  async getAll(): Promise<{ success: boolean; data: Lawyer[] }> {
    const response = await fetch(`${API_BASE}/lawyers`);
    return response.json();
  },

  async getById(id: string): Promise<{ success: boolean; data: Lawyer }> {
    const response = await fetch(`${API_BASE}/lawyers/${id}`);
    return response.json();
  },

  async searchBySpecialization(specialization: string): Promise<{ success: boolean; data: Lawyer[] }> {
    const response = await fetch(`${API_BASE}/lawyers/search/${specialization}`);
    return response.json();
  },
};

// Consultations API
export const consultationsAPI = {
  async create(data: {
    client_id: string;
    lawyer_id: string;
    title: string;
    description: string;
    legal_area: string;
    urgency: string;
    consultation_type: string;
    scheduled_at: string;
    duration_minutes: number;
  }) {
    const response = await fetch(`${API_BASE}/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getUserConsultations(userId: string): Promise<{ success: boolean; data: Consultation[] }> {
    const response = await fetch(`${API_BASE}/consultations/user/${userId}`);
    return response.json();
  },

  async updateStatus(id: string, status: string) {
    const response = await fetch(`${API_BASE}/consultations/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    return response.json();
  },
};

// Payments API
export const paymentsAPI = {
  async createOrder(data: { consultation_id: string; amount: number }) {
    const response = await fetch(`${API_BASE}/payments/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async verifyPayment(data: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
    consultation_id: string;
  }) {
    const response = await fetch(`${API_BASE}/payments/verify-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

// Usage examples:

// 1. Get all lawyers
// const { data: lawyers } = await lawyersAPI.getAll();

// 2. Create consultation
// const consultation = await consultationsAPI.create({
//   client_id: 'user-id',
//   lawyer_id: 'lawyer-id',
//   title: 'Property Dispute',
//   description: 'Need help with property documentation',
//   legal_area: 'Property Law',
//   urgency: 'medium',
//   consultation_type: 'video',
//   scheduled_at: '2025-08-15T10:00:00Z',
//   duration_minutes: 60,
// });

// 3. User signup
// const result = await authAPI.signup({
//   email: 'user@example.com',
//   password: 'securepassword',
//   full_name: 'John Doe',
//   user_type: 'client',
// });
