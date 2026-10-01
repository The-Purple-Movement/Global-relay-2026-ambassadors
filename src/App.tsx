import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
// import { HeroTransition } from './components/HeroTransition';
import { FounderMessage } from './components/FounderMessage';
import { AmbassadorRole } from './components/AmbassadorRole';
import { AmbassadorKit } from './components/AmbassadorKit';
import { Community } from './components/Community';
import { AmbassadorTasks } from './components/AmbassadorTasks';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AmbassadorWall } from './components/AmbassadorWall';
import { JoinRelayModal } from './components/Modals/JoinRelayModal';
import { UploadPhotoModal } from './components/Modals/UploadPhotoModal';
import { KitPreviewModal } from './components/Modals/KitPreviewModal';
import { VideoModal } from './components/Modals/VideoModal';
import { CustomCursor } from './components/CustomCursor';
import { INITIAL_AMBASSADORS, type Ambassador } from './data/ambassadorsData';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'ambassadors'>('home');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isKitModalOpen, setIsKitModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [ambassadorsList, setAmbassadorsList] = useState<Ambassador[]>(INITIAL_AMBASSADORS);

  // Sync view with URL hash/path
  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.pathname.includes('ambassadors') || window.location.hash === '#ambassadors') {
        setCurrentView('ambassadors');
      } else {
        setCurrentView('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (view: 'home' | 'ambassadors') => {
    setCurrentView(view);
    if (view === 'ambassadors') {
      window.location.hash = 'ambassadors';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAddAmbassador = (newAmbassador: Ambassador) => {
    setAmbassadorsList((prev) => [newAmbassador, ...prev]);
  };

  return (
    <div className="min-h-screen bg-mist-brand text-dark-brand font-sans selection:bg-powder-brand/30 selection:text-dark-brand relative">
      {/* Subtle Desktop Cursor */}
      <CustomCursor />

      {/* Global Persistent Header */}
      <Header
        onJoinClick={() => setIsJoinModalOpen(true)}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main Content View Switcher */}
      {currentView === 'home' ? (
        <main>
          {/* 01 — ENTER : Hero */}
          <Hero onJoinClick={() => setIsJoinModalOpen(true)} />

          {/* Crossfade Transition & Extended Welcome */}
          {/* <HeroTransition /> */}

          {/* 02 — LISTEN : Founder Message */}
          <FounderMessage onOpenVideoModal={() => setIsVideoModalOpen(true)} />

          {/* 03 — CARRY : Your Role */}
          <AmbassadorRole />

          {/* 04 — EQUIP : Ambassador Kit List */}
          <AmbassadorKit onOpenKitModal={() => setIsKitModalOpen(true)} />

          {/* 06 — CONNECT : Global Ambassador Community */}
          <Community onJoinWhatsApp={() => setIsJoinModalOpen(true)} />

          {/* 07 — ACT : Vertical Onboarding & Ambassadorship Tasks Timeline */}
          <AmbassadorTasks />

          {/* 08 — REACH OUT : Minimal Contact Section */}
          <ContactSection />
        </main>
      ) : (
        <main>
          {/* Separate Dedicated Page : Wall of Ambassadors */}
          <AmbassadorWall
            onBackToHome={() => handleNavigate('home')}
            onOpenUploadModal={() => setIsUploadModalOpen(true)}
            ambassadorsList={ambassadorsList}
          />
        </main>
      )}

      {/* 09 — CLOSE : Dark Footer */}
      <Footer
        onNavigate={handleNavigate}
        onJoinClick={() => setIsJoinModalOpen(true)}
      />

      {/* Interactive Modals */}
      <JoinRelayModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <UploadPhotoModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onAddAmbassador={handleAddAmbassador}
      />

      <KitPreviewModal
        isOpen={isKitModalOpen}
        onClose={() => setIsKitModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
export default App;
