import { motion } from 'framer-motion';
import huzagridDashboard from './assets/huzagrid-screenshot.png';
import ncsaCatalogue from './assets/ncsa instructor dashboardoverview page.png';
import huzaneticsDashboard from './assets/huzanetics-screenshot.png';
import huzacadDashboard from './assets/huzacad-screenshot.png';
import ivrLanding from './assets/IVR Landing Page.png';
import smartschoolDashboard from './assets/smartschool-dashboard.png';
import huzaflixDashboard from './assets/UserDashBoard.png';

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

function Projects() {
  const featured = {
    title: "HuzaGRID",
    category: "Infrastructure Management · Product Design",
    year: "2025",
    role: "BA & Lead Product Designer",
    description: "A unified platform for managing physical and cloud infrastructure across government and enterprise environments. Led discovery sessions with operations teams, defined the asset lifecycle model, and designed a monitoring dashboard that surfaces critical alerts before they become outages.",
    image: huzagridDashboard,
    tags: ["Business Analysis", "Systems Design", "Figma", "Product Design"],
  };

  const projects = [
    {
      title: "NCSA LMS",
      category: "EdTech · Product Strategy",
      year: "2024",
      description: "A learning platform for Rwanda's National Cybersecurity Authority. Conducted stakeholder workshops to define core learning paths and designed a secure, sandboxed lab environment for hands-on training.",
      image: ncsaCatalogue,
    },
    {
      title: "HuzaNetics",
      category: "Smart Cities · Mobility Analytics",
      year: "2025",
      description: "A real-time mobility analytics platform for city governments — tracking people in motion, active zones, and urban patterns across Kigali. Shaped the product vision and designed the data visualization layer from zero to deployed.",
      image: huzaneticsDashboard,
    },
    {
      title: "HuzaCAD",
      category: "Public Safety · UX Research",
      year: "2024",
      description: "A computer-aided dispatch system for Rwanda's emergency services. Mapped dispatcher decision flows through on-site user research, then designed the incident tracking, live map, and unit coordination interfaces.",
      image: huzacadDashboard,
    },
    {
      title: "IVR Platform",
      category: "Telecoms · Brand Identity",
      year: "2023",
      description: "Designed a clean onboarding flow and visual identity for a B2B voice interaction tool, translating complex telephony requirements into a drag-and-drop user experience that non-technical teams could configure themselves.",
      image: ivrLanding,
    },
    {
      title: "SMARTSchool",
      category: "EdTech · Business Strategy",
      year: "2025",
      description: "Defined the feature roadmap and designed the UX for a full school management ecosystem, balancing the distinct needs of parents, teachers, and administrators into one unified platform.",
      image: smartschoolDashboard,
    },
    {
      title: "Huzaflix Ecosystem",
      category: "Marketplace Strategy · Design",
      year: "2024",
      description: "An API marketplace connecting businesses to emerging technologies. Led the business requirements gathering, market positioning, and full product design lifecycle — cutting integration time by 60%.",
      image: huzaflixDashboard,
    },
  ];

  return (
    <motion.section
      id="Portfolio"
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.8}}
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-32 gap-6">
        <span className="font-mono text-[10px] font-black tracking-[0.4em] text-black/40 uppercase bg-gray-100 px-4 py-2 rounded-full">Selected Work</span>
        <h2 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-tight leading-[1] text-gray-900">
          Case Studies.
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed font-medium max-w-lg mt-4">
          Strategic research, beautiful design, and real-world impact.
        </p>
      </div>

      {/* Featured Project */}
      <div className="group cursor-pointer mb-40">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[40px] bg-gray-50 shadow-sm border border-black/5 mb-10">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute top-8 left-8 flex gap-2">
            <span className="font-mono text-[10px] font-black tracking-widest text-black bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
              Featured Case Study
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-8 space-y-4">
            <h3 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-500">
              {featured.title}
            </h3>
            <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-2xl">
              {featured.description}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 md:items-end md:text-right">
            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40">Role</span>
            <span className="font-serif text-lg font-bold text-gray-900">{featured.role}</span>

            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40 mt-4">Deliverables</span>
            <div className="flex flex-wrap md:justify-end gap-2">
              {featured.tags.map(tag => (
                <span key={tag} className="font-mono text-[9px] font-black uppercase tracking-widest text-gray-600 bg-gray-100 px-3 py-1.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-gray-50 border border-black/5 shadow-sm mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40">{project.category}</span>
                <span className="font-mono text-[10px] font-black tracking-widest text-black/40">{project.year}</span>
              </div>
              <h3 className="font-serif text-3xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-3">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

    </motion.section>
  );
}

export default Projects;
