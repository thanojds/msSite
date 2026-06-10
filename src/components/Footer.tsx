type FooterProps = {
  scrollToContact: () => void
}

export default function Footer({ scrollToContact }: FooterProps) {
  
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

            <button onClick={scrollToContact} className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-500 cursor-pointer">
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
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Event & News", path: "/events" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => window.location.href = item.path}
                  className="text-left text-slate-400 hover:text-cyan-300 transition-all duration-300 uppercase tracking-wider text-sm font-semibold hover:translate-x-2 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
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
                  <p className="text-slate-500 text-sm">Matara</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  ✉️
                </div>
                <div>
                  <p className="text-white font-semibold">info@micronsoftware.lk</p>
                  <p className="text-slate-500 text-sm">Send us an email</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  📞
                </div>
                <div>
                  <p className="text-white font-semibold">+94 70 416 0160</p>
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


          <div className="flex items-center gap-4">

            {/* WhatsApp */}
            <a
              href="https://wa.me/94704160160" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-300 hover:text-white">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.38-1.67a11.8 11.8 0 0 0 5.66 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.17-1.24-6.14-3.48-8.45ZM12.04 21.5a9.7 9.7 0 0 1-4.95-1.35l-.35-.2-3.79.99 1.01-3.69-.22-.38a9.75 9.75 0 1 1 18-5.03 9.75 9.75 0 0 1-9.7 9.66Zm5.6-7.4c-.31-.16-1.84-.91-2.12-1.01-.28-.1-.49-.16-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.02-.55-.08-.16-.7-1.7-.96-2.33-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.08-.8.39-.28.31-1.05 1.02-1.05 2.48 0 1.46 1.08 2.87 1.23 3.07.15.2 2.08 3.18 5.05 4.46.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.84-.75 2.1-1.47.26-.72.26-1.33.18-1.47-.08-.14-.28-.22-.59-.38Z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/18mNdXuBDs/" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-300 hover:text-white">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.6v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/micronsoftsl?fbclid=IwVERDUASDy5pleHRuA2FlbQIxMABzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR7ySwiITA5IjiCyStFTSb1vZ5RL-VrtC9VCjUbPIzTzz-iooNkOPWdzTfIsgw_aem_x6mBY-wUz258VAwSSKEELQ" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-black hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-300 hover:text-white">
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.8l-5.3-6.7L4.7 22H1.6l7.3-8.4L1 2h6.9l4.8 6.1L18.9 2Zm-1.2 18h1.9L6.5 3.9H4.4L17.7 20Z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/micronsoftsl?igsh=aXBjN2VqeWl2cmhn" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-300 hover:text-white">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6.8a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@micronsoft?_r=1&_t=ZS-96i9xSqdBbh" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-slate-300 hover:text-white">
                <path d="M21 8.3a8.2 8.2 0 0 1-4.8-1.5v6.6a6.7 6.7 0 1 1-6.7-6.7c.3 0 .6 0 .9.1v3.3a3.4 3.4 0 1 0 2.4 3.3V2h3.3a4.8 4.8 0 0 0 4.8 4.8v1.5Z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}