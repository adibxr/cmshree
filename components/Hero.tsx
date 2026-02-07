import React from 'react';
import { ArrowRight, Sparkles, MoveRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decor - Ultra Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[400px] bg-slate-50 rounded-full blur-[120px] opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          <div className="animate-fade-in-up flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
             <Sparkles size={12} className="text-accent-500" />
             PM SHRI • Sector 5 Dwarka
          </div>

          <div className="space-y-6 max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-8xl font-extrabold text-slate-900 leading-[1] tracking-tighter">
              A Future Defined by <br className="hidden md:block" />
              <span className="text-slate-300">Excellence.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Dr. B.R. Ambedkar School of Specialised Excellence (ASoSE). 
              Where every learner finds their specialised path to greatness.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <a 
              href="https://edudel.nic.in/CMSHRIApp/Home.aspx"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-black hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 group"
            >
              Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              Virtual Tour
            </button>
          </div>

          {/* Minimal Banner Image */}
          <div className="w-full max-w-6xl mt-16 rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 animate-fade-in-up aspect-[21/9] relative group cursor-pointer">
             <img 
               src="https://images.unsplash.com/photo-1541339907198-e087566f3f0b?q=80&w=2070&auto=format&fit=crop" 
               alt="Modern Campus Environment"
               className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                <div className="text-white text-left">
                   <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2">Modern Infrastructure</p>
                   <h3 className="text-2xl font-bold">Innovation Labs & Collaborative Spaces</h3>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;