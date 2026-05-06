const About = () => {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    Backend: ["Node.js", "Express", "PostgreSQL", "REST APIs", "Python"],
    "DevOps & Tools": ["Git/GitHub", "Vercel", "Docker", "CI Basics", "Vitest"]
  };

  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Bio & Skills */}
        <div className="lg:col-span-7 font-sans">
          <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4 text-slate-900 dark:text-white">
            <span className="text-blue-600 dark:text-cyan-400 font-mono text-2xl">01.</span> About Me
          </h2>
          
          <div className="space-y-6 text-slate-700 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              I am <span className="text-slate-900 dark:text-slate-200 font-bold">Chetachukwu Okonkwo</span>, a developer who enjoys building products that are useful, fast, and maintainable.
              I care about writing clear code, making practical architecture choices, and documenting tradeoffs so collaborators can move quickly.
            </p>
            <p>
              Most of my recent work is in full-stack JavaScript/TypeScript apps, especially tools that turn complicated decisions into readable, explainable outputs.
              I am currently focused on internship and early-career software engineering opportunities.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/80 dark:bg-slate-900/50">
              <p className="text-xs font-black tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-1">Focus</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Full-stack product engineering</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/80 dark:bg-slate-900/50">
              <p className="text-xs font-black tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-1">Strength</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Explainable, practical architecture</p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/80 dark:bg-slate-900/50">
              <p className="text-xs font-black tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-1">Availability</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Open to new opportunities</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category}>
                <h3 className="text-slate-900 dark:text-white font-bold mb-4 text-xs uppercase tracking-[0.2em]">{category}</h3>
                <ul className="space-y-3">
                  {list.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-slate-700 dark:text-slate-400 text-sm font-medium">
                      <span className="text-blue-600 dark:text-cyan-400 text-xs">▹</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Highlights */}
        <div className="lg:col-span-5 relative group mt-12 lg:mt-0">
          <div className="relative w-full mx-auto">
            <div className="absolute inset-0 border-2 border-blue-600 dark:border-cyan-400 translate-x-5 translate-y-5 rounded-3xl group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>

            <div className="relative z-10 w-full bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-500 p-8 md:p-10">
              <p className="text-xs font-black tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-6">
                Engineering Principles
              </p>
              <div className="space-y-4">
                {[
                  "Solve real user problems before polishing visuals.",
                  "Favor simple, debuggable systems over clever complexity.",
                  "Ship with readable code, tests, and clear documentation.",
                  "Measure impact with practical outcomes and iteration."
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-cyan-400 mt-1">▹</span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;