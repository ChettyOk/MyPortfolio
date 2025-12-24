// components/Hero.tsx
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
          Available for new projects
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
          Design-led <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Web Developer.
          </span>
        </h1>
        
        <p className="max-w-xl text-lg text-slate-600 mb-10 leading-relaxed">
          I build high-end digital products with a focus on clean aesthetics and 
          lightning-fast performance.
        </p>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a href="#projects" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-200">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-400 transition-all">
            Get in touch
          </a>
        </div>
      </div>

      {/* Decorative Image Element */}
      <div className="flex-1 relative">
        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
          {/* Decorative Blue Ring */}
          <div className="absolute inset-0 border-[16px] border-blue-50 rounded-3xl rotate-6"></div>
          
          <div className="relative z-10 w-full h-full bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
             <div className="w-full h-full bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
                {/* Replace with your image */}
                <p className="text-blue-400 font-mono">Your Image Here</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;