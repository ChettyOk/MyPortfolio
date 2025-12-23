import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:your@email.com", label: "Email" },
  ];

  return (
    <footer className="mt-20 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Social Icons */}
        <div className="flex gap-8 mb-8">
          {socials.map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-500 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Text Credits */}
        <div className="text-center">
          <p className="text-slate-500 text-sm font-mono mb-2">
            Designed & Built by Chetachukwu Okonkwo
          </p>
          <p className="text-slate-600 text-xs flex items-center justify-center gap-2">
            Built with 
            <span className="text-cyan-500/50 hover:text-cyan-500 transition-colors cursor-default">Next.js</span> • 
            <span className="text-cyan-500/50 hover:text-cyan-500 transition-colors cursor-default">Tailwind</span> • 
            <span className="text-cyan-500/50 hover:text-cyan-500 transition-colors cursor-default">Vercel</span>
          </p>
        </div>

        {/* Current Year */}
        <div className="mt-8 text-[10px] text-slate-700 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;