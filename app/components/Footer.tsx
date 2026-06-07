import Link from 'next/link';
import { EMAIL, LINKS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site" data-screen-label="Footer">
      <div className="wrap">
        <h2 className="foot-h reveal">
          Let&apos;s make something — <a href={`mailto:${EMAIL}`}>say hello</a>.
        </h2>
        <p className="foot-sub reveal">
          Always up for a conversation about AI, consulting, energy, or music.
        </p>
        <div className="foot-links reveal">
          <a href={`mailto:${EMAIL}`}>
            Email <span className="ar">↗</span>
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener">
            LinkedIn <span className="ar">↗</span>
          </a>
          <a href={LINKS.substack} target="_blank" rel="noopener">
            Substack <span className="ar">↗</span>
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener">
            GitHub <span className="ar">↗</span>
          </a>
          <Link href="/resume">
            Résumé <span className="ar">↗</span>
          </Link>
          <a href={LINKS.appleMusic} target="_blank" rel="noopener">
            Rx Sneakers <span className="ar">↗</span>
          </a>
        </div>
        <hr className="rule" style={{ marginBottom: 24 }} />
        <div className="colophon">
          <span>Set in Newsreader &amp; Literata · the signal drawn in Canvas</span>
          <span>© 2026 Unarine Singo · Built in New York</span>
        </div>
      </div>
    </footer>
  );
}
