import Image from 'next/image';

const About = () => {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    Backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "GraphQL"],
    Tools: ["Git", "Docker", "AWS", "Figma", "Jest"]
  };

  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Bio & Skills */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-xl">02.</span> About Me
          </h2>
          
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              Hello! My name is Chetachukwu Okonkwo and I enjoy creating things that live on the internet. 
              My journey in web development started back in 2018 when I decided to build a custom 
              blog—turns out hacking together a WordPress theme taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an 
              <span className="text-cyan-400"> advertising agency</span>, a 
              <span className="text-cyan-400"> start-up</span>, and a 
              <span className="text-cyan-400"> large corporation</span>. My main focus 
              these days is building accessible, inclusive products and digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category}>
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">{category}</h3>
                <ul className="space-y-2">
                  {list.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-slate-400 text-sm">
                      <span className="text-cyan-400">▹</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image/Decorative Profile */}
        <div className="lg:col-span-5 relative group">
          <div className="relative w-full aspect-square max-w-[400px] mx-auto">
            {/* The "Frame" decoration */}
            <div className="absolute inset-0 border-2 border-cyan-400 translate-x-5 translate-y-5 rounded-xl group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
            
            {/* Image Placeholder */}
            <div className="relative z-10 w-full h-full bg-slate-800 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
              <div className="flex items-center justify-center h-full text-slate-600 italic">
                {/* Replace with <Image src="/profile.jpg" fill alt="Profile" /> */}
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