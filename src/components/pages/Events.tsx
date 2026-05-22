import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../Navigation";

export default function EventsNews() {
  const events = [
    {
      title: "AI Workshop",
      desc: "Advanced AI training session",
      media: ["e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg", "e5.jpg"],
      videos: ["v1.mp4"],
    },
    {
      title: "Tech Conference",
      desc: "Future tech showcase",
      media: ["t1.jpg", "t2.jpg", "t3.jpg", "t4.jpg", "t5.jpg"],
      videos: [],
    },
    {
      title: "App Launch",
      desc: "Enterprise mobile launch",
      media: ["m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg", "m5.jpg"],
      videos: [],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [openEvent, setOpenEvent] = useState<number | null>(null);

  // AUTO SLIDER (top main only)
  useEffect(() => {
    if (openEvent !== null) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [openEvent]);

  return (
    <>
      <Navigation />

      <section className="relative w-full min-h-screen bg-[#04060D] overflow-hidden px-6 py-20">

        {/* GLOW */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-125 h-50 bg-cyan-500 blur-3xl opacity-20 rounded-full animate-pulse" />
        </div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        {/* TITLE */}
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black text-white">
            Events & <span className="text-cyan-400">News</span>
          </h2>
        </div>

        {/* 🔥 TOP MAIN SLIDER */}
        {openEvent === null && (
          <motion.div className="relative z-10 max-w-5xl mx-auto h-[60vh] rounded-3xl overflow-hidden border border-cyan-500/20">
            <motion.img
              key={activeIndex}
              src={events[activeIndex].media[0]}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-black">
                {events[activeIndex].title}
              </h3>
              <p className="text-slate-300 text-sm">
                {events[activeIndex].desc}
              </p>
            </div>
          </motion.div>
        )}

        {/* 🔥 EVENT LIST (BELOW) */}
        <div className="relative z-10 mt-16 space-y-10 max-w-5xl mx-auto">

          {events.map((event, i) => (
            <div
              key={i}
              className="border border-cyan-500/20 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl"
            >

              {/* SMALL IMAGE SLIDER */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  key={i + activeIndex}
                  src={event.media[0]}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-black">{event.title}</h3>
                  <p className="text-sm text-slate-300">{event.desc}</p>
                </div>
              </div>

              {/* BUTTON */}
              <div className="p-5 flex justify-between items-center">
                <span className="text-cyan-300 text-xs tracking-[0.3em] uppercase">
                  Event
                </span>

                <button
                  onClick={() => setOpenEvent(i)}
                  className="px-5 py-2 bg-cyan-500 text-black font-bold rounded-xl"
                >
                  See More
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* 🔥 FULL EVENT MODAL */}
        <AnimatePresence>
          {openEvent !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black overflow-y-auto p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              {/* CLOSE */}
              <button
                onClick={() => setOpenEvent(null)}
                className="fixed top-5 right-5 text-white text-2xl"
              >
                ✕
              </button>

              <div className="max-w-6xl mx-auto pt-20 space-y-10">

                <h2 className="text-3xl md:text-5xl font-black text-cyan-400">
                  {events[openEvent].title}
                </h2>

                <p className="text-slate-400">
                  {events[openEvent].desc}
                </p>

                {/* IMAGES */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {events[openEvent].media.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      className="rounded-xl border border-cyan-500/20 hover:scale-105 transition"
                    />
                  ))}
                </div>

                {/* VIDEOS */}
                {events[openEvent].videos.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {events[openEvent].videos.map((v, idx) => (
                      <video
                        key={idx}
                        src={v}
                        controls
                        className="rounded-xl border border-cyan-500/20"
                      />
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </>
  );
}