import type { Metadata } from 'next';
import Link from 'next/link';
import PrintButton from '../components/PrintButton';
import { EMAIL, LINKS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Unarine Singo — Résumé',
  description:
    'Résumé — Unarine “Una” Singo, advisor and builder re-skilling into AI engineering.',
  alternates: { canonical: '/resume' },
};

export default function Resume() {
  return (
    <div className="resume">
      <div className="wrap">
        <div className="topbar">
          <Link className="back" href="/">
            ← singolab
          </Link>
          <div className="actions">
            <PrintButton />
            <a className="btn" href={`mailto:${EMAIL}`}>
              Email
            </a>
          </div>
        </div>

        <div className="head">
          {/* Draft — Experience entries are PLACEHOLDERS (see handoff). */}
          <div className="draftnote">Draft — swap in your real details</div>
          <h1>Unarine Singo</h1>
          <p className="role">
            Advisor and builder working at the intersection of consulting,
            technology, and energy — currently re-skilling into a forward-deployed
            AI engineer, and writing about all of it in public.
          </p>
        </div>

        <hr />

        <div className="grid">
          <aside>
            <div className="rail">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <a href={LINKS.linkedin} target="_blank" rel="noopener">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href={LINKS.github} target="_blank" rel="noopener">
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href={LINKS.substack} target="_blank" rel="noopener">
                    Substack ↗
                  </a>
                </li>
              </ul>
            </div>
            <div className="rail">
              <h3>Focus</h3>
              <div className="chips">
                <span className="chip">AI / ML</span>
                <span className="chip">Strategy</span>
                <span className="chip">Energy</span>
                <span className="chip">Digital</span>
                <span className="chip">Data Science</span>
              </div>
            </div>
            <div className="rail">
              <h3>Tools</h3>
              <div className="chips">
                <span className="chip">Python</span>
                <span className="chip">PyTorch</span>
                <span className="chip">SQL</span>
                <span className="chip">TypeScript</span>
                <span className="chip">Modal</span>
              </div>
            </div>
            <div className="rail">
              <h3>Also</h3>
              <ul>
                <li>Bass — Rx Sneakers</li>
                <li>Mandela Rhodes Scholar</li>
                <li>Based in New York</li>
              </ul>
            </div>
          </aside>

          <main>
            <section className="blk">
              <h2>Summary</h2>
              <p className="lead">
                A strategist learning to build. I spend my days advising on
                technology, digital, and energy, and my nights teaching myself to
                ship with AI — small models, real tools, and a Substack that
                documents the whole messy process.
              </p>
            </section>

            <section className="blk">
              <h2>Experience</h2>
              <div className="item">
                <div className="r1">
                  <span className="ititle">
                    Advisor — Strategy &amp; Technology
                  </span>
                  <span className="when">20XX — Present</span>
                </div>
                <div className="org ph">[Firm] · New York</div>
                <ul>
                  <li className="ph">
                    [Lead client work across technology, digital, and energy.]
                  </li>
                  <li className="ph">
                    [Add a signature result — scope, impact, the number you&apos;re
                    proud of.]
                  </li>
                  <li className="ph">
                    [Add a cross-functional or leadership highlight.]
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="r1">
                  <span className="ititle">[Prior role]</span>
                  <span className="when">20XX — 20XX</span>
                </div>
                <div className="org ph">[Organisation]</div>
                <ul>
                  <li className="ph">
                    [Two lines on what you owned and what changed because of it.]
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="r1">
                  <span className="ititle">[Early role]</span>
                  <span className="when">20XX — 20XX</span>
                </div>
                <div className="org ph">[Organisation]</div>
                <ul>
                  <li className="ph">[One line — where it started.]</li>
                </ul>
              </div>
            </section>

            <section className="blk">
              <h2>Education</h2>
              <div className="item">
                <div className="r1">
                  <span className="ititle">University of Cape Town</span>
                  <span className="when">20XX</span>
                </div>
                <div className="org">
                  BSc — Statistics &amp; Data Science{' '}
                  <span className="ph">[confirm degree]</span>
                </div>
              </div>
              <div className="item">
                <div className="r1">
                  <span className="ititle">Mandela Rhodes Scholarship</span>
                  <span className="when">20XX</span>
                </div>
                <div className="org">Scholar — leadership &amp; reconciliation</div>
              </div>
            </section>

            <section className="blk">
              <h2>Writing</h2>
              <div className="item">
                <div className="r1">
                  <span className="ititle">Learning AI Out Loud</span>
                  <span className="when">Substack</span>
                </div>
                <div className="org">
                  <a href={LINKS.substack} target="_blank" rel="noopener">
                    usingo.substack.com ↗
                  </a>
                </div>
                <ul>
                  <li>
                    Building Otis, a small language model that writes the blues —
                    post by post.
                  </li>
                  <li>
                    Field notes on re-skilling from strategy into AI engineering.
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </div>

        <footer className="resume-foot">
          <span>© 2026 Unarine Singo</span>
          <span>Set in Newsreader &amp; Literata</span>
        </footer>
      </div>
    </div>
  );
}
