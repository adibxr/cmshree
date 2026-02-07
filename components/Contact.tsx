import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center animate-fade-in-up bg-slate-50/50">
      <div className="max-w-4xl w-full px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">Get In Touch</h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Have questions about admissions or academics? We are here to help.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* Contact Info Sidebar */}
            <div className="bg-slate-900 p-10 text-white flex flex-col justify-between">
              <div className="space-y-8">
                 <div>
                   <h3 className="text-lg font-bold mb-1">Contact Info</h3>
                   <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
                 </div>
                 
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Phone</p>
                        <a href="tel:+911125080096" className="font-medium hover:text-blue-400 transition-colors">+91 11 2508 0096</a>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Email</p>
                        <a href="mailto:devadibxr@gmail.com" className="font-medium hover:text-blue-400 transition-colors">devadibxr@gmail.com</a>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Location</p>
                        <p className="font-medium text-sm leading-relaxed">Sector 5, Dwarka, New Delhi - 110075</p>
                      </div>
                   </div>
                 </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                 <p className="text-xs text-slate-400">Monday - Saturday</p>
                 <p className="text-sm font-medium">8:00 AM - 2:30 PM</p>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:col-span-2 p-10 md:p-12 bg-white">
              <form 
                action="https://usebasin.com/f/00e6d242c065" 
                method="POST"
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full py-2 bg-transparent border-b-2 border-slate-100 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full py-2 bg-transparent border-b-2 border-slate-100 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full py-2 bg-transparent border-b-2 border-slate-100 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-blue-600 transition-colors">Message</label>
                  <textarea 
                    name="message"
                    rows={3}
                    required
                    className="w-full py-2 bg-transparent border-b-2 border-slate-100 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;