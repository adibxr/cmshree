
import React from 'react';
import { ClipboardCheck, Box, ExternalLink, LogOut, LayoutGrid } from 'lucide-react';

interface Props {
  onLogout: () => void;
}

const ERPDashboard: React.FC<Props> = ({ onLogout }) => {
  
  const handleNavigation = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* ERP Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-30">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-md">
             <LayoutGrid size={20} />
           </div>
           <div>
             <h1 className="text-lg font-bold text-slate-900 leading-none">ERP Portal</h1>
             <p className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-1">Staff Access Only</p>
           </div>
        </div>
        <button 
           onClick={onLogout}
           className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all text-sm font-bold rounded-xl"
         >
           <LogOut size={18} /> <span className="hidden sm:inline">Exit Portal</span>
         </button>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6 animate-fade-in-up">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Select Module</h2>
             <p className="text-slate-500 max-w-lg mx-auto text-lg">Secure access point for administrative tools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Attendance Module */}
            <div 
              onClick={() => handleNavigation('https://adibxrreco.vercel.app')}
              className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <ClipboardCheck size={140} className="text-blue-600 rotate-12" />
               </div>
               
               <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600 relative z-10 shadow-sm">
                 <ClipboardCheck size={32} />
               </div>
               
               <div className="relative z-10">
                 <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Attendance</h2>
                 <p className="text-slate-500 mb-8 leading-relaxed">Daily attendance logs for students and staff members. View reports and manage records.</p>
                 <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-5 py-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   Launch App <ExternalLink size={16} />
                 </div>
               </div>
            </div>

            {/* Resources Module */}
            <div 
              onClick={() => handleNavigation('https://adibxrrecolabs.vercel.app')}
              className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Box size={140} className="text-orange-500 -rotate-12" />
               </div>

               <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors text-orange-500 relative z-10 shadow-sm">
                 <Box size={32} />
               </div>
               
               <div className="relative z-10">
                 <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">Issue Resources</h2>
                 <p className="text-slate-500 mb-8 leading-relaxed">Inventory management for labs and library resources. Track assets and issue items.</p>
                 <div className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 bg-orange-50 px-5 py-3 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                   Launch App <ExternalLink size={16} />
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPDashboard;
