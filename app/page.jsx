'use client';
import Landing from './components/Landing';
import About from './components/About';
import Services from './components/Services';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <Landing />
      <About />
      <Services />
      <Workshops />
      <Testimonials />
      <Contact />
    </main>
  );
}
