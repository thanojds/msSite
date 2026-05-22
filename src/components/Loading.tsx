import { motion } from "framer-motion"
import Logo from "../assets/images/Logo.png"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-999 overflow-hidden bg-black flex items-center justify-center">

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 blur-[140px] opacity-20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500 blur-[160px] opacity-20 rounded-full animate-pulse" />

      <div className="relative z-10 flex flex-col items-center justify-center">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="
            absolute
            w-56 h-56
            rounded-full
            border border-cyan-400/20
            border-t-cyan-400
            shadow-[0_0_40px_rgba(6,182,212,0.25)]
          "
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          className="
            absolute
            w-40 h-40
            rounded-full
            border border-fuchsia-400/20
            border-b-fuchsia-400
            shadow-[0_0_40px_rgba(217,70,239,0.25)]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            relative
            w-24 h-24
            rounded-full
            bg-cyan-400
            blur-2xl
            opacity-70
          "
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full border border-cyan-400/30 bg-black/50 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            <img src={Logo} alt="Logo" />
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white text-2xl md:text-4xl font-black tracking-[0.3em] uppercase"
          >
            Micronsoft
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-2 text-cyan-300 text-xs md:text-sm tracking-[0.4em] uppercase"
          >
            Initializing Future Systems
          </motion.p>
        </motion.div>
      </div>

      {/* LOADING BAR */}
      <div className="absolute bottom-24 w-65 h-0.75 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "linear",
          }}
          className="w-1/2 h-full bg-cyan-400 shadow-[0_0_20px_#06B6D4]"
        />
      </div>

      {/* STATUS TEXT */}
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-14 text-slate-500 text-xs tracking-[0.35em] uppercase"
      >
        Loading Experience
      </motion.p>
    </div>
  );
}
