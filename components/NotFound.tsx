import React from 'react';
import { Home, Search, HelpCircle } from 'lucide-react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const NotFound: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
      
      {/* Floating 404 Graphic */}
      <div className="relative mb-12">
        <h1 className="text-[10rem] md:text-[14rem] font-bold text-slate-900 leading-none select-none opacity-5">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="relative w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center animate-bounce duration-[3000ms]">
              <HelpCircle size={80} className="text-slate-300" />
              <div className="absolute -right-4 -top-4 bg-red-500 text-white p-3 rounded-full shadow-lg rotate-12">
                <span className="text-xl font-bold">?</span>
              </div>
           </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-slate-900 mb-4">Wrong Classroom?</h2>
      <p className="text-lg text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
        It seems you've wandered into a corridor that doesn't exist. The page you are looking for might have been moved or the period is over.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => onNavigate('home')}
          className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2"
        >
          <Home size={20} /> Return to Reception
        </button>
        
        <button 
           onClick={() => onNavigate('contact')}
           className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
        >
           <Search size={20} /> Contact Office
        </button>
      </div>

      <div className="mt-16 text-slate-400 text-sm">
        Error Code: 404_PAGE_NOT_FOUND
      </div>

    </div>
  );
};

export default NotFound;