import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer id="footer" className="bg-white pt-24 pb-12 border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          
          {/* Column 1: Identity */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-3">
               <img 
                   src="https://res.cloudinary.com/dyvtidqes/image/upload/v1764865536/image-removebg-preview_quovzh.png" 
                   alt="CM SHRI Logo"
                   className="w-14 h-14 object-contain"
               />
               <div>
                  <h2 className="text-xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">CM SHRI</h2>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Sector 5 Dwarka</p>
               </div>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed">
              Dr. B.R. Ambedkar School of Specialised Excellence (ASoSE) - A premium institution under the PM SHRI scheme.
            </p>

            <div className="flex gap-2">
              {[
                { icon: Youtube, link: "https://www.youtube.com/@asose.rpvvsec5official" },
                { icon: Facebook, link: "https://www.facebook.com/p/CM-SHRI-Sector-5-Dwarka-61553014147640/" },
                { icon: Twitter, link: "https://x.com/RPVV_ASOSE_dwk5" },
                { icon: Instagram, link: "https://www.instagram.com/cmshrisec5dwarka/" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center border border-slate-100"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Navigation</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li><button onClick={() => { onNavigate('home'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors">Home</button></li>
              <li><button onClick={() => { onNavigate('about'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors">About Us</button></li>
              <li><button onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors">Contact</button></li>
              <li><button onClick={() => { onNavigate('disclosure'); window.scrollTo(0,0); }} className="hover:text-slate-900 transition-colors">Mandatory Disclosure</button></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Contact</h3>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-slate-300 mt-1 shrink-0" />
                <span>Sector 5, Dwarka,<br/>New Delhi, Delhi 110075</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-slate-300 shrink-0" />
                <span>+91 11 2508 0096</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-slate-300 shrink-0" />
                <span className="truncate">devadibxr@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map */}
          <div className="md:col-span-1">
             <div className="h-44 w-full bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 relative group">
                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8228394464016!2d77.0503908!3d28.5966081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b06361f7aa1%3A0x2673dcf2da124bd4!2sASOSE%20Dwarka%20Sector%205!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   title="CM SHRI Location"
                   className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <a 
                  href="https://www.google.com/maps/place/ASOSE+Dwarka+Sector+5/@28.5966081,77.0503908,17z"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink size={14} className="text-slate-900" />
                </a>
             </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} CM SHRI School Sector 5 Dwarka. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('privacy')} className="hover:text-slate-900 transition-colors">Privacy</button>
            <button onClick={() => onNavigate('rti')} className="hover:text-slate-900 transition-colors">RTI</button>
            <button onClick={() => onNavigate('bug_report')} className="hover:text-slate-900 transition-colors">Technical</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;