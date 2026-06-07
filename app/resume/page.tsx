import type { Metadata } from 'next';
import Link from 'next/link';
import { EMAIL, LINKS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Unarine Singo — Résumé',
  description:
    'Résumé — Unarine “Una” Singo, strategy & technology consultant re-skilling into AI engineering.',
  alternates: { canonical: '/resume' },
};

// Deliberately a LinkedIn-level public version — no phone, no personal email,
// no confidential client details. The full CV is available on request.
export default function Resume() {
  return (
    <div className="resume">
      <div className="wrap">
        <div className="topbar">
          <Link className="back" href="/">
            ← singolab
          </Link>
          <div className="actions">
            <a className="btn" href={`mailto:${EMAIL}`}>
              Email
            </a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="head">
          <h1>Unarine Singo</h1>
          <p className="role">
            Strategy and technology consultant — currently a Project Leader at the
            Boston Consulting Group in New York, with a background in data science
            and statistical finance. Re-skilling into AI engineering, and writing
            about it in public.
          </p>
          <p className="shortnote">
            The short version. For the full CV,{' '}
            <a href={`mailto:${EMAIL}`}>just ask</a>.
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
                <span className="chip">Strategy &amp; Tech</span>
                <span className="chip">Energy &amp; Utilities</span>
                <span className="chip">Data Science</span>
                <span className="chip">Statistical Finance</span>
              </div>
            </div>
            <div className="rail">
              <h3>Tools</h3>
              <div className="chips">
                <span className="chip">Python</span>
                <span className="chip">R</span>
                <span className="chip">SQL</span>
                <span className="chip">Alteryx</span>
                <span className="chip">Tableau</span>
              </div>
            </div>
            <div className="rail">
              <h3>Also</h3>
              <ul>
                <li>Bass — Rx Sneakers</li>
                <li>Mandela Rhodes Scholar</li>
                <li>Allan Gray Orbis Fellow</li>
                <li>Based in New York</li>
              </ul>
            </div>
          </aside>

          <main>
            <section className="blk">
              <h2>Summary</h2>
              <p className="lead">
                A consultant who builds. By day I lead strategy and technology
                work; by night I&apos;m teaching myself to ship with AI — small
                models, real tools, and a Substack documenting the whole process.
              </p>
            </section>

            <section className="blk">
              <h2>Experience</h2>
              <div className="item">
                <div className="r1">
                  <span className="ititle">The Boston Consulting Group</span>
                  <span className="when">2020 — Present</span>
                </div>
                <div className="org">Project Leader · New York &amp; Johannesburg</div>
                <ul>
                  <li>
                    Strategy, technology, and operations work for clients across
                    utilities, energy, financial services, and private equity.
                  </li>
                  <li>
                    Progressed from Associate Consultant to Project Leader; now
                    leading large-scale technology and AI-enabled transformation
                    programs.
                  </li>
                  <li>
                    Recipient of BCG&apos;s Global Purpose Award and a Commercial
                    Excellence Award.
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="r1">
                  <span className="ititle">Trinity IoT</span>
                  <span className="when">2016 — 2019</span>
                </div>
                <div className="org">Data Scientist (contract)</div>
                <ul>
                  <li>
                    Built health-monitoring algorithms for an IoT company to track
                    edge-device performance.
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="r1">
                  <span className="ititle">Earlier</span>
                  <span className="when">2017 — 2018</span>
                </div>
                <div className="org">Bain &amp; Company · Allan Gray</div>
                <ul>
                  <li>
                    Consulting and asset-management internships in Johannesburg and
                    Cape Town.
                  </li>
                </ul>
              </div>
            </section>

            <section className="blk">
              <h2>Education</h2>
              <div className="item">
                <div className="r1">
                  <span className="ititle">University of Cape Town</span>
                  <span className="when">2014 — 2022</span>
                </div>
                <div className="org">
                  MSc Data Science (Statistical Finance) · BCom Hons Statistics ·
                  BCom Statistics &amp; Economics
                </div>
                <ul>
                  <li>
                    Master&apos;s thesis: market-state discovery with unsupervised
                    learning.
                  </li>
                </ul>
              </div>
              <div className="item">
                <div className="r1">
                  <span className="ititle">Mandela Rhodes Scholarship</span>
                  <span className="when">2019</span>
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
                    A series demystifying language models for the curious — tokens,
                    probability, transformers, and the frontier.
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
