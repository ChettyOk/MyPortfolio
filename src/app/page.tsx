"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ResumeModal from '@/components/ResumeModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Toggle Dark Mode class on the html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <Background />
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
        openResume={() => setIsResumeOpen(true)}
      />
      
      <main className="max-w-5xl mx-auto px-6 pt-24">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Resume Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}