import React, { useState } from 'react';
import { Sparkles, FileText, Send, Calendar, Users, Settings } from 'lucide-react';
import { generateSchoolAnnouncement } from '../services/geminiService';

const AdminDashboard: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState<'formal' | 'cheerful' | 'urgent'>('formal');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    const result = await generateSchoolAnnouncement(topic, tone);
    setGeneratedContent(result);
    setIsGenerating(false);
  };

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
           <p className="text-gray-500 mt-1">Manage school notices and generated content</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm">
             <Settings size={16}/> Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Quick Stats */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Users size={24} /></div>
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <p className="text-2xl font-bold text-gray-800">1,245</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-xl"><Calendar size={24} /></div>
              <div>
                <p className="text-sm text-gray-500">Upcoming Events</p>
                <p className="text-2xl font-bold text-gray-800">4</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl"><FileText size={24} /></div>
              <div>
                <p className="text-sm text-gray-500">Notices Issued</p>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
           </div>
        </div>

        {/* AI Generator */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-6 text-primary-600">
              <Sparkles size={20} />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AI Announcement Generator</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Topic</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Annual Sports Day, Parent Teacher Meeting..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tone</label>
                <div className="flex gap-3">
                  {(['formal', 'cheerful', 'urgent'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                        tone === t
                          ? 'bg-primary-50 text-primary-700 border-primary-200'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !topic}
                className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
              >
                {isGenerating ? 'Generating...' : <><Sparkles size={18} /> Generate Draft</>}
              </button>
            </div>
          </div>
        </div>

        {/* Preview / Result */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Draft Preview</h3>
            {generatedContent ? (
              <div className="prose prose-sm dark:prose-invert">
                 <div className="whitespace-pre-wrap p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700 min-h-[200px]">
                   {generatedContent}
                 </div>
                 <div className="mt-4 flex gap-2">
                   <button className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">Publish</button>
                   <button 
                     onClick={() => {navigator.clipboard.writeText(generatedContent)}}
                     className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium"
                   >
                     Copy
                   </button>
                 </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-gray-400 text-center">
                <FileText size={48} className="mb-2 opacity-20" />
                <p className="text-sm">Generated content will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
