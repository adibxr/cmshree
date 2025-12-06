
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Youtube, Globe, Mail, Bug, Code } from 'lucide-react';

const DeveloperProfile: React.FC = () => {
  const [gitHubData, setGitHubData] = useState<{ bio: string; location: string } | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/adibxr')
      .then((res) => res.json())
      .then((data) => {
        setGitHubData(data);
      })
      .catch((err) => console.error("Failed to fetch GitHub data", err));
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-red-50 text-red-600 rounded-2xl mb-4">
             <Bug size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">Report a Bug</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Encountered an issue? Connect directly with the developer to report bugs or suggest improvements.
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row gap-12 items-center">
           
           {/* Profile Image / Avatar Area */}
           <div className="shrink-0 flex flex-col items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 p-1 shadow-2xl relative group mb-6">
                 <img 
                   src="https://github.com/adibxr.png" 
                   alt="Aditya Raj" 
                   className="w-full h-full rounded-full object-cover border-4 border-white bg-white grayscale group-hover:grayscale-0 transition-all duration-500"
                 />
                 <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full border-4 border-white">
                    <Code size={20} />
                 </div>
              </div>

              {/* GitHub Status / Memo */}
              <div className="bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 flex items-center gap-3">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                 </span>
                 <span className="text-xs font-bold text-slate-700 max-w-[200px] truncate">
                   {gitHubData?.bio || "Building digital experiences..."}
                 </span>
              </div>
           </div>

           {/* Info */}
           <div className="flex-1 text-center md:text-left space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Aditya Raj</h2>
                <p className="text-blue-600 font-medium font-mono mt-1">Full Stack Developer & Designer</p>
                {gitHubData?.location && (
                  <p className="text-slate-400 text-sm mt-1">{gitHubData.location}</p>
                )}
              </div>

              <p className="text-slate-600 leading-relaxed text-lg">
                Passionate about crafting minimal, accessible, and high-performance digital experiences. I built this portal with a focus on modern aesthetics and user-centric design. If you spot any technical glitches, please reach out!
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 <a href="https://github.com/adibxr" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-xl text-slate-800 hover:text-black hover:shadow-lg transition-all border border-slate-200">
                    <Github size={24} />
                 </a>
                 <a href="https://linkedin.com/in/adibxr" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-xl text-slate-800 hover:text-[#0077b5] hover:shadow-lg transition-all border border-slate-200">
                    <Linkedin size={24} />
                 </a>
                 <a href="https://youtube.com/@adibxr" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-xl text-slate-800 hover:text-red-600 hover:shadow-lg transition-all border border-slate-200">
                    <Youtube size={24} />
                 </a>
                 <a href="https://immortaladi.live" target="_blank" rel="noreferrer" className="p-3 bg-white rounded-xl text-slate-800 hover:text-purple-600 hover:shadow-lg transition-all border border-slate-200">
                    <Globe size={24} />
                 </a>
              </div>
              
              <div className="pt-6 border-t border-slate-200">
                 <a 
                   href="mailto:devadibxr@gmail.com?subject=Bug Report - CM SHRI Portal" 
                   className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-black hover:-translate-y-1 transition-all shadow-lg"
                 >
                   <Mail size={18} /> Send Bug Report
                 </a>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default DeveloperProfile;
