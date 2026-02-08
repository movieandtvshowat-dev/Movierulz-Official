import React, { useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Scroll to top component handles navigation state
const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  
  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0);
    
    // Backup scroll after short delay to ensure DOM update has processed
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, search]);
  
  return null;
};

// Error Boundary to catch render errors
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl font-bold text-miraj-gold mb-4">Something went wrong.</h1>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-miraj-gold text-black rounded font-bold"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-miraj-black text-white font-sans selection:bg-miraj-gold selection:text-black">
            <Navbar />
            <main className="flex-grow w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Home />} />
                <Route path="/tv" element={<Home />} />
                <Route path="/sports" element={<Home />} />
                <Route path="/tv_live" element={<Home />} />
                
                {/* Support Pages */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* Separate Page for Video Player */}
                <Route path="/watch/:type/:id" element={<Watch />} />
                
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;