
import React, { useState, useEffect } from 'react';
import { Menu, X, LayoutGrid } from 'lucide-react';
import { NavLink, UserRole, View } from '../types';

interface Props {
  currentView: View;
  onNavigate: (view: View) => void;
  onAdminLogin: () => void;
  userRole: UserRole;
  onLogout: () => void;
}

const Header: React.FC<Props> = ({ currentView, onNavigate, onAdminLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <header 
        className={`w-full max-w-4xl transition-all duration-300 rounded-full border border-slate-900 ${
          isScrolled 
            ? 'glass shadow-2xl py-2.5 px-5' 
            : 'bg-white/60 backdrop-blur-xl shadow-lg py-3 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Minimal Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => { onNavigate('home'); window.scrollTo(0,0); }}
          >
             <img 
                 src="https://res.cloudinary.com/dyvtidqes/image/upload/v1764865536/image-removebg-preview_quovzh.png" 
                 alt="Logo"
                 className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
             />
             <div className="flex flex-col">
               <span className="font-bold text-lg tracking-tight text-slate-900 leading-none">
                 CM SHRI
               </span>
               <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-0.5">
                 Sector 5 Dwarka
               </span>
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-white/50">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { onNavigate(link.view); window.scrollTo(0,0); }}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                  currentView === link.view 
                    ? 'bg-white text-slate-900 shadow-sm scale-105' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ERP Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onAdminLogin}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-black transition-all hover:shadow-lg hover:-translate-y-0.5 tracking-wide uppercase"
            >
              <LayoutGrid size={14} /> <span>ERP</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-900 hover:bg-white/50 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-900 p-4 md:hidden flex flex-col gap-2 animate-fade-in-up">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { 
                  onNavigate(link.view); 
                  setIsMobileMenuOpen(false); 
                  window.scrollTo(0,0);
                }}
                className={`text-base font-medium p-3 rounded-2xl text-left transition-colors ${
                  currentView === link.view ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="h-px bg-slate-100 my-1"></div>
            <button 
              onClick={() => { onAdminLogin(); setIsMobileMenuOpen(false); }} 
              className="w-full py-3 bg-slate-900 text-white rounded-2xl font-medium flex items-center justify-center gap-2"
            >
              <LayoutGrid size={18} /> Access ERP Portal
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
