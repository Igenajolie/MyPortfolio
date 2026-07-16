import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-[100px] -z-20"></div>

      <div className="flex flex-col items-center text-center space-y-12 z-10 max-w-4xl mx-auto mt-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-black/5 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="font-mono text-[10px] font-black tracking-[0.3em] text-black/60 uppercase">Product Designer & Frontend Developer</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-[clamp(3.5rem,10vw,7.5rem)] font-extrabold leading-[1] tracking-tight text-gray-900"
        >
          Designing it. <br /> <span className="italic text-black/60">Building</span> it <span className="text-blue-600">too.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-medium"
        >
          I'm a product designer who writes the code. From early user research and Figma prototypes through to shipped React interfaces — I stay across the full product cycle and own both sides of it.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap gap-6 justify-center pt-8"
        >
          <a href="#Portfolio" className="group relative px-10 py-5 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 hover:-translate-y-1">
            <span className="relative z-10 font-mono">View Case Studies</span>
          </a>
          
          <a href="#Resume" className="font-mono px-10 py-5 bg-white border border-black/5 text-black rounded-full font-black text-xs uppercase tracking-widest hover:border-black/20 hover:bg-gray-50 transition-all duration-500 hover:-translate-y-1 shadow-sm">
            Read Resume
          </a>
        </motion.div>
      </div>

    </section>
  );
}

export default HeroSection;