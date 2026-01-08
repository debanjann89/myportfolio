import { useEffect, useState } from "react";
import api from "../api";
import { motion } from "framer-motion";
import { FaAward, FaUniversity, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    api.get("/certifications").then(res => setCerts(res.data));
  }, []);

  return (
    <section id="certifications" className="py-20 bg-sky-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] opacity-40 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Certifications & Awards</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* IF PDF LINK EXISTS, WRAP IN ANCHOR TAG */}
              <a 
                href={cert.pdf_link || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block h-full liquid-glass p-8 rounded-[2rem] flex flex-col justify-between group transition-all ${cert.pdf_link ? "cursor-pointer hover:shadow-sky-200/50" : "cursor-default"}`}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-gradient-to-br from-sky-100 to-white rounded-2xl text-sky-600 shadow-inner border border-white">
                      <FaAward size={24} />
                    </div>
                    {/* View Icon for UX */}
                    {cert.pdf_link && <FaExternalLinkAlt className="text-slate-300 group-hover:text-sky-500 transition-colors" />}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-slate-800 leading-snug group-hover:text-sky-600 transition-colors">
                    {cert.name}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between text-slate-500 text-sm font-medium mt-4 pt-4 border-t border-slate-200/50">
                  <div className="flex items-center gap-2">
                    <FaUniversity className="text-sky-400" />
                    <span>{cert.issuer}</span>
                  </div>
                  <span className="text-xs bg-white/50 px-2 py-1 rounded border border-white/50">{cert.year}</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;