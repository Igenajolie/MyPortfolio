import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Hyper-Realistic MacBook Pro Mockup Component
const MacBookMockup = ({ children, className = "" }) => (
  <div className={`relative flex flex-col items-center ${className}`}>
    {/* Screen Top Lid */}
    <div className="relative w-full rounded-t-[1.5rem] bg-[#111] p-3 sm:p-4 shadow-2xl border-t border-white/20 border-b border-[#333] z-10" style={{ aspectRatio: '16/10' }}>
      {/* Camera Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 bg-[#111] rounded-b-[0.5rem] z-20 flex justify-center items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white/10 flex items-center justify-center">
           <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
        </div>
      </div>
      
      {/* Screen Content Wrapper */}
      <div className="relative w-full h-full bg-black rounded-[0.5rem] overflow-hidden">
        {children}
      </div>
    </div>
    
    {/* Base/Keyboard Deck (Front Lip) */}
    <div className="relative w-[105%] h-3 sm:h-4 bg-gradient-to-b from-[#e0e1e2] to-[#b3b4b5] rounded-b-[1rem] sm:rounded-b-[1.5rem] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.5)] z-0 flex justify-center">
      {/* Trackpad Indentation */}
      <div className="w-1/6 h-1.5 sm:h-2 bg-[#d1d2d3] rounded-b-md shadow-inner mt-0"></div>
    </div>
  </div>
);

// iPad Pro Mockup Component
const IPadMockup = ({ children, className = "" }) => (
  <div className={`relative rounded-[2rem] bg-[#111] p-3 sm:p-4 shadow-2xl border border-white/10 ${className}`} style={{ aspectRatio: '3/4' }}>
    {/* Front Camera */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/10 z-20"></div>
    {/* Screen */}
    <div className="relative w-full h-full bg-black rounded-[1.2rem] overflow-hidden">
      {children}
    </div>
  </div>
);

export default function CaseStudyModal({ isOpen, onClose, data }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-md p-0 sm:p-6"
        >
          <motion.div 
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-gray-50 w-full h-full sm:h-[95vh] sm:max-w-7xl sm:rounded-[40px] overflow-hidden flex flex-col shadow-2xl relative"
          >
            
            {/* Sticky Top Bar */}
            <div className="sticky top-0 z-20 flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-xl border-b border-black/5">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] font-black tracking-widest text-black bg-blue-100 text-blue-800 px-3 py-1.5 rounded-md uppercase">Case Study</span>
                <h3 className="font-serif text-xl font-bold text-gray-900 hidden sm:block">{data.title}</h3>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto scroll-smooth">
              
              {/* Hero Section */}
              <div className="px-8 py-20 md:px-16 max-w-6xl mx-auto text-center space-y-8">
                <h2 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-bold tracking-tight text-gray-900 leading-[1.05]">
                  {data.headline}
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium">
                  {data.subheadline}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
                  <div>
                    <p className="font-mono text-[9px] font-black uppercase tracking-widest text-black/40 mb-2">Role</p>
                    <p className="font-serif text-lg font-bold text-gray-900">{data.role}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-black uppercase tracking-widest text-black/40 mb-2">Timeline</p>
                    <p className="font-serif text-lg font-bold text-gray-900">{data.timeline}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-black uppercase tracking-widest text-black/40 mb-2">Platform</p>
                    <p className="font-serif text-lg font-bold text-gray-900">{data.platform}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-black uppercase tracking-widest text-black/40 mb-2">Deliverables</p>
                    <p className="font-serif text-lg font-bold text-gray-900">{data.deliverables}</p>
                  </div>
                </div>
              </div>

              {/* L-Form Hero Image Gallery using Realistic MacBook & iPad Mockups */}
              <div className="px-4 sm:px-12 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
                  <div className="lg:col-span-8">
                    <MacBookMockup>
                      <img 
                        src={data.images.heroMain} 
                        alt="Main Platform Overview" 
                        className="w-full h-full object-cover object-top"
                      />
                    </MacBookMockup>
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-8">
                    <IPadMockup className="hidden lg:block h-[350px]">
                      <img 
                        src={data.images.heroSecondary} 
                        alt="Secondary Module" 
                        className="w-full h-full object-cover object-top"
                      />
                    </IPadMockup>
                    <div className="flex-1 bg-blue-600 rounded-2xl p-8 flex flex-col justify-end text-white shadow-xl transform translate-y-4">
                      <p className="font-mono text-[10px] font-black uppercase tracking-widest mb-4 opacity-70">The Impact</p>
                      <p className="font-serif text-2xl font-bold leading-snug">{data.impactStatement}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Narrative Section 1 */}
              {data.sections[0] && (
                <div className="bg-white py-32 px-8">
                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                      <h3 className="font-serif text-4xl font-bold text-gray-900 leading-tight">{data.sections[0].title}</h3>
                      {data.sections[0].paragraphs.map((p, i) => (
                        <p key={i} className="text-lg text-gray-500 leading-relaxed">{p}</p>
                      ))}
                    </div>
                    <MacBookMockup>
                       <img 
                          src={data.sections[0].image} 
                          alt={data.sections[0].title} 
                          className="w-full h-full object-cover object-top"
                        />
                    </MacBookMockup>
                  </div>
                </div>
              )}

              {/* Narrative Section 2 (Asymmetrical L-Form) */}
              {data.sections[1] && (
                <div className="bg-gray-900 py-32 px-8 text-white">
                  <div className="max-w-6xl mx-auto">
                    <div className="mb-20 max-w-2xl">
                      <h3 className="font-serif text-4xl font-bold leading-tight mb-6">{data.sections[1].title}</h3>
                      {data.sections[1].paragraphs.map((p, i) => (
                        <p key={i} className="text-lg text-gray-400 leading-relaxed">{p}</p>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                      <div className="lg:col-span-4 flex flex-col gap-8">
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mb-6"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                          <h4 className="font-serif text-xl font-bold mb-3">{data.sections[1].cardTitle}</h4>
                          <p className="text-gray-400 text-sm">{data.sections[1].cardText}</p>
                        </div>
                        <IPadMockup className="h-[300px]">
                           <img 
                              src={data.sections[1].imageSmall} 
                              alt="Feature highlight" 
                              className="w-full h-full object-cover object-top"
                            />
                        </IPadMockup>
                      </div>
                      <div className="lg:col-span-8">
                        <MacBookMockup>
                           <img 
                              src={data.sections[1].imageLarge} 
                              alt="Core interface" 
                              className="w-full h-full object-cover object-top"
                            />
                        </MacBookMockup>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Let's Talk */}
              <div className="py-32 text-center space-y-8 bg-white">
                <h3 className="font-serif text-5xl font-bold text-gray-900">Ready to build something similar?</h3>
                <a
                  href="mailto:igenajolie@gmail.com"
                  className="inline-flex font-mono px-12 py-5 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors duration-500 shadow-xl"
                >
                  Start a Conversation
                </a>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
