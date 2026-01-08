import { useState } from "react";
import api from "../api";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.post("/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-sky-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200 rounded-full blur-[120px] opacity-40 -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Get In Touch</h2>
          <p className="text-slate-600 font-medium">Have a project? Let's make it real.</p>
        </motion.div>

        {/* LIQUID GLASS FORM CONTAINER */}
        <div className="liquid-glass p-10 rounded-[2.5rem]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-bold text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/50 border border-white/60 rounded-xl p-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-bold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/50 border border-white/60 rounded-xl p-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="bg-white/50 border border-white/60 rounded-xl p-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white transition-all resize-none placeholder:text-slate-400"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                status === "sending"
                  ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-sky-500/25 hover:-translate-y-1"
              }`}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            
            {status === "success" && (
              <p className="text-green-600 font-bold text-center bg-green-100/50 p-3 rounded-xl border border-green-200">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-bold text-center bg-red-100/50 p-3 rounded-xl border border-red-200">Failed to send message.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;