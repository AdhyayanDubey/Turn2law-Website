"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Search, Star, MapPin, Phone, Mail, Calendar, X } from 'lucide-react';
import Link from 'next/link';
import Header from "@/components/layout/header";
import { FlipWords } from '@/components/ui/flip-words';

interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  category: string;
  rating: number;
  reviews: number;
  experience: string;
  location: string;
  phone: string;
  email: string;
  consultationFee: string;
  about: string;
  image: string;
}

const Logo = () => (
  <svg width="32" height="40" viewBox="0 0 62 79" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300">
    <path d="M46.3782 0L30.7564 16.3146L36.1293 21.5024L42.6514 14.691V53.3941L6.77247 17.715C4.26262 15.2191 0 17.0044 0 20.5514V79H7.45364V28.9262L43.3326 64.6053C45.8423 67.1011 50.105 65.316 50.105 61.7689V14.691L56.6272 21.5024L62 16.3146L46.3782 0Z" fill="white"/>
  </svg>
);
const TypingEffect = () => (
  <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
    Find the best <span className='text-yellow-400'><FlipWords className='*:text-yellow-400' words={['lawyers', 'students', 'drugs']} /></span>
  </h1>
);

const ConsultPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Property and Estate');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    description: '',
    preferredDate: ''
  });

  const categories = [
    'Property and Estate',
    'Divorce',
    'Tax & Corporate',
    'Criminal',
    'More'
  ];

  // Enhanced lawyer data with more details
  const allLawyers = [
    {
      id: 1,
      name: 'Rajendra',
      specialization: 'Property and Estate',
      category: 'Property and Estate',
      rating: 4.8,
      reviews: 156,
      experience: '15+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43210',
      email: 'rajendra@lawfirm.com',
      consultationFee: '₹2,000',
      about: 'Senior advocate specializing in property disputes, estate planning, and real estate transactions.',
      image: '/images/lawyer-1.jpg'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      specialization: 'Divorce & Family Law',
      category: 'Divorce',
      rating: 4.7,
      reviews: 89,
      experience: '12+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43211',
      email: 'priya@lawfirm.com',
      consultationFee: '₹1,800',
      about: 'Expert in family law, divorce proceedings, and child custody cases.',
      image: '/images/lawyer-2.jpg'
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      specialization: 'Corporate Law',
      category: 'Tax & Corporate',
      rating: 4.9,
      reviews: 203,
      experience: '18+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43212',
      email: 'vikram@lawfirm.com',
      consultationFee: '₹3,500',
      about: 'Corporate law specialist with expertise in mergers, acquisitions, and tax matters.',
      image: '/images/lawyer-3.jpg'
    },
    {
      id: 4,
      name: 'Anita Reddy',
      specialization: 'Criminal Defense',
      category: 'Criminal',
      rating: 4.6,
      reviews: 134,
      experience: '14+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43213',
      email: 'anita@lawfirm.com',
      consultationFee: '₹2,500',
      about: 'Criminal defense attorney with a strong track record in complex cases.',
      image: '/images/lawyer-4.jpg'
    },
    {
      id: 5,
      name: 'Suresh Kumar',
      specialization: 'Property Law',
      category: 'Property and Estate',
      rating: 4.5,
      reviews: 98,
      experience: '10+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43214',
      email: 'suresh@lawfirm.com',
      consultationFee: '₹1,500',
      about: 'Property law expert handling residential and commercial real estate matters.',
      image: '/images/lawyer-5.jpg'
    },
    {
      id: 6,
      name: 'Deepa Iyer',
      specialization: 'Tax Law',
      category: 'Tax & Corporate',
      rating: 4.8,
      reviews: 167,
      experience: '16+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43215',
      email: 'deepa@lawfirm.com',
      consultationFee: '₹2,800',
      about: 'Tax law specialist with extensive experience in GST and income tax matters.',
      image: '/images/lawyer-6.jpg'
    },
    {
      id: 7,
      name: 'Ravi Krishnan',
      specialization: 'Family Law',
      category: 'Divorce',
      rating: 4.4,
      reviews: 76,
      experience: '8+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43216',
      email: 'ravi@lawfirm.com',
      consultationFee: '₹1,200',
      about: 'Family law practitioner focusing on matrimonial disputes and adoption cases.',
      image: '/images/lawyer-7.jpg'
    },
    {
      id: 8,
      name: 'Meera Patel',
      specialization: 'Criminal Law',
      category: 'Criminal',
      rating: 4.7,
      reviews: 142,
      experience: '13+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43217',
      email: 'meera@lawfirm.com',
      consultationFee: '₹2,200',
      about: 'Criminal law expert with experience in white-collar crimes and fraud cases.',
      image: '/images/lawyer-8.jpg'
    },
    {
      id: 9,
      name: 'Arjun Singh',
      specialization: 'Estate Planning',
      category: 'Property and Estate',
      rating: 4.6,
      reviews: 111,
      experience: '11+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43218',
      email: 'arjun@lawfirm.com',
      consultationFee: '₹2,000',
      about: 'Estate planning attorney specializing in wills, trusts, and inheritance matters.',
      image: '/images/lawyer-9.jpg'
    },
    {
      id: 10,
      name: 'Kavitha Nair',
      specialization: 'Business Law',
      category: 'Tax & Corporate',
      rating: 4.5,
      reviews: 95,
      experience: '9+ years',
      location: 'Chennai High Court',
      phone: '+91 98765 43219',
      email: 'kavitha@lawfirm.com',
      consultationFee: '₹1,800',
      about: 'Business law attorney helping startups and SMEs with legal compliance.',
      image: '/images/lawyer-10.jpg'
    }
  ];

  // Filter lawyers based on category and search query
  const filteredLawyers = allLawyers.filter(lawyer => {
    const matchesCategory = selectedCategory === 'More' || lawyer.category === selectedCategory;
    const matchesSearch = lawyer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lawyer.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLawyerClick = (lawyer: Lawyer) => {
    setSelectedLawyer(lawyer);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedLawyer(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      description: '',
      preferredDate: ''
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    alert(`Consultation booked with ${selectedLawyer?.name}! You will receive a confirmation email shortly.`);
    handleCloseForm();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-5 px-6">
        <div className="container mx-auto py-12 pt-8">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-12">
            <div className="flex-1">
              <div className='flex items-center justify-between'>
                <TypingEffect />
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-white/30 text-white hover:bg-white/10 hover:border-yellow-400 rounded-full px-5 py-2 transition-all"
                  onClick={() => window.open('https://www.google.com/maps/place/Chennai,+India', '_blank')}
                >
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  Chennai, India
                </Button>
              </div>
              
              <div className='w-full justify-between flex items-center'>
              {/* Category Pills */}
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`rounded-full px-6 py-3 text-sm transition-all h-12 duration-300 transform hover:scale-105 ${
                      selectedCategory === category 
                        ? 'bg-white text-black hover:bg-white/90 shadow-lg' 
                        : 'border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
               <div className="relative w-80">
                <Input
                  type="text"
                  placeholder="Search lawyers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-white/30 text-white placeholder-white/50 pr-12 rounded-full h-12 pl-4 focus:border-yellow-400 transition-colors"
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black px-3 h-8 w-8 p-0 transition-all duration-300 hover:scale-110"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
              
              </div>
            </div>
            
            {/* Location and Search */}
            
          </div>
          
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-white/70 text-sm">
              Found {filteredLawyers.length} lawyers in {selectedCategory}
            </p>
          </div>
          
          {/* Lawyers Grid */}
          <div className="grid grid-cols-5 gap-6">
            {filteredLawyers.map((lawyer: Lawyer) => (
              <div 
                key={lawyer.id} 
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => handleLawyerClick(lawyer)}
              >
                <div className="bg-gray-400 rounded-xl aspect-[3/4] mb-3 overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-300"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{lawyer.rating}</span>
                      </div>
                      <p className="text-xs">Click to consult</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                    {lawyer.name}
                  </h3>
                  <p className="text-white/70 text-sm">{lawyer.specialization}</p>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{lawyer.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{lawyer.reviews} reviews</span>
                  </div>
                  <p className="text-yellow-400 text-sm font-semibold">{lawyer.consultationFee}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* No results */}
          {filteredLawyers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg mb-4">No lawyers found matching your criteria</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Property and Estate');
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Consultation Form Modal */}
      {isFormOpen && selectedLawyer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="relative p-6 border-b border-gray-700">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseForm}
                className="absolute right-4 top-4 rounded-full hover:bg-gray-800 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl"></div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-1">{selectedLawyer.name}</h2>
                  <p className="text-yellow-400 mb-2">{selectedLawyer.specialization}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{selectedLawyer.rating} ({selectedLawyer.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-yellow-400" />
                      <span>{selectedLawyer.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* About */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">About</h3>
                <p className="text-gray-300">{selectedLawyer.about}</p>
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div>
                    <span className="text-gray-400">Experience:</span>
                    <span className="ml-2 font-semibold text-yellow-400">{selectedLawyer.experience}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Consultation Fee:</span>
                    <span className="ml-2 font-semibold text-green-400">{selectedLawyer.consultationFee}</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Book Consultation</h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Enter your full name" 
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number *
                      </label>
                      <Input 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Legal Issue Description *
                    </label>
                    <Textarea
                      className="min-h-[100px] resize-none bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400"
                      placeholder="Briefly describe your legal issue..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Preferred Consultation Date
                    </label>
                    <Input 
                      type="date" 
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white focus:ring-yellow-400 focus:border-yellow-400"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold disabled:opacity-50 transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2" />
                          Booking...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Consultation ({selectedLawyer.consultationFee})
                        </>
                      )}
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-300"
                      onClick={() => window.open(`tel:${selectedLawyer.phone}`)}
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-400 text-center">
                    By booking a consultation, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{selectedLawyer.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{selectedLawyer.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{selectedLawyer.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultPage;
