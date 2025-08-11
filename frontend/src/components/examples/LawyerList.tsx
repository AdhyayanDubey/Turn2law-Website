// Example React component showing how to use the API
// Place this in: frontend/src/components/examples/LawyerList.tsx

'use client';

import { useState, useEffect } from 'react';
import { lawyersAPI, Lawyer } from '@/lib/api';

export function LawyerListExample() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLawyers() {
      try {
        setLoading(true);
        const response = await lawyersAPI.getAll();
        
        if (response.success) {
          setLawyers(response.data);
        } else {
          setError('Failed to fetch lawyers');
        }
      } catch (err) {
        setError('Network error');
        console.error('Error fetching lawyers:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLawyers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading lawyers...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-600">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 text-red-600 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lawyers.map((lawyer) => (
        <div key={lawyer.id} className="bg-white rounded-lg shadow-md p-6 border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              {lawyer.full_name}
            </h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              lawyer.availability_status === 'available' 
                ? 'bg-green-100 text-green-800' 
                : lawyer.availability_status === 'busy'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {lawyer.availability_status}
            </span>
          </div>
          
          <div className="space-y-2 mb-4">
            <p className="text-gray-600">
              <span className="font-medium">Experience:</span> {lawyer.experience_years} years
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> {lawyer.location}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Rate:</span> ₹{lawyer.hourly_rate}/hour
            </p>
            <div className="flex items-center">
              <span className="font-medium text-gray-600">Rating:</span>
              <div className="flex items-center ml-2">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-gray-600">{lawyer.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="font-medium text-gray-600 mb-2">Specializations:</p>
            <div className="flex flex-wrap gap-1">
              {lawyer.specializations.map((spec, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Profile
            </button>
            <button 
              className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              disabled={lawyer.availability_status !== 'available'}
            >
              Book Consultation
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Usage in your page:
// import { LawyerListExample } from '@/components/examples/LawyerList';
// 
// export default function LawyersPage() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Available Lawyers</h1>
//       <LawyerListExample />
//     </div>
//   );
// }
