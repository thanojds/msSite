import Spline from "@splinetool/react-spline";
import MagicRings from "./MagicRings";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showStats, setShowStats] = useState(false);
  const [startCounting, setStartCounting] = useState(false)
  const [years, setYears] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);

  useEffect(() => {
  const timeout = setTimeout(() => {
    setShowStats(true);
  }, 5000);

  return () => clearTimeout(timeout);
}, []);

useEffect(() => {
  if (!startCounting) return;

  const interval = setInterval(() => {
    setYears((v) => (v < 11 ? v + 1 : v));
    setTeamMembers((v) => (v < 10 ? v + 1 : v));
    setSatisfiedClients((v) => (v < 10 ? v + 1 : v));
    setCompletedProjects((v) => (v < 10 ? v + 1 : v));
  }, 120);

  return () => clearInterval(interval);
}, [startCounting]);

  return (
    <>
      <section className="w-screen sm:min-h-screen md:h-screen lg:h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="top-10 lg:top-0 absolute w-full h-full"
        >
          <MagicRings />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl text-center bg-linear-to-r from-blue-100 to-cyan-200 bg-clip-text text-transparent font-zen font-bold absolute top-15 sm:top-15 md:top-20 lg:top-[15%] "
        >
          Engineered for Excellence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="relative lg:absolute flex flex-col justify-center items-center text-center lg:items-start lg:text-left w-full lg:w-100 -bottom-33 md:-bottom-28 lg:bottom-20 left-0 lg:left-30 z-30 gap-3 mb-4">
              <p className="sm:text-[2px] md:text-2xl lg:text-xl text-white relative">
                High-end digital solutions crafted for performance, scale, and perfection.
              </p>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4, duration: 0.5 }}
                className="text-white bg-linear-to-r from-blue-500 to-cyan-400 rounded-4xl z-30 px-6 py-3 w-[50%] relative cursor-pointer"
              >
                Get Started
              </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-[280%] md:w-[160%] lg:w-full robot z-70 lg:z-20">
          <Spline scene="https://prod.spline.design/fLt-Jsw0wVoLCQzJ/scene.splinecode" />
        </motion.div>

        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setStartCounting(true)}
            className="relative lg:absolute grid grid-cols-2 w-[90%] h-auto lg:w-100 bottom-0  lg:h-70 lg:right-20 lg:bottom-20 z-40 bg-white/10 backdrop-blur-lg rounded-3xl"
          >
            <Stat label="Years of Experience" value={years} />
            <Stat label="Team Members" value={teamMembers} />
            <Stat label="Satisfied Clients" value={satisfiedClients} />
            <Stat label="Completed Projects" value={completedProjects} />
          </motion.div>
        )}
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center justify-center py-3 gap-4 lg:gap-2">
      <p className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">{value}+</p>
      <p className="text-white text-sm sm:text-sm md:text-lg lg:text-xl">{label}</p>
    </div>
  );
}