import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const services = [
    { title: "Custom Software", category: "SOFTWARE", img: "1.jpg", desc: "ERP & scalable systems." },
    { title: "Web Development", category: "WEB", img: "2.jpg", desc: "Modern web apps." },
    { title: "Mobile Apps", category: "MOBILE", img: "3.png", desc: "Android & iOS apps." },
    { title: "UI / UX Design", category: "DESIGN", img: "4.jpg", desc: "Clean interfaces." }
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {

      const getScrollAmount = () => {
        return (track as HTMLElement).scrollWidth - window.innerWidth;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",

          end: () => "+=" + getScrollAmount(),

          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          snap: {
            snapTo: 1 / (services.length - 1),
            duration: 0.4,
            ease: "power2.out"
          }
        }
      });

      // 🔥 IMPORTANT FIX FOR MOBILE RESIZE
      const resizeHandler = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", resizeHandler);
      window.addEventListener("orientationchange", resizeHandler);

      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("orientationchange", resizeHandler);
        tween.kill();
      };

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-125 h-50 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none">
        <p className="text-cyan-300 text-[10px] md:text-xs tracking-[0.4em]">
          // OUR SERVICES
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mt-2">
          WHAT WE BUILD
        </h2>
      </div>

      <div className="h-screen overflow-hidden sm:mt-12 md:mt-14 lg:mt-15">

        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
        >

          {services.map((s, i) => (
            <div
              key={i}
              className="
                shrink-0
                w-screen h-screen
                flex items-center justify-center
                px-4 sm:px-6 md:px-10
              "
            >

              {/* CARD */}
              <div className="
                relative overflow-hidden

                w-[92vw] sm:w-[80vw] md:w-[65vw] lg:w-[50vw]
                h-[55vh] sm:h-[60vh] md:h-[65vh]

                rounded-2xl md:rounded-3xl

                border border-cyan-400/20
                bg-white/5 backdrop-blur-xl

                shadow-[0_0_40px_rgba(6,182,212,0.15)]
              ">

                <img
                  src={s.img}
                  className="absolute inset-0 w-full h-full object-cover scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 md:p-10">

                  <span className="text-cyan-300 text-[10px] sm:text-xs tracking-[0.4em]">
                    {s.category}
                  </span>

                  <h3 className="text-xl sm:text-3xl md:text-5xl font-black mt-2">
                    {s.title}
                  </h3>

                  <p className="text-slate-300 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
                    {s.desc}
                  </p>

                  <button className="
                    mt-4 sm:mt-6 w-10 h-10 sm:w-12 sm:h-12
                    bg-cyan-500/20
                    border border-cyan-400
                    flex items-center justify-center
                    rounded-lg sm:rounded-xl
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