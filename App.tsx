import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import RTI from './components/RTI';
import MandatoryDisclosure from './components/MandatoryDisclosure';
import StudentHandbook from './components/StudentHandbook';
import DeveloperProfile from './components/DeveloperProfile';
import AdminModal from './components/AdminModal';
import ERPDashboard from './components/ERPDashboard';
import ChatWidget from './components/ChatWidget';
import NotFound from './components/NotFound';
import AccessibilityPanel from './components/AccessibilityPanel';
import { UserRole, View, AccessibilityState } from './types';

const WebsiteSkeleton: React.FC = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 space-y-6">
    <div className="w-16 h-16 bg-slate-100 rounded-full animate-pulse"></div>
    <div className="h-4 w-48 bg-slate-50 rounded animate-pulse"></div>
  </div>
);

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.GUEST);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [accessibility, setAccessibility] = useState<AccessibilityState>({
    fontSize: 1,
    highContrast: false,
    grayscale: false,
    readableFont: false,
    highlightLinks: false,
  });

  const updateAccessibility = (newSettings: Partial<AccessibilityState>) => {
    setAccessibility(prev => ({ ...prev, ...newSettings }));
  };

  // Synchronize font size with HTML element for proper REM scaling
  useEffect(() => {
    document.documentElement.style.fontSize = `${accessibility.fontSize * 100}%`;
  }, [accessibility.fontSize]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, '');
      const viewMap: Record<string, View> = {
        '': 'home',
        'about': 'about',
        'contact': 'contact',
        'privacy': 'privacy',
        'rti': 'rti',
        'disclosure': 'disclosure',
        'handbook': 'handbook',
        'bug-report': 'bug_report'
      };
      setCurrentView(viewMap[path] || 'not_found');
    };
    
    handlePopState();
    window.addEventListener('popstate', handlePopState);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      clearTimeout(timer);
    };
  }, []);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    const paths: Record<string, string> = {
      'home': '/', 'about': '/about', 'contact': '/contact',
      'privacy': '/privacy', 'rti': '/rti', 'disclosure': '/disclosure',
      'handbook': '/handbook', 'bug_report': '/bug-report', 'not_found': '/404'
    };
    window.history.pushState({}, '', paths[view]);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'privacy': return <PrivacyPolicy />;
      case 'rti': return <RTI />;
      case 'disclosure': return <MandatoryDisclosure />;
      case 'handbook': return <StudentHandbook />;
      case 'bug_report': return <DeveloperProfile />;
      default: return <NotFound onNavigate={handleNavigate} />;
    }
  };

  if (loading) return <WebsiteSkeleton />;

  const accessibilityClasses = [
    accessibility.highContrast ? 'dark-contrast' : '',
    accessibility.grayscale ? 'grayscale-mode' : '',
    accessibility.readableFont ? 'readable-font' : '',
    accessibility.highlightLinks ? 'highlight-links' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={`min-h-screen flex flex-col bg-white text-slate-900 transition-all duration-300 ${accessibilityClasses}`}>
      {userRole !== UserRole.ADMIN && currentView !== 'not_found' && (
        <Header 
          currentView={currentView}
          onNavigate={handleNavigate}
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

      {userRole !== UserRole.ADMIN && currentView !== 'not_found' && <Footer onNavigate={handleNavigate} />}
      
      {userRole !== UserRole.ADMIN && (
        <>
          <ChatWidget />
          <AccessibilityPanel settings={accessibility} updateSettings={updateAccessibility} />
        </>
      )}
      
      <AdminModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLoginSuccess={() => setUserRole(UserRole.ADMIN)} 
      />
    </div>
  );
};

export default App;