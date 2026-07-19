import { motion } from 'framer-motion';
import { useState } from 'react';
import portfolioData from './data/portfolio.json';
import huzagridDashboard from './assets/huzagrid-new-1.png';
import ncsaCatalogue from './assets/ncsa instructor dashboardoverview page.png';
import huzaneticsDashboard from './assets/huzanetics-screenshot.png';
import huzacadDashboard from './assets/huzacad-screenshot.png';
import ivrLanding from './assets/IVR Landing Page.png';
import smartschoolDashboard from './assets/smartschool-dashboard.png';
import huzaflixDashboard from './assets/UserDashBoard.png';

// Extracted Huzaflix Screens
import hf14 from './assets/huzaflix-screen-14.png';
import hf13 from './assets/huzaflix-screen-13.png';
import hf10 from './assets/huzaflix-screen-10.png';
import hf11 from './assets/huzaflix-screen-11.png';
import hf7 from './assets/huzaflix-screen-7.png';

// Extracted LMS Screens
import lmsDashboard from './assets/lms-dashboard.png';
import lmsSandbox from './assets/lms-sandbox.png';
import lmsCourseBuilder from './assets/lms-course-builder.png';
import lmsCourses from './assets/lms-courses.png';

// Extracted HuzaGRID Screens
import hgNew1 from './assets/huzagrid-new-1.png';
import hgNew2 from './assets/huzagrid-new-2.png';
import hgNew3 from './assets/huzagrid-new-3.png';
import hgNew4 from './assets/huzagrid-new-4.png';

// Extracted HuzaNetics Screens
import hnDashboard from './assets/huzanetics-dashboard.png';
import hnScreenshot from './assets/huzanetics-screenshot.png';

import CaseStudyModal from './CaseStudyModal.jsx';

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const caseStudyData = {
    huzaflix: {
      title: "Huzaflix API Ecosystem",
      headline: "Architecting the future of API marketplaces.",
      subheadline: "A deep dive into transforming a complex, developer-heavy platform into a seamless, accessible marketplace for businesses and creators.",
      role: "BA & Lead Product Designer",
      timeline: "12 Weeks",
      platform: "Web Application",
      deliverables: "UX/UI, Wireframes, Strategy",
      impactStatement: "Reduced integration time by 60% through an intuitive self-service portal.",
      images: { heroMain: hf14, heroSecondary: hf13 },
      sections: [
        {
          title: "Balancing complexity with elegant simplicity.",
          paragraphs: [
            "API platforms are inherently complex. They require managing keys, tracking latency, monitoring spend, and setting up strict security protocols.",
            "The primary business requirement was to create an ecosystem that felt as easy to use as Netflix, while providing enterprise-grade analytics to the engineers actually integrating the services."
          ],
          image: hf10
        },
        {
          title: "Designing for Trust & Security",
          paragraphs: [
            "Trust is the currency of any API marketplace. We completely overhauled the security settings, ensuring that Two-Factor Authentication (2FA) and access revocation were front and center, never buried in nested menus."
          ],
          cardTitle: "Frictionless 2FA",
          cardText: "A seamless authentication flow that ensures security without frustrating the developer.",
          imageSmall: hf11,
          imageLarge: hf7
        }
      ]
    },
    lms: {
      title: "NCSA Learning Management",
      headline: "Empowering instructors with intuitive tools.",
      subheadline: "Revamping the National Cyber Security Academy's learning portal to enhance course creation, lab management, and student tracking.",
      role: "Product Designer",
      timeline: "8 Weeks",
      platform: "Web Platform",
      deliverables: "UI Design, Dashboard Architecture",
      impactStatement: "Increased course creation speed by 45% through a unified instructor dashboard.",
      images: { heroMain: lmsDashboard, heroSecondary: lmsCourses },
      sections: [
        {
          title: "Seamless Course & Lab Creation",
          paragraphs: [
            "Instructors previously struggled with disjointed systems for creating courses and managing sandbox environments.",
            "I designed a streamlined Course Builder and Studio/Sandbox interface that allows instructors to quickly configure learning modules and deploy secure lab environments in just a few clicks."
          ],
          image: lmsCourseBuilder
        },
        {
          title: "The Sandbox Environment",
          paragraphs: [
            "Cybersecurity training requires secure, isolated environments. We built a 'Studio' where instructors can spin up and monitor active sandboxes for their students in real-time."
          ],
          cardTitle: "Live Monitoring",
          cardText: "Real-time visibility into active student lab environments.",
          imageSmall: lmsCourses,
          imageLarge: lmsSandbox
        }
      ]
    },
    huzagrid: {
      title: "HuzaGRID",
      headline: "Unified infrastructure intelligence.",
      subheadline: "A centralized platform for managing physical and cloud infrastructure across government and enterprise environments.",
      role: "BA & Lead Product Designer",
      timeline: "16 Weeks",
      platform: "Enterprise Web App",
      deliverables: "Systems Design, UI Architecture",
      impactStatement: "Reduced mean-time-to-resolution (MTTR) by surfacing critical topology alerts.",
      images: { heroMain: hgNew1, heroSecondary: hgNew2 },
      sections: [
        {
          title: "Visualizing the Unseen",
          paragraphs: [
            "Operations teams were drowning in alerts from disconnected systems. HuzaGRID unifies hardware, network, and cloud telemetry into a single, cohesive dashboard.",
            "The challenge was presenting immense data density without overwhelming the user."
          ],
          image: hgNew3
        }
      ]
    },
    huzanetics: {
      title: "HuzaNetics Analytics",
      headline: "Real-time mobility & urban insights.",
      subheadline: "Designing the data visualization layer for a smart city analytics platform that tracks people in motion, active zones, and urban patterns.",
      role: "Lead Product Designer",
      timeline: "14 Weeks",
      platform: "Analytics Dashboard",
      deliverables: "Data Visualization, UX/UI, Dashboard Architecture",
      impactStatement: "Enabled city planners to identify high-traffic zones 3x faster through intuitive heatmaps.",
      images: { heroMain: hnScreenshot, heroSecondary: hnDashboard },
      sections: [
        {
          title: "Making Data Actionable",
          paragraphs: [
            "City governments possess massive amounts of movement data but struggle to make it actionable.",
            "I led the design of a highly visual dashboard that transforms raw tracking data into intuitive heatmaps and metric cards, allowing non-technical policymakers to make immediate infrastructure decisions."
          ],
          image: hnDashboard
        }
      ]
    }
  };

  const openCaseStudy = (key) => {
    setActiveCaseStudy(caseStudyData[key]);
    setIsModalOpen(true);
  };

  const imageMap = {
    "huzagrid-new-1.png": huzagridDashboard,
    "ncsa instructor dashboardoverview page.png": ncsaCatalogue,
    "huzanetics-screenshot.png": huzaneticsDashboard,
    "huzacad-screenshot.png": huzacadDashboard,
    "IVR Landing Page.png": ivrLanding,
    "smartschool-dashboard.png": smartschoolDashboard,
    "UserDashBoard.png": huzaflixDashboard
  };

  const featured = {
    ...portfolioData.featured,
    image: imageMap[portfolioData.featured.image] || portfolioData.featured.image,
  };

  const projects = portfolioData.projects.map(p => ({
    ...p,
    image: imageMap[p.image] || p.image
  }));

  return (
    <motion.section
      id="Portfolio"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center text-center mb-32 gap-6">
        <span className="font-mono text-[10px] font-black tracking-[0.4em] text-black/40 uppercase bg-gray-100 px-4 py-2 rounded-full">Selected Work</span>
        <h2 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-bold tracking-tight leading-[1] text-gray-900">
          Case Studies.
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed font-medium max-w-lg mt-4">
          Strategic research, beautiful design, and real-world impact.
        </p>
      </div>

      <div className="group cursor-pointer mb-40">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[40px] bg-gray-50 shadow-sm border border-black/5 mb-10">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute top-8 left-8">
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
            
            <button 
              onClick={() => openCaseStudy('huzagrid')}
              className="mt-6 font-mono px-8 py-4 bg-black text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors duration-300"
            >
              View Case Study
            </button>
          </div>
        </div>
      </div>

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
              {project.hasCaseStudy && (
                <button
                  onClick={() => openCaseStudy(project.hasCaseStudy)}
                  className="mt-6 font-mono px-8 py-4 bg-black text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors duration-300"
                >
                  View Case Study
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={activeCaseStudy} />
    </motion.section>
  );
}

export default Projects;
