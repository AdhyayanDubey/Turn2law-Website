import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="bg-background pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-white z-10 relative">
          <h1 className="text-5xl md:text-6xl font-headline font-semibold mb-6 leading-tight">
            We Simplify Legal Access for <span className="text-primary">Everyone.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg font-body">
            Find high-quality lawyers which suits you, with help of AI tools that get the justice right on time.
          </p>
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-lg font-body" asChild>
            <Link href="#find-lawyer">Consult a Lawyer</Link>
          </Button>
        </div>
        
        <div className="relative h-[450px] w-full">
          {/* Integrated Image Container */}
          <div className="relative w-full h-full group">
            {/* Clean background - no yellow around image edges */}
            <div className="absolute -inset-8 bg-gradient-to-br from-white/3 via-transparent to-white/1 rounded-3xl blur-3xl opacity-40"></div>
            
            {/* Main image container - clean edges, no yellow borders */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
              <Image
                src="/images/landingpagephoto.png"
                alt="Professional Legal Services"
                fill
                className="object-cover object-center transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-110"
                priority
              />
              
              {/* Clean overlay - no yellow tints */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/3 to-black/15"></div>
              
              {/* Clean border */}
              <div className="absolute inset-0 rounded-2xl border border-white/15 shadow-inner"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced subtle yellow ambient glow for the overall hero section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.12),transparent_60%)] pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-transparent via-primary/4 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
