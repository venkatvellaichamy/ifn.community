import { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
// import { SocialProof } from './components/SocialProof';
import { ValueProps } from './components/ValueProps';
import { HowItWorks } from './components/HowItWorks';

// Lazy load components that are not immediately visible
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const EventsPreview = lazy(() => import('./components/EventsPreview').then(module => ({ default: module.EventsPreview })));
const Resources = lazy(() => import('./components/Resources').then(module => ({ default: module.Resources })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const FinalCTA = lazy(() => import('./components/FinalCTA').then(module => ({ default: module.FinalCTA })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const JoinModal = lazy(() => import('./components/JoinModal').then(module => ({ default: module.JoinModal })));

function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onJoinClick={() => setIsJoinModalOpen(true)} />
      <main>
        <Hero onJoinClick={() => setIsJoinModalOpen(true)} />
        {/* <SocialProof /> */}
        <ValueProps />
        <HowItWorks />

        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <Testimonials />
          <EventsPreview />
          <Resources />
          <FAQ />
          <FinalCTA onJoinClick={() => setIsJoinModalOpen(true)} />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-24" />}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
      </Suspense>
    </div>
  );
}

export default App;
