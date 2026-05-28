import { motion } from "framer-motion";
import Logo from "../assets/images/CompanyLogo.png";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center">

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 blur-[140px] opacity-20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500 blur-[160px] opacity-20 rounded-full animate-pulse" />

      <div className="relative flex items-center justify-center">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute w-64 h-64 rounded-full border border-cyan-400/20 border-t-cyan-400"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute w-44 h-44 rounded-full border border-fuchsia-400/20 border-b-fuchsia-400"
        />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative w-24 h-24 rounded-full border border-cyan-400/30 bg-black/60 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.4)]"
        >
          <img src={Logo} alt="Logo" />
        </motion.div>

      </div>

      
      <div className="absolute flex flex-col items-center bottom-32">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-white text-2xl md:text-4xl font-black tracking-[0.3em] uppercase"
        >
          Micronsoft
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-2 text-cyan-300 text-xs md:text-sm tracking-[0.4em] uppercase"
        >
          Initializing Future Systems
        </motion.p>

      </div>

      <div className="absolute bottom-20 w-72 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          className="w-1/2 h-full bg-cyan-400 shadow-[0_0_20px_#06B6D4]"
        />
      </div>

    </div>
  );
}