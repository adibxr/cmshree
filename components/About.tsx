
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
             <span className="text-slate-500 font-medium tracking-wider text-sm uppercase">Our Legacy</span>
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Empowering Students Since Inception</h2>
             <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
               <p>
                 Welcome to CM SHRI School, Sector 5 Dwarka. Established with a vision to provide world-class education, our institution stands as a beacon of excellence in the government school sector under the prestigious PM SHRI scheme.
               </p>
               <p>
                 We are committed to the holistic development of our students, blending traditional values with modern pedagogy. Our campus features state-of-the-art laboratories, a digital library, and vast sports facilities, ensuring every child finds their path to success.
               </p>
             </div>
             
             <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                <div>
                   <h4 className="text-3xl font-bold text-slate-900">1200+</h4>
                   <p className="text-sm text-slate-500 mt-1">Students</p>
                </div>
                <div>
                   <h4 className="text-3xl font-bold text-slate-900">100%</h4>
                   <p className="text-sm text-slate-500 mt-1">Pass Rate</p>
                </div>
                <div>
                   <h4 className="text-3xl font-bold text-slate-900">45+</h4>
                   <p className="text-sm text-slate-500 mt-1">Awards</p>
                </div>
             </div>
          </div>
          
          <div className="relative order-1 md:order-2 h-full min-h-[400px]">
             <div className="absolute inset-0 bg-slate-200 rounded-[2rem] transform rotate-3 scale-95"></div>
             <img 
               src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2074&auto=format&fit=crop"
               alt="CM SHRI School Building Sector 5" 
               className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-xl"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
