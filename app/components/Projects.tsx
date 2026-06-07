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

          <div className="grid2">
            <a className="xcard reveal" href="#top">
              <div className="xtop">
                <h4>Signal</h4>
                <span className="xstatus">shipped</span>
              </div>
              <p>
                The generative mark on this page — an audio waveform that resolves
                into a portrait, a skyline, or an oscilloscope figure. New every
                visit.
              </p>
              <div className="tags">
                <span className="tag">Canvas</span>
                <span className="tag">JavaScript</span>
                <span className="tag">parametric</span>
              </div>
            </a>
            <a className="xcard reveal" href="#writing">
              <div className="xtop">
                <h4>The demos</h4>
                <span className="xstatus">tinkering</span>
              </div>
              <p>
                Small interactive toys that ship with the writing — assemble a
                model one step at a time and watch it work, then watch it break.
                Built to be clicked, not just read.
              </p>
              <div className="tags">
                <span className="tag">HTML</span>
                <span className="tag">Canvas</span>
                <span className="tag">JavaScript</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
