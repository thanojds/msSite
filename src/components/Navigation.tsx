import { motion } from "framer-motion"
import Logo from "../assets/images/Logo.png"

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 w-full z-50
        flex justify-center
      "
    >

      <div
        className="
          w-full
          lg:w-[90%]
          mx-auto

          h-16
          flex items-center justify-between

          px-6 md:px-10

          bg-black/30 backdrop-blur-xl
          border-b border-cyan-500/10
          lg:mt-4 lg:rounded-2xl lg:border
          lg:border-cyan-500/10
          lg:shadow-[0_0_25px_rgba(6,182,212,0.08)]
        "
      >

      
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#06B6D4]">
            <img src={Logo} alt="Logo" />
          </div>

          <span className="text-white font-bold text-lg tracking-wide">
            Micronsoft Solutions
          </span>
        </motion.div>

        
        <ul className="hidden md:flex items-center gap-8">

          {["Home", "About", "Services", "Contact"].map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ y: -2 }}
              className="
                text-white/80
                hover:text-cyan-300
                transition-colors
                cursor-pointer
                text-sm font-medium
                relative
              "
            >
              {item}

              
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}

        </ul>

        
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-10 h-10 rounded-lg border border-cyan-400/20 flex items-center justify-center text-cyan-300"
        >
          ☰
        </motion.div>

      </div>
    </motion.nav>
  );
}