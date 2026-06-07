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
                <span className="feature-label">A TOY LANGUAGE MODEL</span>
              </div>
              <h3>Otis</h3>
              <p className="desc">
                A small language model learning to write the blues — built post by
                post, from tokenizer to transformer, trained on a corpus of
                lyrics. The point isn&apos;t the model. It&apos;s understanding
                every line of it.
              </p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">PyTorch</span>
                <span className="tag">nanoGPT</span>
                <span className="tag">Modal</span>
                <span className="tag">Weights &amp; Biases</span>
              </div>
            </div>
            <div className="fside">
              <div className="otis-head">otis · sample @ epoch 40</div>
              <div className="otis-term">
                <div>
                  <span className="pr">otis&gt;</span>woke up this mornin&apos;
                </div>
                <div>
                  <span className="pr" />
                  the wifi wouldn&apos;t load
                </div>
                <div>
                  <span className="pr" />
                  my model&apos;s still trainin&apos;
                </div>
                <div>
                  <span className="pr" />
                  down a gradient road
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
            <a
              className="xcard reveal"
              href={LINKS.substack}
              target="_blank"
              rel="noopener"
            >
              <div className="xtop">
                <h4>Fieldbook</h4>
                <span className="xstatus">tinkering</span>
              </div>
              <p>
                A little tool that turns my reading notes into spaced-repetition
                cards, so the things I learn out loud actually stick.
              </p>
              <div className="tags">
                <span className="tag">TypeScript</span>
                <span className="tag">SQLite</span>
                <span className="tag">local-first</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
