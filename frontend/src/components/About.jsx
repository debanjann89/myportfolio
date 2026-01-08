import { motion } from "framer-motion";// Check your file extension (.png, .jpeg?)

const About = () => {
  return (
    <section id="about" className="py-20 bg-sky-50 relative overflow-hidden">
      
      {/* 1. SKY THEME BACKGROUND BLOBS */}
      {/* Top Right: Bright Sky Blue */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      {/* Bottom Left: Softer Cyan/Blue */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sky-600 font-bold tracking-widest uppercase mb-2 text-sm">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 leading-tight">
            Designing with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Cloud-Like Fluidity</span>
          </h3>
          
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
            <p>
              I'm <strong>Debanjan Amin</strong>, a Full Stack Developer. Like the sky, my code is vast, clear, and limitless.
              Currently pursuing my MCA, I build <span className="text-sky-600 font-medium">clean, airy interfaces</span> backed by robust logic.
            </p>
          </div>

          {/* SKY GLASS STATS CARDS */}
          <div className="flex flex-wrap gap-4">
             {/* Card 1 */}
             <div className="liquid-glass p-5 rounded-2xl min-w-[120px] text-center transform hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-3xl font-bold text-sky-600">MCA</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase mt-1">Pursuing</p>
             </div>
             
             {/* Card 2 */}
             <div className="liquid-glass p-5 rounded-2xl min-w-[120px] text-center transform hover:-translate-y-1 transition-transform duration-300 delay-100">
                <h4 className="text-3xl font-bold text-blue-600">4+</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase mt-1">Live Projects</p>
             </div>

             {/* Card 3 */}
             <div className="liquid-glass p-5 rounded-2xl min-w-[120px] text-center transform hover:-translate-y-1 transition-transform duration-300 delay-200">
                <h4 className="text-3xl font-bold text-cyan-600">9.1</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase mt-1">BCA CGPA</p>
             </div>
          </div>
        </motion.div>

        {/* Right: Image in Sky Glass Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* The Liquid Frame */}
          <div className="liquid-glass p-4 rounded-[2.5rem] relative z-10">
            <img 
              src="/profile.jpg" 
              alt="Debanjan Amin" 
              className="w-full h-auto object-cover rounded-[1rem] shadow-sm"
            />
            
            {/* Floating Glass Badge */}
            <div className="absolute -bottom-6 -right-6 liquid-glass px-6 py-4 rounded-xl flex items-center gap-3 animate-bounce shadow-lg border-white/80">
                <div className="w-3 h-3 bg-sky-500 rounded-full animate-ping"></div>
                <span className="font-bold text-sky-900 text-sm">Open to Work</span>
            </div>
          </div>
          
          {/* Background decoration behind the glass */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 to-blue-200 rounded-[2.5rem] rotate-6 scale-95 -z-10 blur-sm"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;