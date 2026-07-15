import { motion } from 'framer-motion';

function Resume() {
  const experiences = [
    {
      company: "Huzalabs",
      role: "Business Analyst & Product Designer",
      period: "Jan 2025 — Present",
      description: "Leading product strategy and design at a fast-growing tech company in Kigali. Bridging the gap between stakeholders and engineering by gathering core business requirements, establishing brand identities, and designing end-to-end user experiences for enterprise systems across cybersecurity, public safety, and telecoms.",
      highlights: ["Business Analysis", "Brand Strategy", "Figma", "Stakeholder Management", "UX Research"]
    }
  ];

  const education = [
    {
      institution: "University of Rwanda",
      degree: "BSc Computer and Software Engineering",
      period: "Expected Oct 2026",
      note: "Human-Computer Interaction · Systems Architecture · Data Analytics"
    },
    {
      institution: "Huzalabs",
      degree: "Data Science & Machine Learning",
      period: "2025",
      note: "AI & Data Science for Women — Professional Certificate"
    }
  ];

  const competencies = [
    "Business Analysis",
    "Product Strategy",
    "Brand Identity",
    "UX/UI Design",
    "User Research",
    "Requirements Gathering",
    "Figma",
    "Wireframing",
    "Stakeholder Management",
    "Agile / Scrum",
  ];

  return (
    <motion.section 
      id="Resume" 
      initial={{opacity:0, y:30}} 
      whileInView={{opacity:1, y:0}} 
      viewport={{once:true}} 
      transition={{duration:0.8}} 
      className="py-32 px-6 max-w-7xl mx-auto"
    >

      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-black/20"></div>
            <span className="font-mono text-[10px] font-black tracking-[0.4em] text-black/40 uppercase">Credentials</span>
          </div>
          <h2 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-bold tracking-tight leading-[1] text-gray-900">
            Experience.
          </h2>
        </div>
        <a
          href="#"
          className="font-mono group flex items-center gap-4 px-10 py-5 bg-white border border-black/10 shadow-sm rounded-full hover:border-black/30 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-500 self-start md:self-auto"
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-black">Download CV</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/40 group-hover:text-black">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>

      {/* Main content grid - Dribbble Style (Ultra clean, spacious) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-24">

        {/* Left: Work Experience Timeline */}
        <div>
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-black/30 mb-16">Work Experience</p>
          <div className="relative space-y-24">
            
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl font-bold tracking-tight text-gray-900">{exp.role}</h3>
                    <p className="font-mono text-sm font-bold text-blue-600 uppercase tracking-widest">{exp.company} · Kigali, Rwanda</p>
                  </div>
                  <span className="font-mono text-[10px] font-black tracking-widest text-gray-500 bg-gray-100 px-4 py-2 rounded-full uppercase shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-lg text-gray-500 leading-relaxed max-w-2xl font-medium mb-8">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map(tag => (
                    <span key={tag} className="font-mono text-[9px] font-black uppercase tracking-widest text-gray-600 bg-gray-100 border border-black/5 px-4 py-2 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Projects delivered */}
                <div className="mt-12 space-y-4">
                  <p className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Key Deliverables</p>
                  <div className="flex flex-wrap gap-2">
                    {["NCSA LMS", "Huzaflix", "Emergency Response", "IVR Platform", "Huzanetics", "Smart Triage", "SMARTSchool"].map(p => (
                      <span key={p} className="font-mono text-[10px] font-bold text-gray-700 bg-white border border-black/10 shadow-sm px-4 py-2 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right: Education + Competencies */}
        <div className="space-y-20 lg:pl-16">

          {/* Core Competencies */}
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-black/30 mb-10">Strategy & Design Skills</p>
            <div className="flex flex-wrap gap-3">
              {competencies.map(c => (
                <span key={c} className="font-mono text-[10px] font-black uppercase tracking-widest text-gray-600 bg-white shadow-sm border border-black/5 px-4 py-2 rounded-full cursor-default">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-black/30 mb-10">Education</p>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="group space-y-3 pb-12 border-b border-black/5 last:border-0 last:pb-0">
                  <h4 className="font-serif text-xl font-bold leading-tight text-gray-900">{edu.degree}</h4>
                  <p className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest">{edu.institution}</p>
                  <p className="text-sm text-gray-500 font-medium">{edu.note}</p>
                  <span className="inline-block font-mono text-[9px] font-black tracking-widest text-gray-400 bg-gray-100 px-3 py-1 rounded-md mt-2">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Availability card */}
          <div className="p-10 border border-black/5 rounded-[40px] bg-gray-50 shadow-sm hover:shadow-md hover:border-black/10 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse" />
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40">Open to Opportunities</span>
            </div>
            <p className="text-base font-medium text-gray-600 leading-relaxed mb-8">
              Looking for roles in Product Strategy, Business Analysis, or Brand Design. Based in Kigali, open to remote.
            </p>
            <a
              href="mailto:igenajolie@gmail.com"
              className="font-mono inline-block text-xs font-black uppercase tracking-widest text-black border-b border-black/20 pb-1 hover:border-black hover:text-blue-600 transition-colors duration-300"
            >
              igenajolie@gmail.com
            </a>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default Resume;
