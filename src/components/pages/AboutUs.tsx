import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";

export default function AboutUs() {
  const features = [
    "Custom Web Architectures",
    "Scalable Cloud Systems",
    "Mobile App Engineering",
    "UI / UX Premium Design",
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden px-6 py-28">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-fuchsia-500/10 blur-[140px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-[length:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 text-xs tracking-[0.4em] uppercase font-bold">
            // ABOUT US
          </p>

          <h1 className="text-4xl md:text-6xl font-black mt-4 leading-tight">
            Building Digital
            <span className="text-cyan-400"> Future Systems</span>
          </h1>

          <p className="text-slate-400 mt-6 leading-relaxed">
            We are a next-generation software company focused on building
            high-performance digital ecosystems, scalable applications,
            and futuristic user experiences.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-3">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-xl"
              >
                <CheckCircle2 className="text-cyan-400" size={18} />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* CARD 1 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-cyan-400/20 backdrop-blur-xl hover:scale-[1.02] transition">
            <div className="flex items-center gap-3">
              <Target className="text-cyan-400" />
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <p className="text-slate-400 mt-3 text-sm leading-relaxed">
              Deliver world-class software solutions that empower businesses
              through innovation and technology.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-fuchsia-500/20 backdrop-blur-xl hover:scale-[1.02] transition">
            <div className="flex items-center gap-3">
              <Eye className="text-fuchsia-400" />
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-slate-400 mt-3 text-sm leading-relaxed">
              To become a leading digital innovation hub creating futuristic
              experiences globally.
            </p>
          </div>

          {/* IMAGE BLOCK */}
          <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/about.jpg"
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

        </motion.div>

      </div>
    </section>
  );
}