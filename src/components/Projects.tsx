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
    <section id="projects" className="py-24 font-sans">
      <h2 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-4 text-slate-900 dark:text-white">
        <span className="text-blue-600 dark:text-cyan-400 font-mono text-2xl">02.</span> Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, i) => (
          <div key={i} className="group p-1 bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] transition-all hover:scale-[1.02]">
            <div className="bg-white dark:bg-slate-950 p-8 rounded-[2.3rem] h-full border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-cyan-500/5 transition-all">
              <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-black tracking-widest uppercase px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
              
              <a href={project.link} className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-all">
                Explore Project <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;