
import React, { useState } from 'react';
import { Send, Upload, FileText, Info } from 'lucide-react';

const RTI: React.FC = () => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-2xl mb-4 text-slate-900">
             <FileText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif mb-4">Right to Information</h1>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Submit your application under the Right to Information Act, 2005. 
            Please provide accurate details to facilitate a timely response.
          </p>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40">
           
           <div className="flex items-start gap-4 mb-8 p-4 bg-blue-50 text-blue-800 rounded-2xl text-sm border border-blue-100">
              <Info size={20} className="shrink-0 mt-0.5" />
              <p>
                <strong>Note:</strong> Citizens can seek information regarding the activities of the school. 
                Please ensure your query is specific. You may attach supporting documents or photos if necessary.
              </p>
           </div>

           <form 
             action="https://usebasin.com/f/00e6d242c065" 
             method="POST"
             encType="multipart/form-data"
             className="space-y-8"
           >
             {/* Hidden field to identify the form type */}
             <input type="hidden" name="subject" value="New RTI Request" />

             <div className="space-y-6">
               <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">Applicant Details</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-slate-900 transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full py-2 bg-transparent border-b-2 border-slate-200 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all font-medium"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-slate-900 transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full py-2 bg-transparent border-b-2 border-slate-200 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all font-medium"
                      placeholder="email@example.com"
                    />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-slate-900 transition-colors">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="w-full py-2 bg-transparent border-b-2 border-slate-200 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all font-medium"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-slate-900 transition-colors">Postal Address</label>
                    <input 
                      type="text" 
                      name="address"
                      required
                      className="w-full py-2 bg-transparent border-b-2 border-slate-200 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all font-medium"
                      placeholder="Your mailing address"
                    />
                  </div>
               </div>
             </div>

             <div className="space-y-6 pt-6">
               <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">Request Details</h3>
               
               <div className="group">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 group-focus-within:text-slate-900 transition-colors">Particulars of Information Required</label>
                  <textarea 
                    name="rti_query"
                    rows={6}
                    required
                    className="w-full p-4 bg-white rounded-xl border-2 border-slate-200 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-all resize-none shadow-sm"
                    placeholder="Please specify the details of the information sought..."
                  ></textarea>
                  <p className="text-xs text-slate-400 mt-2 text-right">Max 500 words</p>
               </div>

               {/* File Upload Section */}
               <div className="group">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Attach Photos / Documents</label>
                  <div className="relative">
                    <input 
                      type="file" 
                      name="attachment"
                      id="file-upload"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full p-6 bg-white border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-slate-400 transition-all group-focus-within:border-slate-900">
                       <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-3">
                         <Upload size={20} />
                       </div>
                       {fileName ? (
                         <p className="font-bold text-slate-900 flex items-center gap-2">
                           <FileText size={16} className="text-blue-600" /> {fileName}
                         </p>
                       ) : (
                         <>
                            <p className="font-medium text-slate-700">Click or drag to upload photos</p>
                            <p className="text-xs text-slate-400 mt-1">Supports JPG, PNG, PDF (Max 5MB)</p>
                         </>
                       )}
                    </div>
                  </div>
               </div>
             </div>

             <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Submit RTI Application <Send size={18} />
                </button>
             </div>
           </form>
        </div>
      </div>
    </div>
  );
};

export default RTI;
