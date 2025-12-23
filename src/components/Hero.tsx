const Hero = () => {
    return (
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
          Available for hire
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Building digital <br />
          <span className="text-slate-400">experiences that matter.</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          I'm a Full Stack Developer specializing in high-performance React applications
          and modern UI/UX design.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all">
            Contact Me
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;