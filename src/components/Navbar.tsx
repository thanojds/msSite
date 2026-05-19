import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
    sections,
    scrollToSection,
    active
}: {
    sections: string[];
    scrollToSection: (index: number) => void;
    active: number;
}) {

    const [open, setOpen] = useState(false);

    const handleClick = (index: number) => {
        scrollToSection(index);
        setOpen(false);
    };

    return (
        <>
            {/* TOP NAV */}
            <div className="fixed top-0 w-full h-20 z-50 bg-transparent border-b border-white/10 backdrop-blur-md">
                <nav className="flex items-center justify-between h-full px-6 md:px-10">

                    {/* LOGO */}
                    <p className="text-xl font-bold text-white">
                        Micronsoft Solutions
                    </p>

                    {/* MENU BUTTON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-white hover:border-cyan-400 transition"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                        <span className="text-xs uppercase tracking-widest hidden sm:block">
                            Menu
                        </span>
                    </button>
                </nav>
            </div>

            {/* MINI DROPDOWN PANEL */}
            <div
                className={`
                    fixed right-6 top-20 z-50
                    w-52
                    bg-black/80 backdrop-blur-xl
                    border border-white/10
                    rounded-2xl
                    shadow-xl
                    overflow-hidden
                    transition-all duration-300 origin-top
                    ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
                `}
            >
                <div className="flex flex-col py-2">

                    {sections.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => handleClick(i)}
                            className={`text-left px-4 py-3 text-sm uppercase tracking-widest transition ${
                                active === i
                                    ? "text-cyan-300 bg-white/5"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {s}
                        </button>
                    ))}

                </div>
            </div>
        </>
    );
}