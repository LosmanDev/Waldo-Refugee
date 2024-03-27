import Landing from './components/Landing';
import About from './components/About';
import Services from './components/Services';
import Workshops from './components/Workshops';

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Services />
      <Workshops />
    </main>
  );
}
