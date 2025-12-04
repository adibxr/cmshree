
import React from 'react';
import { Star, Book, Trophy, Quote, ArrowRight } from 'lucide-react';
import Calendar from './Calendar';
import SocialHub from './SocialHub';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          
          <span className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
             PM SHRI Scheme • Sector 5 Dwarka
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8 max-w-5xl">
            Excellence in <br className="hidden md:block"/>
            <span className="text-slate-400">Education & Innovation</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
            CM SHRI School, Sector 5 Dwarka offers a futuristic learning environment designed to nurture leaders of tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
            <a 
              href="https://edudel.nic.in/CMSHRIApp/Home.aspx"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-black transition-all hover:scale-105 shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group"
            >
              Apply for Admission <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>

          {/* State of Art Infra Video */}
          <div className="w-full max-w-5xl mx-auto mt-8 group">
            <div className="flex items-center justify-center gap-3 mb-6">
               <div className="h-px w-12 bg-slate-200"></div>
               <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">State of Art Infra</h2>
               <div className="h-px w-12 bg-slate-200"></div>
            </div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 bg-black aspect-video md:aspect-[21/9] transition-all duration-700 ease-in-out grayscale hover:grayscale-0 transform hover:scale-[1.01]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="auto"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              >
                <source src="https://res.cloudinary.com/dyvtidqes/video/upload/v1764864702/Untitled_design_bu8ac5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay Text (Visible when grayscale/default) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
                 <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full text-white/80 text-sm font-medium tracking-wider uppercase border border-white/10">
                    Explore Campus
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: Book, title: "Modern Curriculum", desc: "CBSE aligned curriculum with focus on STEAM education." },
               { icon: Trophy, title: "Expert Faculty", desc: "Highly qualified teachers dedicated to student growth." },
               { icon: Star, title: "Holistic Development", desc: "Sports, Arts, and Leadership programs for all round growth." }
             ].map((feature, i) => (
               <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

       {/* Principal's Message Section */}
       <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative group">
               <div className="absolute top-4 left-4 w-full h-full border-2 border-slate-200 rounded-[2rem] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
               <img 
                 src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                 alt="Principal" 
                 loading="lazy"
                 className="relative z-10 w-full rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
               />
               <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                  <p className="font-bold text-slate-900 text-lg">Ms. Monika Batra</p>
                  <p className="text-slate-500 text-sm">Head of School</p>
               </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-8">
               <Quote size={48} className="text-slate-200 fill-current" />
               <h2 className="text-4xl font-bold text-slate-900 leading-tight">Inspiring Excellence, <br/>Building Character.</h2>
               <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    "At CM SHRI School, we believe that education is not just about filling a bucket, but lighting a fire. Our mission is to create a safe and nurturing environment where every child feels valued and empowered to reach their full potential."
                  </p>
                  <p>
                    We integrate modern technology with traditional values, ensuring our students are prepared for the challenges of the 21st century while remaining rooted in their culture."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Calendar Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Academic Calendar</h2>
            <p className="text-slate-500">Upcoming public holidays and school events.</p>
          </div>
          <Calendar />
        </div>
      </section>

      {/* Social Hub Section */}
      <SocialHub />
    </div>
  );
};

export default Home;
