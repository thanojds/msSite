import { CheckCircle2, Eye, Target } from "lucide-react";
import { useState } from "react";

export default function About() {
      const [activeTab, setActiveTab] = useState('philosophy')
    return (
        <section className="scroll-trigger-section max-w-7xl mx-auto py-28 px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-4 sticky top-28 space-y-6">

          <span className="text-[#06B6D4] text-xs font-black uppercase tracking-widest block">IDENTITY CORE</span>

          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 border-l border-slate-900">

            {['philosophy', 'mission', 'vision'].map((tab) => (

              <button

                key={tab}

                onClick={() => setActiveTab(tab)}

                className={`pl-5 pr-6 py-3.5 text-left font-black text-xs md:text-sm uppercase tracking-wider transition-all duration-300 border-l-2 -ml-px ${

                  activeTab === tab ? 'text-white border-[#06B6D4] bg-[#0A0F1D]' : 'text-slate-500 border-transparent hover:text-slate-300'

                }`}

              >

                {tab === 'philosophy' ? 'Who We Are' : `Our ${tab}`}

              </button>

            ))}

          </div>

        </div>



        <div className="lg:col-span-8 min-h-75">

          {activeTab === 'philosophy' && (

            <div className="space-y-6">

              <h3 className="text-3xl font-black text-white uppercase italic">Who We Are</h3>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed">

                We are an elite team of tech enthusiasts, engineers, and digital visionaries specializing in the execution of complex system deployments, high-performance web products, and secure enterprise setups.

              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">

                {['Custom Web Architectures', 'Cross-Platform Mobile Apps', 'Enterprise Cloud ERPs', 'UI/UX Interactive Systems'].map((item, i) => (

                  <div key={i} className="flex items-center gap-3 bg-[#0A0F1D]/40 p-4 rounded-xl border border-slate-900">

                    <CheckCircle2 size={16} className="text-[#06B6D4]" />

                    <span className="text-sm font-bold text-slate-200">{item}</span>

                  </div>

                ))}

              </div>

            </div>

          )}



          {activeTab === 'mission' && (

            <div className="space-y-6">

              <h3 className="text-3xl font-black text-[#06B6D4] uppercase italic flex items-center gap-3"><Target size={32}/> Our Mission</h3>

              <p className="text-slate-200 font-black text-lg md:text-xl leading-relaxed border-l-4 border-white pl-5 italic bg-[#0A0F1D]/60 p-6 rounded-r-2xl">

                To empower businesses through innovative custom software solutions that enhance efficiency, productivity, and overall success in a digital world.

              </p>

            </div>

          )}



          {activeTab === 'vision' && (

            <div className="space-y-6">

              <h3 className="text-3xl font-black text-[#06B6D4] uppercase italic flex items-center gap-3"><Eye size={32}/> Our Vision</h3>

              <p className="text-slate-200 font-black text-lg md:text-xl leading-relaxed border-l-4 border-white pl-5 italic bg-[#0A0F1D]/60 p-6 rounded-r-2xl">

                We believe in integrity, collaboration, and innovation, ensuring that every solution we deliver aligns with our clients’ goals while providing meaningful impacts and sustainable growth.

              </p>

            </div>

          )}

        </div>

      </section>
    )
}