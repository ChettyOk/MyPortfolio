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
  const [isDarkMode, setIsDarkMode] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const particleColors = useMemo(
    () => (isDarkMode ? ["#ffffff"] : ["#94a3b8", "#cbd5e1"]),
    [isDarkMode]
  );

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={particleColors}
          particleCount={isDarkMode ? 180 : 90}
          particleSpread={10}
          speed={isDarkMode ? 0.1 : 0.05}
          particleBaseSize={isDarkMode ? 100 : 70}
          moveParticlesOnHover
          alphaParticles={!isDarkMode}
          disableRotation={false}
          pixelRatio={typeof window !== "undefined" ? window.devicePixelRatio : 1}
        />
      </div>

      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        openResume={() => setIsResumeOpen(true)}
      />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
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