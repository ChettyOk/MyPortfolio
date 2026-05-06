type Project = {
  title: string;
  oneLiner: string;
  problem: string;
  approach: string;
  tradeoff: string;
  tech: string[];
  highlights: string[];
  links: {
    repo?: string;
    live?: string;
  };
};

const PROJECTS: Project[] = [
  {
    title: "MR Team Optimizer",
    oneLiner:
      "Production-oriented 6v6 composition optimizer with explainable recommendations.",
    problem:
      "Team building in Marvel Rivals is often based on guesswork, with weak visibility into role balance, synergy, and enemy counters.",
    approach:
      "Built a full-stack optimizer with weighted role/synergy/counter scoring, map-aware adjustments, and draft-mode pick suggestions.",
    tradeoff:
      "Used explainable heuristic scoring over opaque ML models to improve trust and debugging at the cost of some predictive complexity.",
    tech: ["Next.js", "TypeScript", "Turbo Monorepo", "Drizzle + Postgres", "Vitest"],
    highlights: [
      "Top-N lineup generation with bans, locks, and pool constraints",
      "Draft-mode next-pick recommendations from current locks",
      "Human-readable explanations for every recommended lineup"
    ],
    links: {
      repo: "https://github.com/ChettyOk/MR_OptimizedTeamComposer",
      live: "#"
    }
  },
  {
    title: "Expense Tracker",
    oneLiner:
      "Personal finance tracker for spend visibility, categories, and monthly control.",
    problem:
      "Most budgeting apps feel noisy and make it hard to quickly understand where money goes month to month.",
    approach:
      "Created a lightweight dashboard with category breakdowns and monthly trend charts focused on fast insights.",
    tradeoff:
      "Prioritized a simple UX and quick readouts over advanced forecasting features for this iteration.",
    tech: ["React", "TypeScript", "Chart.js", "CSS Modules"],
    highlights: [
      "Category and budget tracking with clear monthly summaries",
      "Simple visual reporting optimized for everyday use",
      "Deployed frontend for quick recruiter review"
    ],
    links: {
      repo: "https://github.com/ChettyOk/ExpenseTracker-React",
      live: "https://expense-tracker-react-rho-coral.vercel.app?_vercel_share=80TldmaDlcx0ALlEHrDP3N2Mn1LUYMlZ"
    }
  },
  {
    title: "E-Commerce App",
    oneLiner:
      "Responsive storefront with product discovery, cart state, and checkout-ready flows.",
    problem:
      "Many store demos look polished but do not model realistic shopping behavior like filtering, cart updates, and quick navigation.",
    approach:
      "Built a component-driven React storefront with predictable state management and modular product/catalog UI.",
    tradeoff:
      "Focused on frontend reliability and UX clarity before adding complex backend order and payment orchestration.",
    tech: ["React", "Redux", "Node.js", "REST API", "Responsive Design"],
    highlights: [
      "Product listing and filtering for faster discovery",
      "Cart state management with clear user feedback",
      "UI architecture ready for checkout/payment integration"
    ],
    links: {
      repo: "#",
      live: "#"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 font-sans">
      <h2 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-4 text-slate-900 dark:text-white">
        <span className="text-blue-600 dark:text-cyan-400 font-mono text-2xl">02.</span> Projects
      </h2>

      <p className="mb-12 max-w-3xl text-slate-700 dark:text-slate-400 leading-relaxed">
        Pinned projects with practical depth: each write-up highlights the problem, architectural choices, and tradeoffs, plus links to a live build and repository.
      </p>

      <div className="grid grid-cols-1 gap-10">
        {PROJECTS.map((project, i) => (
          <article key={i} className="group p-1 bg-slate-200/80 dark:bg-slate-800 rounded-[2.5rem] transition-all hover:scale-[1.01]">
            <div className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-[2.3rem] h-full border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-cyan-500/5 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 px-3 py-2 rounded-xl">
                  Pinned Project
                </span>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                {project.oneLiner}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-4">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-2">Problem</p>
                  <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">{project.problem}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-4">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-2">Approach</p>
                  <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">{project.approach}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-4">
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-2">Tradeoff</p>
                  <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">{project.tradeoff}</p>
                </div>
              </div>

              <ul className="mb-8 grid gap-2">
                {project.highlights.map((item) => (
                  <li key={item} className="text-sm text-slate-700 dark:text-slate-400 flex items-start gap-2">
                    <span className="mt-1 text-blue-600 dark:text-cyan-400">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-black tracking-widest uppercase px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-800">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.links.repo || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-black uppercase tracking-widest rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-blue-600 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all"
                >
                  View Repo
                </a>
                <a
                  href={project.links.live || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-black uppercase tracking-widest rounded-xl bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 hover:bg-blue-700 dark:hover:bg-cyan-400 transition-all"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;