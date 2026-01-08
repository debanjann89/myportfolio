import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education"; // <--- Import Education
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      
      <Education />  {/* <--- Add Education here */}
      <Experience /> {/* Work Experience follows Education */}
      
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer className="py-8 text-center bg-white border-t border-slate-200 text-slate-500 text-sm">
        <p>© 2026 Debanjan. Built with React, FastAPI & MongoDB.</p>
      </footer>
    </div>
  );
}

export default App;