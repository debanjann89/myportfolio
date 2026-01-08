import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* The Liquid Glass Container */}
      <div className="liquid-glass border-b border-white/40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-slate-800"
          >
            My<span className="text-sky-500">Portfolio</span>
          </motion.h1>

          {/* Links */}
          <ul className="flex space-x-8 text-sm font-semibold text-slate-600">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} className="hover:text-sky-500 cursor-pointer transition-colors relative group">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;