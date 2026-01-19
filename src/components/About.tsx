import Image from 'next/image';

const About = () => {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    Backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "GraphQL"],
    Tools: ["Git", "Docker", "AWS", "Figma", "Jest"]
  };

  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Bio & Skills */}
        <div className="lg:col-span-7 font-sans">
          <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-4 text-slate-900 dark:text-white">
            <span className="text-blue-600 dark:text-cyan-400 font-mono text-2xl">01.</span> About Me
          </h2>
          
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              Hello! My name is <span className="text-slate-900 dark:text-slate-200 font-bold">Chetachukwu Okonkwo</span> and I enjoy creating things that live on the internet. 
              My journey in web development started back in 2018 when I decided to build a custom 
              blog—turns out hacking together a WordPress theme taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an 
              <span className="text-blue-600 dark:text-cyan-400 font-medium italic"> advertising agency</span>, a 
              <span className="text-blue-600 dark:text-cyan-400 font-medium italic"> start-up</span>, and a 
              <span className="text-blue-600 dark:text-cyan-400 font-medium italic"> large corporation</span>. 
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category}>
                <h3 className="text-slate-900 dark:text-white font-bold mb-4 text-xs uppercase tracking-[0.2em]">{category}</h3>
                <ul className="space-y-3">
                  {list.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                      <span className="text-blue-600 dark:text-cyan-400 text-xs">▹</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image/Decorative Profile */}
        <div className="lg:col-span-5 relative group mt-12 lg:mt-0">
          <div className="relative w-full aspect-square max-w-380px mx-auto">
            {/* The "Frame" decoration */}
            <div className="absolute inset-0 border-2 border-blue-600 dark:border-cyan-400 translate-x-5 translate-y-5 rounded-3xl group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
            
            {/* Image Placeholder */}
            <div className="relative z-10 w-full h-full bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-500">
              <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 italic font-mono bg-linear-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-950">
                {/* Replace with <Image src="/profile.jpg" fill alt="Profile" className="object-cover grayscale hover:grayscale-0 transition-all duration-500" /> */}
                [Profile Image]
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;