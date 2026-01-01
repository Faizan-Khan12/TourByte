import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import HomePackages from './components/HomePackages';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Lazy load non-critical route components for faster initial load
const Packages = lazy(() => import('./components/Packages'));
const PackageDetails = lazy(() => import('./components/PackageDetails'));
const DestinationsPage = lazy(() => import('./components/DestinationsPage'));
const DestinationDetails = lazy(() => import('./components/DestinationDetails'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));
const Terms = lazy(() => import('./components/Terms'));
const Privacy = lazy(() => import('./components/Privacy'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-emerald-950">
    <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="bg-emerald-950 min-h-screen">
      <Navbar onOpenModal={openModal} />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero onOpenModal={openModal} />
              <Destinations />
              <HomePackages />
              <WhyUs />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/packages" element={<Packages onOpenModal={openModal} />} />
          <Route path="/packages/:id" element={<PackageDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
