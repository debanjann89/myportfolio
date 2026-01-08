import { useEffect, useState } from "react";
import api from "../api";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"; 
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data));
  }, []);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-100/50 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // LIQUID GLASS CARD
              className="liquid-glass p-8 rounded-3xl flex flex-col justify-between h-full group hover:shadow-sky-200/50 transition-shadow duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-3 bg-white/60 rounded-xl text-sky-500 shadow-sm backdrop-blur-sm">
                    <FaCode size={20} />
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech_stack.split(',').map((tech, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-100">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-sky-500/20 hover:-translate-y-1"
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                ) : (
                  <button disabled className="w-full px-6 py-4 bg-slate-100 text-slate-400 rounded-xl font-bold cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;