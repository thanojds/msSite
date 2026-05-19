import { useRef } from "react";

export default function Journey() {
    const journeyImageRef = useRef<HTMLImageElement | null>(null);
    return(
        <section id="journey" className="relative w-full">
            <section className="sticky top-0 h-screen flex">
                <section id="journey-section" className="scroll-trigger-section bg-[#04060D] py-28 px-6 border-b border-slate-950 relative w-screen">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 space-y-4">
                            <span className="text-[#06B6D4] text-xs font-black uppercase tracking-widest block">THE EVOLUTION</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                                Our Journey
                            </h2>
                            <div className="w-16 h-0.5 bg-[#06B6D4]"></div>
                                <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed pt-2">
                                    Founded in Matara, Sri Lanka, Micronsoft Solutions (Pvt) Ltd has grown from a small startup into a trusted software development partner for businesses in the Down South region. Our commitment to delivering high-quality, custom software solutions has allowed us to expand our client base and offerings significantly, establishing a reputation for excellence and innovation in the tech industry.
                                </p>
                                <p className="text-slate-400 font-medium text-sm md:text-base leading-relaxed border-l-2 border-[#06B6D4] pl-5 italic">
                                    Over the years, we have evolved our services to include comprehensive web and mobile app development, cementing our position as a leading tech partner dedicated to supporting our clients’ varied digital needs.
                                </p>
                            </div>
                            <div className="lg:col-span-7 h-95 border border-slate-900 rounded-3xl overflow-hidden relative group shadow-2xl">
                            <img
                                ref={journeyImageRef}
                                src="j.jpeg"
                                alt="Our Journey"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none">
                            </div>
                        </div>

                    </div>
                </section>
            </section>
                
        </section>
    )
}