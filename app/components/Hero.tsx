import HeroSignal from './HeroSignal';

export default function Hero() {
  return (
    <section className="hero" data-screen-label="Hero">
      <div className="gridbg" aria-hidden="true" />
      <HeroSignal />
      <div className="wrap hero-in">
        <div className="kicker reveal">Field Notes — Nº 01</div>
        <h1 className="reveal">Una Singo</h1>
        <p className="standfirst reveal">
          Advisor, musician and husband — upskilling in public, and sharing every
          step of it with the world.
        </p>
        <div className="hero-now reveal">
          <span className="dot" /> Currently — teaching{' '}
          <a href="#projects">Otis</a> to write the blues, in New York.
        </div>
      </div>
    </section>
  );
}
