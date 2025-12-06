
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
import { UserRole, View } from './types';

// Skeleton Loader Component
const WebsiteSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header Skeleton */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-4xl h-16 bg-slate-100 rounded-full animate-pulse border border-slate-200"></div>
      </div>

      {/* Hero Skeleton */}
      <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
           <div className="h-8 w-64 bg-slate-100 rounded-full animate-pulse"></div>
           <div className="h-20 w-3/4 max-w-2xl bg-slate-100 rounded-3xl animate-pulse"></div>
           <div className="h-6 w-1/2 max-w-xl bg-slate-50 rounded-xl animate-pulse"></div>
           <div className="h-14 w-48 bg-slate-900/10 rounded-full animate-pulse mt-4"></div>
           
           {/* Video/Image Skeleton */}
           <div className="w-full max-w-5xl h-[400px] bg-slate-50 rounded-[2.5rem] mt-12 animate-pulse shadow-xl border border-slate-100"></div>
        </div>
      </section>

      {/* Grid Skeleton */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-slate-50 rounded-3xl animate-pulse border border-slate-100"></div>
            ))}
         </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<UserRole>(UserRole.GUEST);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Define valid routes for deep linking
  const getInitialView = (): View => {
    const path = window.location.pathname;
    
    // Remove trailing slash if present
    const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');

    switch (cleanPath) {
      case '/':
      case '/index.html':
        return 'home';
      case '/about':
        return 'about';
      case '/contact':
        return 'contact';
      case '/privacy':
        return 'privacy';
      case '/rti':
        return 'rti';
      case '/disclosure':
        return 'disclosure';
      case '/handbook':
        return 'handbook';
      case '/bug-report':
        return 'bug_report';
      default:
        return 'not_found';
    }
  };

  useEffect(() => {
    // Set initial view based on URL
    const initialView = getInitialView();
    setCurrentView(initialView);

    // Simulate initial resource loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle Navigation with URL updates
  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);

    // Update URL history without reloading
    let path = '/';
    switch (view) {
      case 'home': path = '/'; break;
      case 'about': path = '/about'; break;
      case 'contact': path = '/contact'; break;
      case 'privacy': path = '/privacy'; break;
      case 'rti': path = '/rti'; break;
      case 'disclosure': path = '/disclosure'; break;
      case 'handbook': path = '/handbook'; break;
      case 'bug_report': path = '/bug-report'; break;
      case 'not_found': path = '/404'; break;
      default: path = '/';
    }
    
    // Use pushState to update URL
    window.history.pushState({}, '', path);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
       setCurrentView(getInitialView());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
      case 'handbook':
        return <StudentHandbook />;
      case 'bug_report':
        return <DeveloperProfile />;
      case 'not_found':
        return <NotFound onNavigate={handleNavigate} />;
      default:
        return <NotFound onNavigate={handleNavigate} />;
    }
  };

  if (loading) {
    return <WebsiteSkeleton />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans animate-fade-in-up">
      {/* Header and Footer are hidden in ERP Admin Mode or 404 page */}
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
      
      {/* Chat is available on all pages except ERP */}
      {userRole !== UserRole.ADMIN && <ChatWidget />}
      
      <AdminModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLoginSuccess={() => setUserRole(UserRole.ADMIN)} 
      />
    </div>
  );
};

export default App;
