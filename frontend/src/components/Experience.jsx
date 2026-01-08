import { useEffect, useState } from "react";
import api from "../api";
import { motion } from "framer-motion";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    api.get("/experience")
      .then(res => setExperiences(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="experience" className="py-20 bg-sky-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-30 -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-center text-slate-800">My Journey</h2>
        
        {/* Timeline Container */}
        <div className="relative border-l-2 border-sky-200 ml-4 md:ml-0 md:pl-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* --- FIX IS HERE: THE DOT --- */}
              {/* 1. Added 'top-2' (pushes it down 8px to align with text) */}
              {/* 2. Added 'ring-4 ring-sky-50' (adds a gap between line and dot) */}
              <div className="absolute -left-[9px] top-2 w-5 h-5 bg-sky-500 rounded-full border-4 border-white shadow-md shadow-sky-200 ring-4 ring-sky-50 z-10"></div>
              
              <div className="md:grid md:grid-cols-5 gap-6 items-start">
                {/* Date Badge */}
                <div className="md:col-span-1 mb-3 md:mb-0 flex items-center">
                    <span className="inline-block text-xs font-bold text-sky-700 bg-sky-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-sky-200 shadow-sm">
                        {exp.duration}
                    </span>
                </div>
                
                {/* Content Card */}
                <div className="md:col-span-4 liquid-glass p-8 rounded-3xl hover:bg-white/40 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                    <p className="text-sky-600 font-semibold text-sm mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      {exp.company}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {exp.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;