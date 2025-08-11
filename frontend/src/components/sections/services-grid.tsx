import { Handshake, BookOpen, User, Building } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
}

const services: Service[] = [
  {
    icon: Handshake,
    title: "Rental and lease agreements",
  },
  {
    icon: BookOpen,
    title: "Legal Opinion",
  },
  {
    icon: User,
    title: "Wills & Trust",
  },
  {
    icon: Building,
    title: "Corporate Law"
  }
];

const ServicesGrid = () => {
  return (
    <section id="services-grid" className="py-0 bg-background">
      <div className="w-full bg-[#0E0E0E] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="bg-[#009E98]/20 p-4 rounded-xl flex items-center justify-center w-16 h-16 flex-shrink-0">
                  <service.icon className="w-8 h-8 text-[#009E98]" />
                </div>
                <div className="text-white">
                  <h3 className="font-body text-lg font-medium leading-relaxed">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
