
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import RTI from './components/RTI';
import MandatoryDisclosure from './components/MandatoryDisclosure';
import AdminModal from './components/AdminModal';
import ERPDashboard from './components/ERPDashboard';
import ChatWidget from './components/ChatWidget';
import { UserRole, View } from './types';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.GUEST);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'rti':
        return <RTI />;
      case 'disclosure':
        return <MandatoryDisclosure />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* Header and Footer are hidden in ERP Admin Mode */}
      {userRole !== UserRole.ADMIN && (
        <Header 
          currentView={currentView}
          onNavigate={setCurrentView}
          onAdminLogin={() => setIsLoginModalOpen(true)} 
          userRole={userRole}
          onLogout={() => setUserRole(UserRole.GUEST)}
        />
      )}
      
      <main className="flex-grow">
        {userRole === UserRole.ADMIN ? (
          <ERPDashboard onLogout={() => setUserRole(UserRole.GUEST)} />
        ) : (
          renderView()
        )}
      </main>

      {userRole !== UserRole.ADMIN && <Footer onNavigate={setCurrentView} />}
      
      <ChatWidget />
      
      <AdminModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLoginSuccess={() => setUserRole(UserRole.ADMIN)} 
      />
    </div>
  );
};

export default App;