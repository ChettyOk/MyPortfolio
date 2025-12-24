import Navbar from '@/components/Navbar';
import Background from '@/components/Background';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
    <Background />
    <Navbar />
    
    {/* Container to keep content centered and padded */}
    <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
      <Hero />
      
      {/* Section wrappers for spacing */}
      <div className="space-y-32"> 
        <About />
        <Projects />
        <Contact />
      </div>
    </div>

    <Footer />
  </main>
  );
}