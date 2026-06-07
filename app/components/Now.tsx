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
            <span className="dot" /> Updated Jun 2026 · New York
          </div>
          <p>
            Writing <b>Learning AI Out Loud</b>, slowly and on purpose. This
            month: finishing the next episode — building a small language model
            from scratch, by hand, to show what actually happens when a machine
            predicts the next word.{' '}
            <span className="soft">
              Reading about attention, shipping small interactive demos, and
              playing more bass than I have in years.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
