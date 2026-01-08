import { useEffect, useState } from "react";
import api from "../api";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api.get("/skills").then(res => setSkills(res.data));
  }, []);

  return (
    <section id="skills" className="py-20 bg-sky-50 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Technical Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              // LIQUID GLASS CARD
              className="liquid-glass p-6 rounded-2xl text-center group cursor-default"
            >
              <div className="text-5xl mb-4 bg-gradient-to-br from-white to-sky-50 w-20 h-20 mx-auto flex items-center justify-center rounded-full shadow-inner text-sky-500 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{skill.name}</h3>
              <p className="text-slate-500 text-sm mt-1 font-medium">{skill.proficiency}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;