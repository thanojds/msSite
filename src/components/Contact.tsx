import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full py-32 px-6 text-center overflow-hidden bg-black">

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-125 h-50 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 blur-[140px] opacity-20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500 blur-[160px] opacity-20 rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] block"
        >
          INITIATE ENGAGEMENT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-tight"
        >
          Ready To Elevate Your Business? <br />
          <span className="text-cyan-400 drop-shadow-[0_0_25px_#06B6D4]">
            Contact Us Today!
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Don't miss out on the opportunity to transform your operations. Let's work together towards your success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8"
        >

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(6,182,212,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="
              px-10 py-5
              bg-cyan-500/20
              border border-cyan-400
              text-cyan-300
              font-black uppercase text-xs tracking-widest
              rounded-xl
              backdrop-blur-xl
              transition-all duration-300
            "
          >
            Get Started
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}