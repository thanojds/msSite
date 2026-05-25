import { motion } from "framer-motion";

export default function Members() {
  const teamMembers = [
    {
      name: "Sithara Samarakoon",
      role: "Co-Founder",
      img: "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1779689715/Edited_40_rbwv2t.jpg"
    },
    {
      name: "Thanoj Pathmakulasooriya",
      role: "Co-Founder",
      img: "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1779690271/Edited_50_t7hab5.jpg"
    }
  ];

  return (
    <section className="relative w-full py-28 px-6 bg-black overflow-hidden">

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-125 h-50 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 blur-[140px] opacity-20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500 blur-[160px] opacity-20 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em]">
            MEET OUR TEAM
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-white mt-4">
            <span className="text-white">Elite </span>
            <span className="text-cyan-400 drop-shadow-[0_0_15px_#06B6D4]">
              Engineers
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            A powerful team behind high-performance digital systems and futuristic solutions.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="
                group relative rounded-3xl overflow-hidden
                border border-cyan-400/10
                bg-white/5 backdrop-blur-xl
                shadow-[0_0_30px_rgba(6,182,212,0.1)]
                transition-all duration-500
              "
            >

              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">

                <img
                  src={member.img}
                  alt={member.name}
                  className="
                    w-full h-full object-cover
                    grayscale contrast-125
                    group-hover:grayscale-0
                    group-hover:scale-110
                    transition-all duration-700
                  "
                />

              
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                
                <div className="absolute inset-0 border border-cyan-400/10 group-hover:border-cyan-400/40 transition-all duration-500" />
              </div>

              
              <div className="p-6 text-center relative">

                <h4 className="
                  text-white text-lg font-black uppercase
                  group-hover:text-cyan-400
                  transition-colors duration-300
                  tracking-wide
                ">
                  {member.name}
                </h4>

                <p className="mt-2 text-slate-400 text-xs uppercase tracking-[0.3em]">
                  {member.role}
                </p>

                <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-cyan-400 mx-auto transition-all duration-500 shadow-[0_0_10px_#06B6D4]" />

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}