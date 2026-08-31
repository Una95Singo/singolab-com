import { LINKS } from '@/lib/site';

export default function Projects() {
  return (
    <section className="band alt" id="projects" data-screen-label="Projects">
      <div className="wrap seccol">
        <div className="sec-kick reveal">
          <span className="num">02</span> — Projects
          <span className="lede">Small, useful things — built in the open.</span>
        </div>
        <div>
          <h2 className="sec-title reveal">Things I&apos;m building to learn.</h2>

          <div className="feature reveal">
            <div className="fbody">
              <div className="statusrow">
                <span className="pill">
                  <span className="blip" /> in progress
                </span>
                <span className="feature-label">A SERIES, BUILT IN PUBLIC</span>
              </div>
              <h3>Learning AI Out Loud</h3>
              <p className="desc">
                Building language models from scratch and explaining them out
                loud — from tokens to transformers, one episode at a time. Each
                idea gets the simplest version that works, plus a demo you can
                click through. The point isn&apos;t the models. It&apos;s
                understanding every line of them.
              </p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Canvas</span>
                <span className="tag">Substack</span>
              </div>
            </div>
            <div className="fside">
              <div className="codeterm-head">the build · from scratch</div>
              <div className="codeterm">
                <div>
                  <span className="pr">→</span>tokens
                </div>
                <div>
                  <span className="pr">→</span>probability
                </div>
                <div>
                  <span className="pr">→</span>bigrams &amp; n-grams
                </div>
                <div>
                  <span className="pr">→</span>attention
                </div>
                <div>
                  <span className="pr">→</span>transformers
                  <span className="cur" />
                </div>
              </div>
            </div>
          </div>

          <div className="feature reveal">
            <div className="fbody">
              <div className="statusrow">
                <span className="pill">shipped</span>
                <span className="feature-label">A STUDY GUIDE, LIVE</span>
              </div>
              <h3>Robot to Red Light</h3>
              <p className="desc">
                A New York permit-test guide for drivers trained on South
                African roads. Most apps teach the manual from zero; this one
                assumes you can already drive, and treats the real problem as
                interference rather than ignorance. Every rule arrives as a
                bridge from a habit you already own — and says plainly
                whether that habit survives the crossing.
              </p>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">SVG</span>
                <span className="tag">hand-drawn</span>
              </div>
              <div className="flinks">
                <a href={LINKS.studyGuide} target="_blank" rel="noreferrer">
                  Open the guide <span className="arrow">↗</span>
                </a>
                <a href={LINKS.studyGuideRepo} target="_blank" rel="noreferrer">
                  Source on GitHub <span className="arrow">↗</span>
                </a>
              </div>
            </div>
            <div className="fside">
              <div className="codeterm-head">the four verdicts</div>
              <ul className="verdicts">
                <li>
                  <span className="vk vk-same" aria-hidden="true" /> same rule
                  — trust it
                </li>
                <li>
                  <span className="vk vk-mirror" aria-hidden="true" /> mirrored
                  — flip it
                </li>
                <li>
                  <span className="vk vk-rewire" aria-hidden="true" /> rewired
                  — override it
                </li>
                <li>
                  <span className="vk vk-new" aria-hidden="true" /> no SA
                  version — learn it
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
