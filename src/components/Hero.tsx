"use client";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center font-sans transition-colors duration-300">
      <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100 dark:text-cyan-400 dark:bg-cyan-400/10 dark:border-cyan-400/20 shadow-sm">
        Open to SWE Internship and New Grad Roles
      </div>

      <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white leading-[1.1] md:leading-[0.9]">
        Building reliable <br />
        <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
          full-stack products.
        </span>
      </h1>

      <p className="max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
        I am <span className="font-bold text-slate-900 dark:text-slate-200">Chetachukwu Okonkwo</span>, a full-stack developer focused on building performant web apps with clear UX, explainable engineering decisions, and production-ready delivery.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#projects" 
          className="px-10 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 text-sm tracking-wide"
        >
          VIEW PINNED PROJECTS
        </a>
        <a 
          href="mailto:chettyokonkwo@gmail.com" 
          className="px-10 py-4 bg-white text-slate-900 border border-slate-200 font-black rounded-2xl hover:bg-slate-50 transition-all dark:bg-slate-900 dark:text-white dark:border-slate-800 dark:hover:bg-slate-800 shadow-sm active:scale-95 text-sm tracking-wide"
        >
          EMAIL ME
        </a>
      </div>

      <div className="mt-8 text-xs md:text-sm text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <span>Next.js</span>
        <span className="text-slate-300 dark:text-slate-700">•</span>
        <span>TypeScript</span>
        <span className="text-slate-300 dark:text-slate-700">•</span>
        <span>React</span>
        <span className="text-slate-300 dark:text-slate-700">•</span>
        <span>Postgres</span>
      </div>
    </section>
  );
};

export default Hero;