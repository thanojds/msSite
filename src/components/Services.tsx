import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Code,
  Smartphone,
  ShieldAlert,
  Cpu
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const services = [
    { title: "Custom Software", category: "SOFTWARE", img: "1.jpg", icon: <Code size={18} />, desc: "ERP & scalable systems." },
    { title: "Web Development", category: "WEB", img: "2.jpg", icon: <Smartphone size={18} />, desc: "Modern web apps." },
    { title: "Mobile Apps", category: "MOBILE", img: "3.png", icon: <ShieldAlert size={18} />, desc: "Android & iOS apps." },
    { title: "UI / UX Design", category: "DESIGN", img: "4.jpg", icon: <Cpu size={18} />, desc: "Clean interfaces." }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      const totalScroll = (cards.length - 1) * window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll + window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        overflow-hidden
        bg-black
        z-0
      "
    >

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* HEADER (IMPORTANT: OUTSIDE PIN FLOW Z-LEVEL) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none">
        <p className="text-cyan-400 text-xs tracking-[0.35em] font-bold">
          OUR SERVICES
        </p>

        <h2 className="text-4xl md:text-6xl font-black text-white mt-3">
          WHAT WE BUILD
        </h2>
      </div>

      {/* TRACK WRAPPER (IMPORTANT: START BELOW HEADER AREA) */}
      <div className="relative h-screen z-10 pt-40">

        <div
          ref={trackRef}
          className="flex h-full items-center"
        >

          {services.map((s, i) => (
            <div
              key={i}
              className="
                service-card
                min-w-screen
                h-screen
                flex items-center justify-center
                px-[14vw]
              "
            >

              <div className="
                relative
                w-full max-w-4xl
                h-[58vh]

                rounded-[28px]
                overflow-hidden

                border border-white/10
                bg-white/5 backdrop-blur-xl

                z-10
              ">

                <img
                  src={s.img}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-end p-10">

                  <span className="text-cyan-300 text-xs tracking-[0.3em]">
                    {s.category}
                  </span>

                  <h3 className="text-3xl md:text-5xl font-black text-white mt-3">
                    {s.title}
                  </h3>

                  <p className="text-slate-300 mt-3 max-w-md text-sm">
                    {s.desc}
                  </p>

                  <button className="
                    mt-6 w-12 h-12
                    rounded-xl bg-cyan-500
                    flex items-center justify-center
                  ">
                    <ArrowUpRight />
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}