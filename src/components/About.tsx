import { CheckCircle2, Eye, Target } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeTab, setActiveTab] = useState("philosophy");

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden relative">

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-125 h-50 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-300 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase">
            // Identity Core
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase mt-4 leading-none">
            <span className="text-white">Built for</span>{" "}
            <span className="text-cyan-400 animate-pulse">Innovation</span>{" "}
            <span className="text-fuchsia-400">&</span>{" "}
            <span className="text-cyan-300">Scale</span>
          </h2>

          <div className="mt-6 flex justify-center">
            <div className="w-32 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-6">
            High-performance digital systems engineered with precision, speed, and futuristic design principles.
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
          >
            <span className="text-cyan-400 text-xs font-black uppercase tracking-widest block">
              IDENTITY CORE
            </span>

            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 border-l border-slate-900">

              {["philosophy", "mission", "vision"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`pl-5 pr-6 py-3.5 text-left font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 border-l-2 -ml-px whitespace-nowrap ${
                    activeTab === tab
                      ? "text-cyan-300 border-cyan-400 bg-[#0A0F1D] shadow-[0_0_15px_#06B6D4]"
                      : "text-slate-500 border-transparent hover:text-slate-300"
                  }`}
                >
                  {tab === "philosophy" ? "Who We Are" : `Our ${tab}`}
                </motion.button>
              ))}

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-8 min-h-75">

            <AnimatePresence mode="wait">

              {activeTab === "philosophy" && (
                <motion.div
                  key="philosophy"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl sm:text-3xl font-black uppercase italic">
                    Who We Are
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    We are an elite team of tech enthusiasts, engineers, and digital visionaries specializing in the execution of complex system deployments, high-performance web products, and secure enterprise setups.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Custom Web Architectures",
                      "Cross-Platform Mobile Apps",
                      "Enterprise Cloud ERPs",
                      "UI/UX Interactive Systems",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 bg-[#0A0F1D]/40 p-4 rounded-xl border border-slate-900"
                      >
                        <CheckCircle2 size={16} className="text-cyan-400" />
                        <span className="text-sm font-bold text-slate-200">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "mission" && (
                <motion.div
                  key="mission"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl sm:text-3xl font-black text-cyan-400 uppercase italic flex items-center gap-3">
                    <Target size={28} /> Our Mission
                  </h3>

                  <p className="text-slate-200 font-black text-base sm:text-lg md:text-xl leading-relaxed border-l-4 border-cyan-400 pl-5 italic bg-[#0A0F1D]/60 p-5 rounded-r-2xl shadow-[0_0_20px_#06B6D4]">
                    To empower businesses through innovative custom software solutions that enhance efficiency, productivity, and overall success in a digital world.
                  </p>
                </motion.div>
              )}

              {activeTab === "vision" && (
                <motion.div
                  key="vision"
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl sm:text-3xl font-black text-cyan-400 uppercase italic flex items-center gap-3">
                    <Eye size={28} /> Our Vision
                  </h3>

                  <p className="text-slate-200 font-black text-base sm:text-lg md:text-xl leading-relaxed border-l-4 border-cyan-400 pl-5 italic bg-[#0A0F1D]/60 p-5 rounded-r-2xl shadow-[0_0_20px_#06B6D4]">
                    We believe in integrity, collaboration, and innovation, ensuring that every solution we deliver aligns with our clients’ goals while providing meaningful impacts and sustainable growth.
                  </p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}