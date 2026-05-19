import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState } from "react";
import Background from "./Background";
import SideLine from "./SideLine";
import Services from "./Services";
import About from "./About";
import Member from "./Member";
import Contact from "./Contact";
import Footer from "./Footer";
import Journey from "./Journey";
import Navbar from "./Navbar";

export default function WebPages() {

    const [scrollY, setScrollY] = useState(0);
   
    const sections = [
        "hero",
        "services",
        "journey",
        "about",
        "members",
        "contact",
        "footer",
    ];

    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const mid = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((sec, i) => {
        if (!sec) return;

        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;

        if (mid >= top && mid < bottom) {
          setActive(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToSection = (index: number) => {
    const el = sectionRefs.current[index];
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
       
    return (
        <div className="bg-black text-white">
            <div className="fixed top-0 w-full h-20 z-50">
               <Navbar sections={sections} scrollToSection={scrollToSection} active={active} />
            </div>

            <div className="fixed left-6 top-0 h-full flex items-center z-50">
                <div className="relative w-1 h-[50%] bg-white/10 rounded-full overflow-hidden">

                    <div
                        className="absolute top-0 w-full bg-linear-to-b from-cyan-300 via-blue-500 to-blue-700 transition-all duration-300"
                        style={{
                        height: `${((active + 1) / sections.length) * 100}%`,
                        boxShadow: "0 0 20px rgba(34,211,238,0.6)"
                        }}
                    />

                    <div className="absolute inset-0 flex flex-col justify-between items-center py-3">
                        {sections.map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i <= active
                                ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                : "bg-white/20"
                            }`}
                        />
                        ))}
                    </div>

                </div>
                    <div className="ml-4 flex flex-col justify-between h-[50%] text-xs text-white/60 font-medium">
                        {sections.map((s, i) => (
                            <span
                            key={i}
                            className={i === active ? "text-cyan-300" : ""}
                            >
                            {s.toUpperCase()}
                            </span>
                        ))}
                </div>
            </div>
            <section id="hero" ref={(el) => { sectionRefs.current[0] = el; }} className="h-[450vh] relative" style={{
                opacity: scrollY > 1200 ? 0 : 1,
                transition: "opacity 0.6s ease"
            }}>
                <section className="sticky top-0 h-screen overflow-hidden flex">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Background></Background>
                    </div>
                    <div>
                        <SideLine></SideLine>
                    </div>
                    
                    <div className="absolute right-25 top-1/2 -translate-y-1/2 w-[320px] z-40
                        transition-all duration-300
                        group"
                        style={{
                            opacity: scrollY > 500 ? Math.min((scrollY - 500) / 200, 1) : 0,
                            transform: scrollY > 500
                                ? `translateY(${Math.max(20 - (scrollY - 500) / 10, 0)}px)`
                                : "translateY(20px)"
                        }}
                    >

                        <div className="p-6 rounded-2xl 
                            bg-white/5 backdrop-blur-md 
                            border border-white/10
                            shadow-[0_0_30px_rgba(34,211,238,0.08)]
                            transition-all duration-300"
                        >

                                <p className="text-white/60 text-sm leading-relaxed">
                                    We design and build modern software, AI systems, and digital platforms
                                    that help businesses grow faster and smarter.
                                </p>

                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center z-999">
                        <Spline scene="https://prod.spline.design/fLt-Jsw0wVoLCQzJ/scene.splinecode" />
                    </div>
                    
                    <div className="flex justify-center mt-40 w-full mb-10 z-10 px-6 text-center"
                        style={{
                            opacity: scrollY > 300 ? Math.min((scrollY - 300) / 200, 1) : 0,
                            transform:
                                scrollY > 300
                                    ? `translateY(${Math.max(20 - (scrollY - 300) / 10, 0)}px)`
                                    : "translateY(20px)",
                            transition: "opacity 0.2s ease-out, transform 0.2s ease-out"
                        }}
                    >
                        <p className="text-4xl md:text-5xl font-bold tracking-wide leading-tight max-w-3xl 
                           text-center bg-linear-to-r from-cyan-300 via-blue-400 to-blue-600 1875rem
                           bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                        >
                            Crafting Digital Products That Feel Alive
                        </p>
                    </div>
                </section>
            </section>
            <section id="services"  ref={(el) => { sectionRefs.current[1] = el; }} className="relative">
                <Services />
            </section>
            <section id="journey"  ref={(el) => { sectionRefs.current[2] = el; }} className="relative">
                <section className="sticky top-0 h-screen flex">
                    <Journey />
                </section>
            </section>
            <section id="about"  ref={(el) => { sectionRefs.current[3] = el; }} className="relative">
                <section className="sticky top-0 h-screen flex">
                    <About />
                </section>
            </section>
            <section id="Members"  ref={(el) => { sectionRefs.current[4] = el; }} className="relative">
                <section className="sticky top-0 h-screen flex">
                    <Member />
                </section>
            </section>
            <section id="Contact"  ref={(el) => { sectionRefs.current[5] = el; }} className="relative">
                <section className="sticky top-0 h-screen flex">
                    <Contact />
                </section>
            </section>
             <section id="Footer"  ref={(el) => { sectionRefs.current[6] = el; }} className="relative">
                <section className="sticky top-0 h-screen flex">
                    <Footer />
                </section>
            </section>
        </div>
    );
}