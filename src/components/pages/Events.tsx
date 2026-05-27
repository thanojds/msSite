import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../Navigation";
import PageFooter from "./PageFooter";

type CloudinaryImage = {
  public_id: string;
};

export default function EventsNews() {
  const cloudName = "dvnoyis73";

  const events = [
    {
      title: "noHazz | The Official Digital Grand Launch",
      desc: "The official launch of noHazz marks a refined step into a new era of digital excellence. Crafted with precision and vision, the platform delivers a seamless blend of modern innovation, elegant design, and powerful performance.",
      tag: "noHazz Website Launch",
    },
  ];

  const [images, setImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openEvent, setOpenEvent] = useState<number | null>(null);
  const sliderIndexes = [4, 5, 11, 15, 16, 17, 18, 1];

  const sliderImages = sliderIndexes.map((i) => images[i]).filter(Boolean);

  useEffect(() => {
    fetch(
      `https://res.cloudinary.com/${cloudName}/image/list/noHazz.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const imgs =
          data?.resources?.map(
            (img: CloudinaryImage) =>
              `https://res.cloudinary.com/${cloudName}/image/upload/${img.public_id}`
          ) || [];

        setImages(imgs);
      })
      .catch((err) => {
        console.log("Cloudinary error:", err);
        setImages([]);
      });
  }, []);

  useEffect(() => {
    if (openEvent !== null) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        sliderImages.length > 0 ? (prev + 1) % sliderImages.length : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [openEvent, images]);

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
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            Discover milestones, innovations, and moments that define our digital journey
          </p>
        </div>

         {openEvent === null && sliderImages.length > 0 && (
          <motion.div className="relative z-10 max-w-5xl mx-auto h-[60vh] rounded-3xl overflow-hidden border border-cyan-500/20">

            <motion.img
              key={activeIndex}
              src={sliderImages[activeIndex]}
              className="absolute inset-0 w-full h-full object-cover object-center scale-105"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-black">
                {events[0].title}
              </h3>
              <p className="text-slate-300 text-sm max-w-md">
                {events[0].desc}
              </p>
            </div>
          </motion.div>
        )}

         <div className="relative z-10 mt-16 space-y-10 max-w-5xl mx-auto">

          {events.map((event, i) => (
            <div
              key={i}
              className="border border-cyan-500/20 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition"
            >

              {/* COLLAGE */}
              <div className="relative h-64 w-full overflow-hidden">

                <div className="grid grid-cols-3 grid-rows-2 gap-1 w-full h-full">

                  <img
                    src={images[18]}
                    className="col-span-2 row-span-2 w-full h-full object-cover"
                  />

                  <img
                    src={images[16]}
                    className="w-full h-full object-cover"
                  />

                  <img
                    src={images[17]}
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>
              <div className="relative top-4 left-4 text-white">
                  <h3 className="text-xl font-black">{event.title}</h3>
                  <p className="text-sm text-slate-300 line-clamp-2">
                    {event.desc}
                  </p>
              </div>
              <div className="p-5 flex justify-between items-center">
                <span className="text-cyan-300 text-xs tracking-[0.3em] uppercase">
                  Event
                </span>

                <button
                  onClick={() => setOpenEvent(i)}
                  className="px-5 py-2 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 MODAL */}
        <AnimatePresence>
          {openEvent !== null && (
            <motion.div
              className="fixed inset-0 z-999 bg-black overflow-y-auto p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              <button
                onClick={() => setOpenEvent(null)}
                className="fixed top-5 right-10 text-white text-2xl cursor-pointer"
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
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      className="rounded-xl border border-cyan-500/20 hover:scale-105 transition"
                      alt=""
                    />
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
      <PageFooter />
    </>
  );
}