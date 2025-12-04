import React, { useState } from 'react';
import { Settings, ZoomIn, ZoomOut, Eye, Type, Palette } from 'lucide-react';
import { AccessibilityState } from '../types';

interface Props {
  settings: AccessibilityState;
  updateSettings: (newSettings: Partial<AccessibilityState>) => void;
}

const AccessibilityPanel: React.FC<Props> = ({ settings, updateSettings }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-end gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-600 text-white p-3 rounded-l-xl shadow-lg hover:bg-primary-700 transition-all focus:outline-none focus:ring-4 focus:ring-accent-500"
        aria-label="Accessibility Tools"
      >
        <Settings size={24} />
      </button>

      {isOpen && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 w-64 animate-fade-in-right">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Eye size={18} /> Accessibility
          </h3>

          <div className="space-y-4">
            {/* Font Size */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">Text Size</span>
              <div className="flex gap-2">
                <button
                  onClick={() => updateSettings({ fontSize: Math.max(1, settings.fontSize - 0.1) })}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="Decrease font size"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-sm font-mono w-8 text-center py-2">{Math.round(settings.fontSize * 100)}%</span>
                <button
                  onClick={() => updateSettings({ fontSize: Math.min(2, settings.fontSize + 0.1) })}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="Increase font size"
                >
                  <ZoomIn size={16} />
                </button>
              </div>
            </div>

            {/* Contrast */}
            <button
              onClick={() => updateSettings({ highContrast: !settings.highContrast })}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                settings.highContrast
                  ? 'bg-yellow-100 text-yellow-800 border-yellow-300 border'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              <span className="text-sm flex items-center gap-2"><Palette size={16} /> High Contrast</span>
              <div className={`w-4 h-4 rounded-full border ${settings.highContrast ? 'bg-yellow-500 border-yellow-600' : 'bg-white border-gray-400'}`}></div>
            </button>

            {/* Grayscale */}
            <button
              onClick={() => updateSettings({ grayscale: !settings.grayscale })}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                settings.grayscale
                  ? 'bg-gray-200 text-gray-900 border-gray-400 border'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              <span className="text-sm flex items-center gap-2"><Eye size={16} /> Grayscale</span>
              <div className={`w-4 h-4 rounded-full border ${settings.grayscale ? 'bg-gray-600 border-gray-800' : 'bg-white border-gray-400'}`}></div>
            </button>

             {/* Readable Font */}
             <button
              onClick={() => updateSettings({ readableFont: !settings.readableFont })}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                settings.readableFont
                  ? 'bg-blue-100 text-blue-900 border-blue-300 border'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              <span className="text-sm flex items-center gap-2"><Type size={16} /> Readable Font</span>
              <div className={`w-4 h-4 rounded-full border ${settings.readableFont ? 'bg-blue-500 border-blue-600' : 'bg-white border-gray-400'}`}></div>
            </button>

            <button
              onClick={() => updateSettings({ fontSize: 1, highContrast: false, grayscale: false, readableFont: false })}
              className="w-full mt-2 text-xs text-red-500 hover:text-red-600 underline text-center"
            >
              Reset Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityPanel;
