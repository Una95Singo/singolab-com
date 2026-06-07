import { LINKS } from '@/lib/site';

const BARS = [
  [10, 32, 44],
  [17, 24, 52],
  [24, 16, 60],
  [31, 34, 42],
  [38, 12, 64],
  [45, 28, 48],
  [52, 18, 58],
  [59, 30, 46],
  [66, 22, 54],
];

export default function Music() {
  return (
    <section className="band" id="music" data-screen-label="Music">
      <div className="wrap seccol">
        <div className="sec-kick reveal">
          <span className="num">03</span> — Music
          <span className="lede">Low end, on the weekends.</span>
        </div>
        <div>
          <h2 className="sec-title reveal">I play bass in Rx Sneakers.</h2>
          <div className="music-row reveal">
            <a
              className="album"
              href={LINKS.appleMusic}
              target="_blank"
              rel="noopener"
            >
              <span className="album-art">
                <svg
                  viewBox="0 0 76 76"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <g stroke="#4272FF" strokeWidth="2.6" strokeLinecap="round">
                    {BARS.map(([x, y1, y2]) => (
                      <line key={x} x1={x} y1={y1} x2={x} y2={y2} />
                    ))}
                  </g>
                </svg>
              </span>
              <span className="album-meta">
                <span className="album-band">Rx Sneakers</span>
                <span className="album-sub">Listen on Apple Music ↗</span>
              </span>
            </a>
            <p className="music-note">
              The counterweight to all the screen time — four strings, a lot of
              repetition, and the one place a wrong note still feels like a real
              mistake.{' '}
              <span className="soft">
                Same instinct as the rest of this: make something, share it, keep
                time.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
