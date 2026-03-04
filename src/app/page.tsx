"use client";
import { useState, useEffect, useMemo } from "react";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ResumeModal from "@/components/ResumeModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Memoize colors so Particles component doesn't re-init unnecessarily
  const particleColors = useMemo(
    () => (isDarkMode ? ["#ffffff"] : ["#0f172a"]),
    [isDarkMode]
  );

  return (
    // Changed: relative z-0 ensures children can use -z-10 relative to this container
    <div className="relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={particleColors}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          // Only access window on client
          pixelRatio={typeof window !== "undefined" ? window.devicePixelRatio : 1}
        />
      </div>

      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        openResume={() => setIsResumeOpen(true)}
      />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}