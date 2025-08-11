import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import ServicesGrid from '@/components/sections/services-grid';
import About from '@/components/sections/about';
import Stats from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import Banner from '@/components/sections/banner';
import KnowAboutUs from '@/components/sections/know-about-us';
import Pricing from '@/components/sections/pricing';
import ContactForm from '@/components/sections/contact-form';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesGrid />
        <About />
        <Stats />
        <Testimonials />
        <Banner />
        <KnowAboutUs />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
