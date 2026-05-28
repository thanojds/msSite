import Navigation from "../Navigation";
import { motion } from "framer-motion";
import software from "../../assets/images/software.jpg"
import web from "../../assets/images/web.jpg"
import mobile from "../../assets/images/mobile.jpg"
import design from "../../assets/images/design.jpg"
import PageFooter from "./PageFooter"
import { useNavigate } from "react-router-dom"

export default function Services() {
  const services = [
    {
      title: "Custom Software",
      desc: "Scalable enterprise systems with modern architecture.",
      tag: "SOFTWARE",
      img: software,
    },
    {
      title: "Web Development",
      desc: "High-performance responsive web applications.",
      tag: "WEB",
      img: web,
    },
    {
      title: "Mobile Apps",
      desc: "Android & iOS apps with smooth UX experience.",
      tag: "MOBILE",
      img: mobile,
    },
    {
      title: "UI / UX Design",
      desc: "Futuristic interfaces with clean user flow.",
      tag: "DESIGN",
      img: design,
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Navigation />

      <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 blur-[140px] opacity-20 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500 blur-[140px] opacity-20 rounded-full animate-pulse" />

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center pt-28 px-6"
        >
          <p className="text-cyan-300 text-xs tracking-[0.4em] uppercase">
            // Our Services
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-3">
            WHAT WE <span className="text-cyan-400">BUILD</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            We create futuristic digital products with high performance and premium UI experience.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="
                relative group
                rounded-3xl overflow-hidden
                border border-cyan-400/20
                bg-white/5 backdrop-blur-xl
                shadow-[0_0_30px_rgba(6,182,212,0.10)]
                transition-all duration-500
                min-h-112.5
              "
            >

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={s.img}
                  alt={s.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                {/* TAG */}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[10px] tracking-[0.3em] uppercase backdrop-blur-xl">
                    {s.tag}
                  </span>
                </div>

              </div>

              {/* glow hover layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/10 blur-xl" />

              {/* CONTENT */}
              <div className="relative p-8">

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl md:text-3xl font-black group-hover:text-cyan-300 transition"
                >
                  {s.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-400 mt-4 text-sm leading-relaxed"
                >
                  {s.desc}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    mt-6 px-5 py-2 rounded-xl
                    border border-cyan-400/40
                    text-cyan-300
                    hover:bg-cyan-500 hover:text-black
                    transition-all duration-300
                  "
                >
                  Explore
                </motion.button>

              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center pb-24 px-6"
        >
          <h3 className="text-2xl md:text-4xl font-black">
            Ready to build something <span className="text-cyan-400">amazing?</span>
          </h3>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(6,182,212,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-6 px-8 py-3
              rounded-xl
              bg-cyan-500
              text-black font-bold
              shadow-[0_0_30px_#06B6D4]
              transition
            "
             onClick={() => navigate("/contact")}
          >
            Get Started
          </motion.button>
        </motion.div>

      </section>
      <PageFooter />
    </>
  );
}