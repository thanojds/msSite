import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Journey() {
  const images = [
    "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1779689125/Edited_13_dldjjk.jpg", 
    "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1779689030/Edited_23_yrhfe3.jpg", 
    "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1779689621/Edited_57_prdxs7.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="journey"
      className="w-full min-h-screen bg-[#04060D] flex items-center justify-center px-4 sm:px-6 lg:px-10 relative overflow-hidden"
    >

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-125 h-50 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-5"
        >
          <span className="text-cyan-400 text-xs font-black uppercase tracking-widest block">
            THE EVOLUTION
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase leading-none">
            Our Journey
          </h2>

          <div className="w-20 h-0.5 bg-cyan-400 shadow-[0_0_10px_#06B6D4]"></div>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Founded in Matara, Sri Lanka, Micronsoft Solutions (Pvt) Ltd has grown from a small startup into a trusted software development partner for businesses in the Down South region. Our commitment to delivering high-quality, custom software solutions has allowed us to expand our client base and offerings significantly, establishing a reputation for excellence and innovation in the tech industry.
          </p>

          <p className="text-slate-400 text-sm md:text-base border-l-2 border-cyan-400 pl-4 italic">
            Over the years, we have evolved our services to include comprehensive web and mobile app development, cementing our position as a leading tech partner dedicated to supporting our clients’ varied digital needs.
          </p>
        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7 h-75 sm:h-100 md:h-125 lg:h-137.5 relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
        >
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="Journey"
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

          {/* DOT INDICATORS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? "bg-cyan-400 shadow-[0_0_10px_#06B6D4]" : "bg-slate-600"
                }`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}