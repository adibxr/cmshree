
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer id="footer" className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: School Details & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <img 
                   src="https://res.cloudinary.com/dyvtidqes/image/upload/v1764865536/image-removebg-preview_quovzh.png" 
                   alt="Logo"
                   className="w-14 h-14 object-contain"
               />
               <div>
                  <h2 className="text-xl font-bold text-slate-900 leading-none">CM SHRI</h2>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mt-1">Sector 5 Dwarka</p>
               </div>
            </div>
            
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-slate-900 shrink-0 mt-0.5" />
                <span>Sector 5, Dwarka,<br/>New Delhi, Delhi 110075</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-slate-900 shrink-0" />
                <span>+91 11 2508 0096</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-slate-900 shrink-0" />
                <span>devadibxr@gmail.com</span>
              </li>
            </ul>

            <div className="flex gap-3 pt-2">
              <a href="https://www.youtube.com/@asose.rpvvsec5official" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all">
                <Youtube size={18} />
              </a>
              <a href="https://www.facebook.com/p/CM-SHRI-Sector-5-Dwarka-61553014147640/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/RPVV_ASOSE_dwk5" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/cmshrisec5dwarka/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Legal */}
          <div className="md:pl-10">
            <h3 className="font-bold text-slate-900 mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li>
                <button 
                  onClick={() => { onNavigate('privacy'); window.scrollTo(0,0); }}
                  className="hover:text-slate-900 hover:translate-x-1 transition-all inline-block text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('bug_report'); window.scrollTo(0,0); }}
                  className="hover:text-slate-900 hover:translate-x-1 transition-all inline-block text-left"
                >
                  Report a Bug
                </button>
              </li>
              <li>
                 <button 
                  onClick={() => { onNavigate('disclosure'); window.scrollTo(0,0); }}
                  className="hover:text-slate-900 hover:translate-x-1 transition-all inline-block text-left"
                >
                  Mandatory Disclosure
                </button>
              </li>
              <li>
                 <button 
                  onClick={() => { onNavigate('rti'); window.scrollTo(0,0); }}
                  className="hover:text-slate-900 hover:translate-x-1 transition-all inline-block text-left"
                >
                  Right to Information
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('handbook'); window.scrollTo(0,0); }}
                  className="hover:text-slate-900 hover:translate-x-1 transition-all inline-block text-left"
                >
                  Student Handbook
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Map */}
          <div className="h-full min-h-[200px] w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.6268159670733!2d77.0366835761664!3d28.580963575692945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1a7d656091%3A0x1c1e5ac064741d4b!2sRajkiya%20Pratibha%20Vikas%20Vidyalaya%20Sector%205%20Dwarka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{border:0, minHeight: '200px'}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="School Location"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} CM SHRI School, Sector 5 Dwarka.</p>
          <p>Excellence in Education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
