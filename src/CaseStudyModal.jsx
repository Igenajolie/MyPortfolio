import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import huzaflixFull from './assets/huzaflix-casestudy-full.png';

export default function CaseStudyModal({ isOpen, onClose }) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-6"
        >
          <motion.div 
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-white w-full h-full sm:h-[90vh] sm:max-w-6xl sm:rounded-[40px] overflow-hidden flex flex-col shadow-2xl relative"
          >
            
            {/* Sticky Top Bar */}
            <div className="sticky top-0 z-20 flex justify-between items-center px-8 py-6 bg-white/80 backdrop-blur-xl border-b border-black/5">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] font-black tracking-widest text-black bg-gray-100 px-3 py-1.5 rounded-md uppercase">Case Study</span>
                <h3 className="font-serif text-xl font-bold text-gray-900 hidden sm:block">Huzaflix API Ecosystem</h3>
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
              
              {/* Header Info */}
              <div className="px-8 py-16 md:px-16 max-w-4xl mx-auto space-y-12">
                <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-gray-900 leading-[1.1]">
                  Designing a seamless API marketplace experience.
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-black/5">
                  <div>
                    <p className="font-mono text-[9px] font-black uppercase tracking-widest text-black/40 mb-2">Role</p>
                    <p className="font-serif font-bold text-gray-900">BA & Lead Product Designer</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-black uppercase tracking-widest text-black/40 mb-2">Timeline</p>
                    <p className="font-serif font-bold text-gray-900">12 Weeks</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-black uppercase tracking-widest text-black/40 mb-2">Platform</p>
                    <p className="font-serif font-bold text-gray-900">Web Application</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-black uppercase tracking-widest text-black/40 mb-2">Deliverables</p>
                    <p className="font-serif font-bold text-gray-900">UX/UI, Wireframes, Strategy</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                  <div className="space-y-4">
                    <h4 className="font-serif text-2xl font-bold text-gray-900">The Challenge</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      Huzaflix needed to transition from a single API provider to a full-fledged API marketplace. The challenge was designing a dashboard that could gracefully handle API key generation, usage tracking, tier-based billing, and multi-factor authentication without overwhelming the user.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-serif text-2xl font-bold text-gray-900">The Solution</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">
                      By deeply analyzing user workflows, I structured the architecture to separate exploration (API Hub) from management (Dashboard). The resulting UI relies on a clean, card-based aesthetic with robust data visualization for API latencies and spend.
                    </p>
                  </div>
                </div>
              </div>

              {/* Massive Image Gallery */}
              <div className="bg-gray-50 px-4 py-20 sm:px-12 flex justify-center">
                <img 
                  src={huzaflixFull} 
                  alt="Huzaflix High-Fidelity UI Screens" 
                  className="w-full max-w-5xl rounded-[20px] shadow-sm border border-black/5"
                  loading="lazy"
                />
              </div>

              {/* Footer Let's Talk */}
              <div className="py-20 text-center space-y-6">
                <h3 className="font-serif text-3xl font-bold text-gray-900">Like what you see?</h3>
                <a
                  href="mailto:igenajolie@gmail.com"
                  className="inline-flex font-mono px-8 py-4 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors duration-500"
                >
                  Let's Talk
                </a>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
