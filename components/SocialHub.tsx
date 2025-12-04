
import React from 'react';
import { Instagram, ArrowUpRight, Youtube } from 'lucide-react';

const SocialHub: React.FC = () => {

  return (
    <div className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Trending Social Media</h2>
             <p className="text-slate-500">Stay connected with the latest updates from our campus.</p>
          </div>
          <div className="flex gap-2">
             <div className="h-1.5 w-12 bg-slate-900 rounded-full"></div>
             <div className="h-1.5 w-4 bg-slate-200 rounded-full"></div>
             <div className="h-1.5 w-4 bg-slate-200 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* YouTube - Featured Video / Subscribe */}
          <div className="bg-gradient-to-br from-red-600 via-red-500 to-white p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[500px]">
             <div className="bg-white rounded-xl h-full flex flex-col overflow-hidden relative">
                {/* Header */}
                 <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white z-10">
                   <div className="flex items-center gap-3">
                      <div className="bg-red-600 text-white p-1.5 rounded-full">
                         <Youtube size={20} fill="white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-none">ASOSE RPVV Sec-5</p>
                        <p className="text-[10px] text-slate-500">Official Channel</p>
                      </div>
                   </div>
                   <button className="bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                     Subscribe
                   </button>
                </div>
                
                {/* Content */}
                <div className="flex-grow bg-slate-50 relative">
                   <iframe 
                     width="100%" 
                     height="100%" 
                     src="https://www.youtube.com/embed/videoseries?list=UU7-b12gH_X9G_9_8_0_1_2&index=0" 
                     title="YouTube video player" 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                     allowFullScreen
                     className="w-full h-full"
                   ></iframe>
                </div>
                 
                {/* Footer */}
                <div className="p-4 border-t border-slate-100 bg-white">
                   <a 
                     href="https://www.youtube.com/@asose.rpvvsec5official" 
                     target="_blank" 
                     rel="noreferrer"
                     className="block w-full text-center py-2.5 bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-red-600 font-bold text-xs rounded-lg transition-colors border border-slate-200 hover:border-red-200"
                   >
                     Visit Channel
                   </a>
                </div>
             </div>
          </div>

          {/* Instagram - Styled Card */}
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 h-[500px] group">
             <div className="bg-white rounded-xl h-full flex flex-col overflow-hidden relative">
                {/* Header */}
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white z-10">
                   <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
                         <div className="bg-white p-0.5 rounded-full">
                           <img 
                             src="https://res.cloudinary.com/dyvtidqes/image/upload/v1764865536/image-removebg-preview_quovzh.png" 
                             alt="Insta" 
                             className="w-8 h-8 rounded-full object-cover"
                           />
                         </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 leading-none">cmshrisec5dwarka</p>
                        <p className="text-[10px] text-slate-500">CM SHRI School</p>
                      </div>
                   </div>
                   <Instagram size={20} className="text-slate-900"/>
                </div>

                {/* Simulated Grid Content */}
                <div className="flex-grow bg-slate-50 p-1 grid grid-cols-2 gap-1 overflow-hidden">
                   <div className="row-span-2 col-span-2 relative group overflow-hidden cursor-pointer" onClick={() => window.open('https://www.instagram.com/cmshrisec5dwarka/', '_blank')}>
                      <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Post" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <span className="text-white font-bold text-sm">View Post</span>
                      </div>
                   </div>
                   <div className="relative group overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1577896334614-2019041926b4?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Post" />
                   </div>
                   <div className="relative group overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Post" />
                   </div>
                </div>

                {/* CTA Button */}
                <div className="p-6 text-center bg-white border-t border-slate-100">
                   <h3 className="font-bold text-slate-900 mb-2">Follow us on Instagram</h3>
                   <p className="text-xs text-slate-500 mb-4">See photos and videos from our events.</p>
                   <a 
                     href="https://www.instagram.com/cmshrisec5dwarka/" 
                     target="_blank" 
                     rel="noreferrer"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity w-full justify-center"
                   >
                     View Profile <ArrowUpRight size={16} />
                   </a>
                </div>
             </div>
          </div>

          {/* Facebook - Highlighted Border */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-400 to-white p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-[500px] flex justify-center">
             <div className="bg-white rounded-xl h-full w-full overflow-hidden">
                 <iframe 
                   src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61553014147640&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                   width="100%" 
                   height="500" 
                   style={{border:'none', overflow:'hidden'}} 
                   scrolling="no" 
                   frameBorder="0" 
                   allowFullScreen={true} 
                   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                   title="Facebook Feed"
                   className="w-full h-full"
                 ></iframe>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SocialHub;
