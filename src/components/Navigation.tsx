import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/CompanyLogo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Events & News", path: "/events" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    return location.pathname.replace(/\/$/, "") === path.replace(/\/$/, "");
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 flex justify-center"
      >
        <div className="
          w-full lg:w-[90%] mx-auto
          h-16 flex items-center justify-between
          px-6 md:px-10
          bg-black/30 backdrop-blur-xl
          border-b border-cyan-500/10
          lg:mt-4 lg:rounded-2xl lg:border
          lg:shadow-[0_0_25px_rgba(6,182,212,0.08)]
        ">

          {/* LOGO */}
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

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.path}
                    className={`
                      text-sm font-medium relative transition-colors
                      ${isActive(item.path)
                        ? "text-cyan-300"
                        : "text-white/70 hover:text-cyan-300"}
                    `}
                  >
                    {item.name}

                    <span
                      className={`
                        absolute left-0 -bottom-1 h-0.5 bg-cyan-400 transition-all duration-300
                        ${isActive(item.path) ? "w-full" : "w-0"}
                      `}
                    />
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>

          {/* BURGER */}
          <button
            onClick={() => setOpen(true)}
            className="flex lg:hidden w-10 h-10 rounded-lg border border-cyan-400/20 items-center justify-center text-cyan-300"
          >
            ☰
          </button>

        </div>
      </motion.nav>

      
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 z-40"
            />

            {/* SIDE PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="
                fixed top-10 right-0
                w-[85%] sm:w-[60%]
                h-[50%]
                bg-[#060913]
                z-50
                border-l border-cyan-500/20
                p-8
                flex flex-col gap-8
              "
            >
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-cyan-300 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`
                      text-lg font-semibold transition-colors
                      ${isActive(item.path)
                        ? "text-cyan-300"
                        : "text-white/70 hover:text-cyan-300"}
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}