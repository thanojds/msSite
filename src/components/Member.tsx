export default function Member() {

    const teamMembers = [

        {
            name: "Sithara Samarakoon",
            role: "Co-Founder",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
        },

        {
            name: "Thanoj Pathmakulasooriya",
            role: "Co-Founder",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
        },

        {
            name: "Udara Bandara",
            role: "Developing Manager",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
        },

        {
            name: "Bency Abeykoon",
            role: "Marketing Manager",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
        }

    ];

    return (

        <section className="bg-[#04060D] py-24 px-6 border-y border-slate-950 w-full overflow-hidden">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-16">

                    <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.3em] block">
                        MEET OUR TEAM
                    </span>

                    <h2 className="text-3xl md:text-5xl font-black text-white mt-4 max-w-5xl mx-auto leading-tight">
                        Dedicated Professionals
                        <br />
                        Committed To You
                    </h2>

                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

                    {teamMembers.map((member, idx) => (

                        <div
                            key={idx}
                            className="
                                group
                                rounded-3xl
                                overflow-hidden

                                border border-white/10
                                bg-white/3
                                backdrop-blur-xl

                                transition-all duration-500
                                hover:border-cyan-400/40
                                hover:-translate-y-2

                                shadow-[0_0_30px_rgba(0,0,0,0.4)]
                            "
                        >

                            {/* IMAGE */}
                            <div className="relative h-64 overflow-hidden bg-slate-950">

                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="
                                        w-full h-full object-cover

                                        grayscale
                                        contrast-125

                                        transition-all duration-700
                                        group-hover:grayscale-0
                                        group-hover:scale-110
                                    "
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                            </div>

                            {/* CONTENT */}
                            <div className="p-6 text-center">

                                <h4 className="
                                    text-white
                                    text-lg
                                    font-black
                                    uppercase
                                    tracking-wide

                                    transition-colors
                                    duration-300

                                    group-hover:text-cyan-400
                                ">
                                    {member.name}
                                </h4>

                                <p className="mt-2 text-slate-400 text-xs uppercase tracking-[0.25em] font-bold">
                                    {member.role}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}