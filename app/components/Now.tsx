// Keep the date/paragraph current (see design_handoff README "Content to swap").
// NOTE (Oct 2026): draft below — owner to review/adjust wording before merge.
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
            <span className="dot" /> Updated Oct 2026 · New York
          </div>
          <p>
            Promoted to <b>Principal at BCG</b> in August — ten years after
            Grow@BCG, which feels like a good moment to take stock of the next
            ten. Also shipped a small thing I&apos;m proud of: a New York
            permit-test study guide for drivers trained on South African roads
            (drive.singolab.com). Still writing <b>Learning AI Out Loud</b>,
            slowly and on purpose.{' '}
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
