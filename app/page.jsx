import Landing from './components/Landing';
import About from './components/About';
import Services from './components/Services';
import Workshops from './components/Workshops';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
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
