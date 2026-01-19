const Contact = () => {
  return (
    <section id="contact" className="py-32 text-center font-sans">
      <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white">
          Let’s work <br /> together.
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Currently looking for new opportunities. My inbox is always open—whether you have a question or just want to say hi!
        </p>
        
        <a href="mailto:chettyokonkwo@gmail.com" 
           className="inline-block px-12 py-5 bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-black rounded-2xl hover:bg-blue-700 dark:hover:bg-cyan-400 hover:scale-105 transition-all shadow-2xl shadow-blue-600/20 dark:shadow-cyan-500/10 active:scale-95 text-sm tracking-widest uppercase">
          Send an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;