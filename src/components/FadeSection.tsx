import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeSection({ children }: { children: React.ReactNode }) {

    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const el = sectionRef.current;

        if (!el) return;

        gsap.fromTo(
            el,
            { opacity: 1, y: 0 },
            {
                opacity: 0,
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top top",
                    end: "+=300",   // 🔥 HOLD 300px
                    scrub: true,
                    pin: true,      // lock section
                }
            }
        );

    }, []);

    return (
        <section ref={sectionRef} className="h-screen w-full relative">
            {children}
        </section>
    );
}