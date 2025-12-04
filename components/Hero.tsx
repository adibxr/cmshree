import React from 'react';
import { ArrowRight, BookOpen, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background shapes - minimal */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent-100/50 rounded-full blur-3xl opacity-60 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Text Content */}
            <div className="flex-1 space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                Admissions Open for 2024-25
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                Nurturing <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Future Leaders</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                CM SHRI School provides a holistic environment where tradition meets innovation, fostering excellence in every student.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold shadow-lg shadow-primary-200 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
                  Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="flex-1 relative animate-fade-in-left">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students studying in library" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                 <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-600">
                     <Award size={24} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 font-semibold uppercase">Excellence</p>
                     <p className="text-gray-900 font-bold">#1 School in District</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: BookOpen, title: "Modern Curriculum", desc: "CBSE aligned curriculum with focus on STEAM education." },
               { icon: Users, title: "Expert Faculty", desc: "Highly qualified teachers dedicated to student growth." },
               { icon: Award, title: "Holistic Development", desc: "Sports, Arts, and Leadership programs for all round growth." }
             ].map((feature, i) => (
               <div key={i} className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group border border-transparent hover:border-gray-100">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
