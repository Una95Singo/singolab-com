import { LINKS } from '@/lib/site';

// Post titles/dates/links are realistic PLACEHOLDERS — swap for real Substack
// posts (see design_handoff README "Content to swap").
const POSTS = [
  {
    num: 'Nº 07',
    title: 'Teaching Otis to feel the blues',
    dek: 'Giving a tiny language model a sense of the twelve-bar form — and what it taught me about attention.',
    meta: 'Apr 2026 · 8 min',
  },
  {
    num: 'Nº 06',
    title: 'What I keep getting wrong about embeddings',
    dek: 'A field note on intuition versus geometry, written the week it finally clicked.',
    meta: 'Mar 2026 · 6 min',
  },
  {
    num: 'Nº 05',
    title: "The week the loss wouldn't go down",
    dek: 'Debugging a training run, a metaphor for re-skilling, and learning to sit with not-knowing.',
    meta: 'Mar 2026 · 5 min',
  },
];

export default function Writing() {
  return (
    <section className="band" id="writing" data-screen-label="Writing">
      <div className="wrap seccol">
        <div className="sec-kick reveal">
          <span className="num">01</span> — Latest writing
          <span className="lede">
            From <i>Learning AI Out Loud</i>, my Substack.
          </span>
        </div>
        <div>
          <h2 className="sec-title reveal">
            Notes from teaching myself, out loud.
          </h2>
          <div className="posts reveal">
            {POSTS.map((p) => (
              <a
                key={p.num}
                className="post"
                href={LINKS.substack}
                target="_blank"
                rel="noopener"
              >
                <span className="pnum">{p.num}</span>
                <span>
                  <span className="ptitle">{p.title}</span>
                  <span className="pdek">{p.dek}</span>
                </span>
                <span className="pmeta">
                  {p.meta} <span className="arrow">↗</span>
                </span>
              </a>
            ))}
          </div>
          <a
            className="post archive"
            href={LINKS.substack}
            target="_blank"
            rel="noopener"
          >
            <span className="mono archive-label">
              Read the whole archive on Substack
            </span>
            <span className="pmeta">
              <span className="arrow">↗</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
