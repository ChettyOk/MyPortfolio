const Contact = () => {
  return (
    <section id="contact" className="py-32 text-center font-sans">
      <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-white/95 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 transition-colors duration-300 shadow-sm">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white">
          Let&apos;s build <br /> something useful.
        </h2>
        <p className="text-slate-700 dark:text-slate-400 mb-12 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Open to internships and early-career software engineering roles. Reach out directly by email, or connect via LinkedIn and GitHub.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:chettyokonkwo@gmail.com" 
             className="inline-block px-8 py-4 bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-black rounded-2xl hover:bg-blue-700 dark:hover:bg-cyan-400 hover:scale-105 transition-all shadow-2xl shadow-blue-600/20 dark:shadow-cyan-500/10 active:scale-95 text-xs tracking-widest uppercase">
            Send Email
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer"
             className="inline-block px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-black rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 text-xs tracking-widest uppercase">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"
             className="inline-block px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-black rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 text-xs tracking-widest uppercase">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;