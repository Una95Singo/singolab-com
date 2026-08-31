import { LINKS } from '@/lib/site';

// Real posts from usingo.substack.com, newest first, numbered in publication
// order. Titles, dates and links are taken from the Substack archive itself;
// deks are the post subtitles where one exists.
type Post = {
  num: string;
  title: string;
  dek: string;
  meta: string;
  href?: string;
  /** unpublished draft: shown as a teaser, not linked */
  wip?: boolean;
};

const POSTS: Post[] = [
  {
    num: 'Nº 07',
    title: 'Remembering why we dared to dream big',
    dek: 'On making Principal at BCG, and the people who made it thinkable.',
    meta: 'Aug 2026',
    href: 'https://usingo.substack.com/p/remembering-why-we-dared-to-dream',
  },
  {
    num: 'Nº 06',
    title: 'The Summer of AI',
    dek: '…and it’s an extremely hot season.',
    meta: 'Jul 2026',
    href: 'https://usingo.substack.com/p/the-summer-of-ai',
  },
  {
    num: 'Nº 05',
    title: 'Learning AI Out Loud, EP 3: Goal for All Africa',
    dek: 'The simplest ancestor of the large language model, built from scratch and explained by a World Cup that is repeating itself.',
    meta: 'Jun 2026',
    href: 'https://usingo.substack.com/p/learning-ai-out-loud-ep-3-goal-for',
  },
  {
    num: 'Nº 04',
    title: 'Learning AI Out Loud, EP 2: The Devil Wears ___',
    dek: 'Your brain and your chatbot are running the same trick.',
    meta: 'May 2026',
    href: 'https://usingo.substack.com/p/learning-ai-out-loud-ep-2-the-devil',
  },
  {
    num: 'Nº 03',
    title: 'Learning AI Out Loud, EP 1: WTF is a Token?',
    dek: 'An honest attempt to explain it simply.',
    meta: 'May 2026',
    href: 'https://usingo.substack.com/p/learning-ai-out-loud-ep1-wtf-is-a',
  },
  {
    num: 'Nº 02',
    title: 'Learning AI Out Loud: An Introduction',
    dek: 'Demystifying language models for the curious — no technical background required.',
    meta: 'Apr 2026',
    href: 'https://usingo.substack.com/p/learning-ai-out-loud-an-introduction',
  },
  {
    num: 'Nº 01',
    title: 'AI Alignment Is Probabilistic. The Consequences Aren’t',
    dek: 'No one has a crystal ball.',
    meta: 'Mar 2026',
    href: 'https://usingo.substack.com/p/ai-alignment-is-probabilistic-the',
  },
];

function PostRow({ p }: { p: Post }) {
  const body = (
    <>
      <span className="pnum">{p.num}</span>
      <span>
        <span className="ptitle">
          {p.title}
          {p.wip && <span className="wip-tag">Draft</span>}
        </span>
        <span className="pdek">{p.dek}</span>
      </span>
      <span className="pmeta">
        {p.meta}
        {!p.wip && <span className="arrow">↗</span>}
      </span>
    </>
  );

  if (p.wip) {
    return (
      <div className="post wip" aria-label={`${p.title} (work in progress)`}>
        {body}
      </div>
    );
  }
  return (
    <a className="post" href={p.href} target="_blank" rel="noopener">
      {body}
    </a>
  );
}

export default function Writing() {
  return (
    <section className="band" id="writing" data-screen-label="Writing">
      <div className="wrap seccol">
        <div className="sec-kick reveal">
          <span className="num">01</span> — Latest writing
          <span className="lede">
            My Substack — the <i>Learning AI Out Loud</i> series, and
            everything else.
          </span>
        </div>
        <div>
          <h2 className="sec-title reveal">
            Notes from teaching myself, out loud.
          </h2>
          <div className="posts reveal">
            {POSTS.map((p) => (
              <PostRow key={p.num} p={p} />
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
