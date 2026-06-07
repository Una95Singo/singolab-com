import { LINKS } from '@/lib/site';

// Real posts from "Learning AI Out Loud" (usingo.substack.com). Numbered in
// publication order; the archive link covers the rest.
// EP 3 is an unpublished work-in-progress — shown as a teaser, not linked, and
// its draft text is intentionally kept out of this (public) repo.
type Post = {
  num: string;
  title: string;
  dek: string;
  meta: string;
  href?: string;
  wip?: boolean;
};

const POSTS: Post[] = [
  {
    num: 'Nº 05',
    title: 'Learning AI Out Loud, EP 3: Goal for All ______',
    dek: 'The simplest ancestor of the machine you talk to — built from scratch, and explained by a World Cup that’s repeating itself.',
    meta: 'In progress · Jun 2026',
    wip: true,
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
            From <i>Learning AI Out Loud</i>, my Substack.
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
