import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";
import Navigation from "../Navigation";
import Logo from "../../assets/images/CompanyLogo.png";
import PageFooter from "./PageFooter";

export default function AboutUs() {
  const features = [
    "Custom Web Architectures",
    "Custom Software Solutions",
    "Mobile App Engineering",
    "UI / UX Premium Design",
  ];

  return (
    <>
      <Navigation />

      <section className="relative w-full min-h-screen bg-black text-white overflow-hidden px-6 py-28">

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-cyan-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-10 w-100 h-100 bg-fuchsia-500/10 blur-[140px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-cyan-400 text-xs tracking-[0.4em] uppercase font-bold"
            >
              // ABOUT US
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-black mt-4 leading-tight"
            >
              Building Digital
              <span className="text-cyan-400 drop-shadow-[0_0_25px_#06B6D4]">
                {" "}Future Systems
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 mt-6 leading-relaxed"
            >
              We are a next-generation software company focused on building
              high-performance digital ecosystems, scalable applications,
              and futuristic user experiences.
            </motion.p>

            {/* FEATURES */}
            <div className="mt-10 space-y-3">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(6,182,212,0.4)",
                  }}
                  className="
                    flex items-center gap-3
                    bg-white/5
                    border border-white/10
                    px-4 py-3
                    rounded-xl
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]
                  "
                >
                  <CheckCircle2
                    className="text-cyan-400 shrink-0"
                    size={18}
                  />

                  <span className="text-sm text-slate-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* MISSION */}
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              className="
                p-6 rounded-2xl
                bg-white/5
                border border-cyan-400/20
                backdrop-blur-xl
                transition-all duration-300
                hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]
              "
            >
              <div className="flex items-center gap-3">
                <Target className="text-cyan-400" />

                <h3 className="text-xl font-bold">
                  Our Mission
                </h3>
              </div>

              <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                Deliver world-class software solutions that empower businesses
                through innovation and technology.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              className="
                p-6 rounded-2xl
                bg-white/5
                border border-fuchsia-500/20
                backdrop-blur-xl
                transition-all duration-300
                hover:shadow-[0_0_35px_rgba(217,70,239,0.15)]
              "
            >
              <div className="flex items-center gap-3">
                <Eye className="text-fuchsia-400" />

                <h3 className="text-xl font-bold">
                  Our Vision
                </h3>
              </div>

              <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                To become a leading digital innovation hub creating futuristic
                experiences globally.
              </p>
            </motion.div>

            {/* PREMIUM BRAND CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{
                scale: 1.02,
              }}
              className="
                relative h-72 rounded-3xl overflow-hidden
                border border-cyan-400/20
                bg-linear-to-br from-cyan-500/10 via-black to-fuchsia-500/10
                backdrop-blur-xl
                shadow-[0_0_40px_rgba(6,182,212,0.10)]
              "
            >

              {/* glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/20 blur-[80px] rounded-full" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-fuchsia-500/20 blur-[80px] rounded-full" />

              {/* cyber grid */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[3rem_3rem]" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="
                    w-24 h-24 rounded-full
                    bg-cyan-500/10
                    border border-cyan-400
                    flex items-center justify-center
                    shadow-[0_0_35px_rgba(6,182,212,0.35)]
                    backdrop-blur-xl
                  "
                >
                  <img
                    src={Logo}
                    alt="Logo"
                    className="w-14 h-14 object-contain"
                  />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="
                    mt-6
                    text-2xl md:text-3xl
                    font-black
                    tracking-wide
                    text-white
                  "
                >
                  Micronsoft Solutions
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="
                    mt-3
                    text-cyan-300
                    text-xs
                    tracking-[0.35em]
                    uppercase
                  "
                >
                  Engineering The Digital Future
                </motion.p>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>
      <PageFooter />
    </>
  );
}