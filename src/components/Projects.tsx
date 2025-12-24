const PROJECTS = [
    {
      title: "AI SaaS Platform",
      desc: "A Next.js dashboard with OpenAI integration and Stripe payments.",
      tech: ["Next.js", "Tailwind", "Prisma"],
      link: "#"
    },
    {
      title: "E-Commerce App",
      desc: "High-performance store with real-time inventory and search.",
      tech: ["React", "Redux", "Node.js"],
      link: "#"
    }
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-cyan-400">02.</span> Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-cyan-400/50 transition-all">
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400">{project.title}</h3>
              <p className="text-slate-400 mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-mono px-2 py-1 bg-white/5 text-slate-300 rounded">{t}</span>
                ))}
              </div>
              <a href={project.link} className="text-sm font-bold uppercase tracking-widest text-white hover:text-cyan-400">
                Explore Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;