import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "logos:react" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
        { name: "Vite", icon: "logos:vitejs" }
      ]
    },
    {
      title: "Product Design",
      skills: [
        { name: "UI/UX Design", icon: "mdi:palette-outline" },
        { name: "Wireframing", icon: "mdi:vector-square" },
        { name: "Prototyping", icon: "mdi:animation-play-outline" },
        { name: "Figma", icon: "logos:figma" }
      ]
    },
    {
      title: "Brand & Identity",
      skills: [
        { name: "Brand Strategy", icon: "mdi:bullseye-arrow" },
        { name: "Visual Identity", icon: "mdi:drawing" },
        { name: "Creative Direction", icon: "mdi:compass-outline" },
        { name: "Typography", icon: "mdi:format-text" }
      ]
    }
  ];

  return (
    <motion.section 
      id="Skills" 
      initial={{opacity:0, y:30}} 
      whileInView={{opacity:1, y:0}} 
      viewport={{once:true}} 
      transition={{duration:0.8}} 
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center text-center mb-32 gap-6">
        <span className="font-mono text-[10px] font-black tracking-[0.4em] text-black/40 uppercase bg-gray-100 px-4 py-2 rounded-full">My Arsenal</span>
        <h2 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-tight text-gray-900 leading-[1]">
          Design & Code.
        </h2>
        <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-medium mt-4">
          The tools I use to take a product from research and wireframes to shipped, working code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white border border-black/5 rounded-[40px] p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
            <h3 className="font-serif text-2xl font-bold mb-12 border-b border-black/5 pb-6 flex items-center justify-between text-gray-900">
              {category.title}
              <span className="font-mono text-[10px] font-black text-black/20">0{index + 1}</span>
            </h3>
            <div className="grid grid-cols-2 gap-y-10 gap-x-6">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-[24px] bg-gray-50 border border-black/5 group-hover:bg-white group-hover:shadow-sm transition-all duration-500">
                    <Icon icon={skill.icon} width="32" height="32" className="text-gray-400 group-hover:text-blue-500 transition-colors duration-500" />
                  </div>
                  <span className="font-mono text-[9px] font-black uppercase tracking-widest text-gray-500">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
