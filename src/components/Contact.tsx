const Contact = () => {
    return (
      <section id="contact" className="py-32 text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5">
          <h2 className="text-4xl font-bold mb-6">Let’s work together</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Currently looking for new opportunities. My inbox is always open whether you have a question or just want to say hi!
          </p>
          <a href="chettyokonkwo@gmail.com" 
             className="inline-block px-10 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20">
            Send an Email
          </a>
        </div>
      </section>
    );
  };
  
  export default Contact;