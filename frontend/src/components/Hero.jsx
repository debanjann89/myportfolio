import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      
      {/* SKY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-sky-50 -z-20"></div>
      
      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-[100px] opacity-40 animate-pulse delay-700"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl relative z-10"
      >
        <span className="inline-block py-2 px-4 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-sky-600 text-sm font-bold mb-6 shadow-sm">
          ✨ Available for Freelance & Full-Time
        </span>
        
        <h2 className="text-6xl md:text-7xl font-bold mb-6 text-slate-800 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Debanjan</span>
        </h2>
        
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Converting complex problems into 
          <span className="font-semibold text-sky-600"> clear, fluid, and scalable</span> solutions.
        </p>
        
        <div className="flex gap-6 justify-center">
          <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-sky-500/30 transform hover:-translate-y-1">
            View My Work
          </a>
          {/* Glass Button */}
          <a href="#contact" className="px-8 py-4 liquid-glass text-slate-700 hover:text-sky-600 rounded-xl font-bold transition-all hover:bg-white/60">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;