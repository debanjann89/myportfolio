import { useEffect, useState } from "react";
import api from "../api";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    api.get("/education").then(res => setEducation(res.data));
  }, []);

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-[100px] opacity-50 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Education</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="liquid-glass p-8 rounded-[2rem] flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-sky-50 rounded-xl text-sky-600 shadow-sm">
                    <FaGraduationCap size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-white/60 px-3 py-1 rounded-full border border-white/50">
                     {edu.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-slate-800 leading-snug">
                  {edu.degree}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-600 text-sm font-medium mb-4">
                  <FaUniversity className="text-sky-400" />
                  <span>{edu.school}</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-slate-200/50">
                <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                    {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;