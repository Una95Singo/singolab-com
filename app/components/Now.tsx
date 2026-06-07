// Keep the date/paragraph current (see design_handoff README "Content to swap").
export default function Now() {
  return (
    <section className="band" id="now" data-screen-label="Now">
      <div className="wrap seccol">
        <div className="sec-kick reveal">
          <span className="num">05</span> — Now
          <span className="lede">What I&apos;m focused on this month.</span>
        </div>
        <div className="now-card reveal">
          <div className="now-date">
            <span className="dot" /> Updated May 2026 · New York
          </div>
          <p>
            Building <b>Otis</b>, slowly and on purpose. This month: a cleaner
            tokenizer for blues lyrics, and finally understanding attention well
            enough to explain it to a friend.{' '}
            <span className="soft">
              Reading about retrieval, writing every week, and playing more bass
              than I have in years.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
