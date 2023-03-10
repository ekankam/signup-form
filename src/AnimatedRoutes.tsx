import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import Success from './Success';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <main className="bg-[url('/images/bg-intro-mobile.png')] lg:bg-[url('/images/bg-intro-desktop.png')] px-6 lg:px-0">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
    </AnimatePresence>
  );
}
