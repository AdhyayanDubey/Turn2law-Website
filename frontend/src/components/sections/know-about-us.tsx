
"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const navItems = [
    "What is Instant Access to Law ?",
    "Included Services", 
    "Key Statistics",
    "Channels of Instant Legal Access",
    "Why choose Turn2Law",
    "Meet the Team",
];

const KnowAboutUs = () => {
    const [activeItem, setActiveItem] = useState("Channels of Instant Legal Access");

    return (
        <section id="know-about-us" className="py-16 bg-background">
            <div className="container mx-auto px-6">
                {/* Main dark container */}
                <div className="bg-[#2A2A2A] rounded-[32px] p-8 relative overflow-hidden">
                    {/* Title */}
                    <h2 className="text-3xl font-body font-medium mb-8 text-white">Know about us.</h2>
                    
                    {/* Content Grid */}
                    <div className="flex gap-8">
                        {/* Left Sidebar Navigation */}
                        <div className="w-[300px] space-y-2">
                            {navItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`cursor-pointer transition-all duration-300 rounded-xl text-left ${
                                        activeItem === item
                                            ? 'bg-[#009E98] text-white py-3 px-4'
                                            : 'text-white hover:text-[#009E98] py-3 px-4'
                                    }`}
                                    onClick={() => setActiveItem(item)}
                                >
                                    <span className="text-base font-medium font-body">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 relative">
                            {/* Gray content box */}
                            <div 
                                className="bg-[#8B8B8B] rounded-[24px] relative"
                                style={{ height: '420px' }}
                            >
                                {/* Image text centered */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[#2A2A2A] text-3xl font-body font-medium">Image</span>
                                </div>

                                {/* Get Started Button - positioned at bottom right */}
                                <div className="absolute bottom-4 right-4">
                                    <Button 
                                        className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-2xl font-medium font-body text-base flex items-center gap-2 transition-all duration-300 shadow-sm border-0"
                                    >
                                        Get Started
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KnowAboutUs;
