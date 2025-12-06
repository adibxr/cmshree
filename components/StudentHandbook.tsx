
import React from 'react';

const StudentHandbook: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">Student Handbook</h1>
          <p className="text-slate-500 text-lg">Guidelines, policies, and essential information for students.</p>
        </div>

        <div className="relative w-full max-w-5xl shadow-2xl shadow-slate-200 rounded-[2rem] overflow-hidden border border-slate-100 bg-slate-50">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe 
              loading="lazy" 
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.canva.com/design/DAG6wDh2icc/7iSOOiwEJ6RF-hd9PEPAuA/view?embed" 
              allowFullScreen={true} 
              allow="fullscreen"
              title="Student Handbook Presentation"
            >
            </iframe>
          </div>
        </div>

        <div className="mt-8 text-center">
           <a 
             href="https://www.canva.com/design/DAG6wDh2icc/7iSOOiwEJ6RF-hd9PEPAuA/view" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-full font-bold text-sm hover:bg-slate-200 transition-colors"
           >
             Open in Full Screen
           </a>
        </div>

      </div>
    </div>
  );
};

export default StudentHandbook;