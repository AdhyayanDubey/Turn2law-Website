"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useActionState, useEffect, useRef } from 'react';
import { findLawyerAction, type FormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const LawyerCard = ({ lawyer }: { lawyer: { name: string; specialty: string; experienceYears: number; profileUrl: string; } }) => (
    <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image src="https://placehold.co/100x100.png" data-ai-hint="professional lawyer" alt={lawyer.name} width={80} height={80} className="rounded-full mb-4" />
        <h3 className="font-bold text-lg">{lawyer.name}</h3>
        <p className="text-primary">{lawyer.specialty}</p>
        <p className="text-sm text-muted-foreground">{lawyer.experienceYears} years experience</p>
        <Button asChild variant="link" className="mt-2">
            <Link href={lawyer.profileUrl} target="_blank">View Profile</Link>
        </Button>
    </div>
)


export default function ContactForm() {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useActionState(findLawyerAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.lawyers) {
      toast({
        title: state.error ? "Error" : "Success",
        description: state.message,
        variant: state.error ? "destructive" : "default",
      });
    }
    if (state.lawyers && state.lawyers.length > 0) {
        formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="find-lawyer" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {state.lawyers && state.lawyers.length > 0 ? (
          <div className="text-center">
            <h2 className="text-3xl font-headline font-semibold mb-4">{state.message}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {state.lawyers.map((lawyer, index) => (
                <LawyerCard key={index} lawyer={lawyer} />
              ))}
            </div>
             <Button onClick={() => window.location.reload()} className="mt-12">Find More Lawyers</Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-0 bg-black rounded-[40px] overflow-hidden">
            <div className="bg-primary p-12 flex items-center justify-center">
              <div className="w-full h-80 bg-primary flex items-center justify-center text-black text-xl font-body font-semibold">
                Image
              </div>
            </div>
            <div className="bg-[#2A2A2A] p-12 relative">
              <h2 className="text-3xl font-headline font-bold mb-2">Consult us</h2>
              <p className="text-white/60 mb-8 font-body">Tell us about your legal needs and we'll connect you with the right lawyer.</p>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/10 focus:border-white/40 outline-none font-body" 
                    required 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/10 focus:border-white/40 outline-none font-body" 
                    required 
                  />
                  {/* Mobile Number Section */}
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      name="countryCode" 
                      placeholder="+91" 
                      defaultValue="+91"
                      className="w-20 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/10 focus:border-white/40 outline-none font-body text-center" 
                      required 
                    />
                    <input 
                      type="tel" 
                      name="mobile" 
                      placeholder="Mobile Number" 
                      className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/10 focus:border-white/40 outline-none font-body" 
                      required 
                    />
                  </div>
                  <Textarea 
                    name="message" 
                    placeholder="Message" 
                    className="bg-white/5 border border-white/20 rounded-xl min-h-[120px] text-white placeholder-white/50 focus:bg-white/10 focus:border-white/40 resize-none font-body" 
                    rows={4} 
                    required 
                  />
                </div>
                {state?.error && <p className="text-red-400 text-sm">{state.error}</p>}
                <Button type="submit" className="w-full bg-white text-black rounded-xl py-4 text-lg font-body font-semibold hover:bg-gray-200">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
