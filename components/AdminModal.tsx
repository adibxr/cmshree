import React, { useState } from 'react';
import { X, ArrowRight, AlertCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

const AdminModal: React.FC<Props> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2025') { 
      onLoginSuccess();
      onClose();
      setPassword('');
      setError('');
    } else {
      setError('Incorrect access code.');
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-sm p-8 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-900"
        >
          <X size={20} />
        </button>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ERP Access</h2>
          <p className="text-gray-500 text-sm">Enter your staff access code to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
             <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-slate-900 focus:outline-none transition-all text-center text-lg tracking-widest font-bold placeholder:font-normal placeholder:tracking-normal placeholder:text-gray-400"
              placeholder="Enter Code"
              autoFocus
              maxLength={4}
            />
          </div>
          
          {error && (
            <div className="flex items-center gap-2 text-red-500 text-xs font-medium justify-center">
              <AlertCircle size={14} />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-slate-900 hover:bg-black text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group"
          >
            Access Portal <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminModal;