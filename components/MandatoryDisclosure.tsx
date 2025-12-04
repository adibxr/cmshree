import React from 'react';
import { Droplets, Map, CloudRain, FileText, ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';

const MandatoryDisclosure: React.FC = () => {
  // You can easily update the 'link' property below with your actual PDF/Drive URLs
  const documents = [
    {
      title: "Water Health & Safety Report",
      icon: Droplets,
      link: "#", 
      colorClass: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
    },
    {
      title: "School Building Safety Map",
      icon: Map,
      link: "#",
      colorClass: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
    },
    {
      title: "Rain Water Harvesting System",
      icon: CloudRain,
      link: "#",
      colorClass: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white"
    },
    {
      title: "Fire Safety Certificate",
      icon: ShieldCheck,
      link: "#",
      colorClass: "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
    },
    {
      title: "Academic Calendar",
      icon: Calendar,
      link: "#",
      colorClass: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
    },
    {
      title: "Fee Structure & Policies",
      icon: FileText,
      link: "#",
      colorClass: "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white"
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">Mandatory Disclosure</h1>
           <p className="text-slate-500 max-w-2xl mx-auto text-lg">
             Public disclosure of school information and regulatory compliance documents.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {documents.map((doc, idx) => (
             <a 
               key={idx}
               href={doc.link}
               target="_blank"
               rel="noopener noreferrer"
               className="group relative p-8 rounded-[2.5rem] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col items-center text-center cursor-pointer hover:-translate-y-2 overflow-hidden"
             >
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-8 transition-all duration-500 shadow-sm ${doc.colorClass}`}>
                   <doc.icon size={40} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">{doc.title}</h3>
                <p className="text-slate-400 text-sm mb-8">Click to view official document</p>

                <div className="mt-auto px-6 py-3 rounded-full bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-wider group-hover:bg-slate-900 group-hover:text-white transition-all flex items-center gap-2">
                  View File <ArrowUpRight size={14} />
                </div>
             </a>
           ))}
        </div>
      </div>
    </div>
  );
};

export default MandatoryDisclosure;