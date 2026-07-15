import NavBar from "./NavBar";
import HeroSection from "./herosection.jsx";
import Projects from "./project.jsx";
import Resume from "./Experience.jsx";
import Skills from "./Skills.jsx";
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-primary text-accent selection:bg-black selection:text-black font-sans">
      <NavBar />

      <main className="space-y-10">
        <HeroSection />
        <Projects />
        <Resume />
        <Skills />
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-40 px-6 border-t border-black/5 mt-20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-tight leading-[0.9]">
                Designing <br />
                the <span className="text-gradient">future.</span>
              </h2>
              <p className="text-xl text-accent-muted max-w-md leading-relaxed font-medium">
                I design and build products end to end — from wireframes to shipped frontend. If you have an idea and need someone who can own the whole product, let's talk.
              </p>
            </div>
            
            <div className="flex gap-10">
              {[
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jolie-a-igena-35a234401/' },
                { label: 'GitHub', url: 'https://github.com' },
              ].map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-accent-muted hover:text-black transition-all duration-300 relative group pb-1">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-12">
            <a 
              href="mailto:igenajolie@gmail.com"
              className="text-[clamp(1.2rem,3.5vw,2.8rem)] font-extrabold hover:text-black/70 transition-all duration-500 underline decoration-black/10 underline-offset-[16px] hover:decoration-black/40"
            >
              igenajolie@gmail.com
            </a>
            
            <div className="p-8 glass rounded-[32px] border border-black/5 flex items-center gap-6 group cursor-pointer hover:border-black/20 transition-all duration-500">
               <div className="font-serif w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-black text-lg">A.</div>
               <div className="space-y-1">
                 <p className="font-mono text-xs font-black uppercase tracking-widest">Available for hire</p>
                 <p className="font-mono text-[10px] font-bold text-accent-muted group-hover:text-black transition-colors">Responding in ~24 hours</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between gap-6 font-mono text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
          <p>© 2026 AIMEE • PRODUCT DESIGNER & BRAND STRATEGIST</p>
          <div className="flex gap-10">
            <p>KIGALI, RWANDA</p>
            <p>BA • PRODUCT DESIGN • BRANDING</p>
          </div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-t from-blue-100/50 to-purple-100/50 rounded-full blur-[150px] -z-10"></div>
      </motion.footer>
    </div>
  );
}

export default App;
