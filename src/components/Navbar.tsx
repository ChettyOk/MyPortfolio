"use client";
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  openResume: () => void;
}

const Navbar = ({ isDarkMode, toggleDarkMode, openResume }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/50 dark:bg-slate-950/80 font-sans">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-black tracking-tighter bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
          MyPortfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 border-r border-slate-200 dark:border-slate-800 pr-6 mr-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all dark:bg-slate-900 dark:text-yellow-400 dark:hover:bg-slate-800"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              onClick={openResume}
              className="px-5 py-2 bg-blue-600 text-white text-xs font-black rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 uppercase tracking-widest"
            >
              Resume
            </button>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-yellow-400"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
                className="text-slate-900 dark:text-white" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-900 pb-2"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => { openResume(); setIsOpen(false); }}
            className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-600/30"
          >
            VIEW RESUME
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;