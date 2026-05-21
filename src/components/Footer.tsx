export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#02050B] border-t border-white/10 w-full">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[5rem_5rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 border-b border-white/10 pb-14">

          <div className="space-y-6">

            <div>
              <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.3em] mb-3">
                Micronsoft Solutions
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-none">
                Building The Future Of Digital Experiences
              </h2>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md">
              We craft modern software, web platforms, and digital experiences
              with premium design and performance.
            </p>

            <button className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-500">
              Start A Project

              <div className="w-9 h-9 rounded-xl bg-cyan-500 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                ↗
              </div>
            </button>
          </div>

          <div className="lg:pl-16">

            <p className="text-white font-black uppercase tracking-[0.25em] text-sm mb-8">
              Navigation
            </p>

            <div className="flex flex-col gap-5">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item, i) => (
                  <button
                    key={i}
                    className="text-left text-slate-400 hover:text-cyan-300 transition-all duration-300 uppercase tracking-wider text-sm font-semibold hover:translate-x-2"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          <div>

            <p className="text-white font-black uppercase tracking-[0.25em] text-sm mb-8">
              Contact
            </p>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  📍
                </div>
                <div>
                  <p className="text-white font-semibold">Sri Lanka</p>
                  <p className="text-slate-500 text-sm">Matara / Negombo</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  ✉️
                </div>
                <div>
                  <p className="text-white font-semibold">hello@micronsoft.lk</p>
                  <p className="text-slate-500 text-sm">Send us an email</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  📞
                </div>
                <div>
                  <p className="text-white font-semibold">+94 77 123 4567</p>
                  <p className="text-slate-500 text-sm">Mon - Fri / 9AM - 6PM</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-slate-600 text-xs uppercase tracking-[0.2em] font-bold">
            © 2026 Micronsoft Solutions (Pvt) Ltd. All Rights Reserved.
          </p>

          {/* SOCIAL ICONS (NO LIBRARY) */}
          <div className="flex items-center gap-4">

            {/* Facebook */}
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-300 hover:text-white">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.6v7A10 10 0 0 0 22 12z"/>
              </svg>
            </div>

            {/* Instagram */}
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-300 hover:text-white">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6.8a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
              </svg>
            </div>

            {/* Globe */}
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current text-slate-300 hover:text-white" fill="none" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20"/>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}