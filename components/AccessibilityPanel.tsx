import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Eye, Type, Palette, RotateCcw, Link } from 'lucide-react';
import { AccessibilityState } from '../types';

interface Props {
  settings: AccessibilityState;
  updateSettings: (newSettings: Partial<AccessibilityState>) => void;
}

const AccessibilityPanel: React.FC<Props> = ({ settings, updateSettings }) => {
  const [isOpen, setIsOpen] = useState(false);

  const resetAll = () => {
    updateSettings({ 
      fontSize: 1, 
      highContrast: false, 
      grayscale: false, 
      readableFont: false, 
      highlightLinks: false 
    });
  };

  return (
    <div className="fixed left-4 bottom-6 z-50 flex flex-col items-start gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-slate-900 p-3.5 rounded-full shadow-2xl hover:bg-slate-50 border border-slate-200 transition-all focus:ring-4 focus:ring-blue-400 group relative"
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
      >
        <Eye size={24} className={isOpen ? 'text-blue-600' : 'text-slate-600'} />
        {Object.values(settings).some(v => v !== false && v !== 1) && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></span>
        )}
      </button>

      {isOpen && (
        <div 
          className="bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 w-80 animate-fade-in-up"
          role="dialog"
          aria-label="Accessibility Tools"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-slate-900 text-lg leading-none">Accessibility</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Enhance browsing</p>
            </div>
            <button 
              onClick={resetAll}
              className="p-2 text-slate-400 hover:text-red-500 transition-colors bg-slate-50 rounded-xl"
              title="Reset all settings"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          <div className="space-y-6">
            {/* Font Size Scaling */}
            <div className="space-y-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Visual Scale</span>
              <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                <button
                  onClick={() => updateSettings({ fontSize: Math.max(0.7, settings.fontSize - 0.1) })}
                  className="p-3 hover:bg-white rounded-xl transition-all shadow-sm disabled:opacity-30"
                  aria-label="Decrease text size"
                  disabled={settings.fontSize <= 0.7}
                >
                  <ZoomOut size={18} />
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-black text-slate-900">{Math.round(settings.fontSize * 100)}%</span>
                  <span className="text-[8px] text-slate-400 uppercase font-bold tracking-tighter">Current</span>
                </div>
                <button
                  onClick={() => updateSettings({ fontSize: Math.min(1.6, settings.fontSize + 0.1) })}
                  className="p-3 hover:bg-white rounded-xl transition-all shadow-sm disabled:opacity-30"
                  aria-label="Increase text size"
                  disabled={settings.fontSize >= 1.6}
                >
                  <ZoomIn size={18} />
                </button>
              </div>
            </div>

            {/* Feature Toggles */}
            <div className="grid grid-cols-1 gap-2">
              {[
                { 
                  id: 'highContrast', 
                  label: 'High Contrast', 
                  icon: Palette, 
                  active: settings.highContrast 
                },
                { 
                  id: 'grayscale', 
                  label: 'Monochrome', 
                  icon: Eye, 
                  active: settings.grayscale 
                },
                { 
                  id: 'readableFont', 
                  label: 'Simple Font', 
                  icon: Type, 
                  active: settings.readableFont 
                },
                { 
                  id: 'highlightLinks', 
                  label: 'Highlight Links', 
                  icon: Link, 
                  active: settings.highlightLinks 
                },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => updateSettings({ [item.id]: !item.active })}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all group ${
                    item.active 
                      ? 'bg-slate-900 border-slate-900 text-white shadow-lg' 
                      : 'bg-white border-slate-100 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={item.active ? 'text-blue-400' : 'text-slate-400'} />
                    <span className="text-sm font-bold tracking-tight">{item.label}</span>
                  </div>
                  <div className={`w-5 h-2.5 rounded-full relative transition-colors ${item.active ? 'bg-blue-500' : 'bg-slate-200'}`}>
                    <div className={`absolute top-0.5 bottom-0.5 w-1.5 h-1.5 rounded-full bg-white transition-all ${item.active ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <p className="mt-6 text-[9px] text-center font-bold text-slate-400 uppercase tracking-widest">
            Accessibility Optimized
          </p>
        </div>
      )}
    </div>
  );
};

export default AccessibilityPanel;