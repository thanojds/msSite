import { motion } from "framer-motion";
import Navigation from "../Navigation";
import PageFooter from "./PageFooter";
import { useRef, useState } from "react";

export default function Contact() {
  const nameInputRef = useRef<HTMLInputElement>(null);
   const focusForm = () => {
    nameInputRef.current?.focus();
    nameInputRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };


const emailRef = useRef<HTMLInputElement | null>(null);
const messageRef = useRef<HTMLTextAreaElement | null>(null);
const [alertMsg, setAlertMsg] = useState<string | null>(null);

const showAlert = (msg: string) => {
  setAlertMsg(msg);

  setTimeout(() => {
    setAlertMsg(null);
  }, 3000);
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

      const name = nameInputRef.current?.value.trim();
      const email = emailRef.current?.value.trim();
      const message = messageRef.current?.value.trim();


        if (!name || !email || !message) {
          showAlert("⚠️ Please fill all fields!");
          return;
        }

        const mailtoLink = `mailto:micronsoftsolutions@gmail.com?subject=Contact Form&body=
          Name: ${name}%0A
          Email: ${email}%0A
          Message: ${message}
      `;

    window.location.href = mailtoLink;
  };


  return (
    <>
      <Navigation />
      <section className="relative w-full min-h-screen py-32 px-6 bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-125 h-50 bg-cyan-500 blur-[160px] opacity-20 rounded-full animate-pulse" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06B6D420_1px,transparent_1px),linear-gradient(to_bottom,#06B6D420_1px,transparent_1px)] bg-size-[4rem_4rem]" />

      {/* SIDE GLOWS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 blur-[140px] opacity-20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500 blur-[160px] opacity-20 rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-xs tracking-[0.4em] uppercase font-black"
        >
          INITIATE CONTACT PROTOCOL
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black leading-tight"
        >
          Let’s Build Something <span className="text-cyan-400">Futuristic</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-slate-400 text-sm md:text-base"
        >
          Connect with our team and turn your idea into a high-performance digital system.
        </motion.p>
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.1)]"
        >
          <h3 className="text-xl font-bold text-cyan-300 mb-6">
            Send Message
          </h3>

          <div className="space-y-4">
            <input  ref={nameInputRef}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
            />

            <button onClick={handleSubmit} className="w-full py-3 bg-cyan-500 text-black font-black rounded-xl hover:scale-105 transition shadow-[0_0_30px_#06B6D4]">
              Send Message
            </button>
          </div>
        </motion.div>

        {/* INFO PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl"
        >
          <h3 className="text-xl font-bold text-cyan-300 mb-6">
            Contact Info
          </h3>

          <div className="space-y-6 text-slate-300">

            <div>
              <p className="text-white font-semibold">📍 Location</p>
              <p>Sri Lanka — Matara</p>
            </div>

            <div>
              <p className="text-white font-semibold">✉ Email</p>
              <p>micronsoftsolutions@gmail.com</p>
            </div>

            <div>
              <p className="text-white font-semibold">📞 Phone</p>
              <p>+94 70 416 0160</p>
            </div>

                <div className="flex gap-4 mt-8 flex-wrap">
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
        </motion.div>

      </div>

      {/* BOTTOM CTA */}
      <div className="relative z-10 text-center mt-24">
        <h3 className="text-2xl md:text-4xl font-black">
          Ready to start your <span className="text-cyan-400">digital journey?</span>
        </h3>

        <button onClick={focusForm} className="mt-6 px-8 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:scale-105 transition shadow-[0_0_30px_#06B6D4] cursor-pointer">
          Get Started
        </button>
      </div>

    </section>
    <PageFooter />
    {alertMsg && (
      <div className="fixed top-6 right-6 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg z-999 animate-pulse">
        {alertMsg}
      </div>
    )}
    </>
  );
}