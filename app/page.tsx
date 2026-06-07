import Masthead from './components/Masthead';
import Reveal from './components/Reveal';
import Hero from './components/Hero';
import Writing from './components/Writing';
import Projects from './components/Projects';
import Music from './components/Music';
import NewYork from './components/NewYork';
import Now from './components/Now';
import SignalDivider from './components/SignalDivider';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Masthead />
      <Reveal />
      <main id="top">
        <Hero />
        <Writing />
        <Projects />
        <Music />
        <NewYork />
        <Now />
        <SignalDivider />
        <Footer />
      </main>
    </>
  );
}
