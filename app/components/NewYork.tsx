// New York guide entries are FINAL / real (per the design_handoff README).
const EAT = [
  { cat: 'Dinner', name: 'Piccola Cucina', where: 'Upper West Side' },
  { cat: 'Bagels', name: 'Black Seed', where: 'Long Island City' },
  { cat: 'Coffee', name: 'At home', where: 'every morning' },
];
const MOVE = [
  { cat: 'Jazz', name: 'Django', where: 'Tribeca' },
  { cat: 'Swim', name: 'Equinox', where: 'Hudson Yards' },
  { cat: 'Run', name: 'The waterfront', where: 'Williamsburg & LIC' },
];

function GuideList({
  items,
}: {
  items: { cat: string; name: string; where: string }[];
}) {
  return (
    <ul className="guide-list">
      {items.map((it) => (
        <li key={it.cat + it.name}>
          <span className="g-cat">{it.cat}</span>
          <span className="g-name">{it.name}</span>
          <span className="g-where">{it.where}</span>
        </li>
      ))}
    </ul>
  );
}

export default function NewYork() {
  return (
    <section className="band alt" id="newyork" data-screen-label="New York">
      <div className="wrap seccol">
        <div className="sec-kick reveal">
          <span className="num">04</span> — New York
          <span className="lede">A working field guide to my city.</span>
        </div>
        <div>
          <h2 className="sec-title reveal">My New York, in short.</h2>
          <div className="guide reveal">
            <div className="guide-col">
              <h3 className="guide-h">Eat &amp; drink</h3>
              <GuideList items={EAT} />
            </div>
            <div className="guide-col">
              <h3 className="guide-h">Move &amp; hear</h3>
              <GuideList items={MOVE} />
            </div>
          </div>
          <p className="guide-note mono">
            The short list — ask me for the long one.
          </p>
        </div>
      </div>
    </section>
  );
}
