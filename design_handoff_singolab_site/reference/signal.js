// signal.js — the singolab hero signal: an audio waveform that resolves into art.
// Three endings (all single continuous lines): portrait (one-line profile),
// skyline (NYC), lissajous (oscilloscope). Portrait-weighted random each load.
// Theme-aware gradient (bright glow on dark, deeper ink on cream). replay()-able.

(function (global) {
  function initSignal(canvas, opts) {
    opts = opts || {};
    const ctx = canvas.getContext('2d');
    const N = 260;
    const reduced = global.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function isDark() { return (document.documentElement.getAttribute('data-theme') || 'light') === 'dark'; }

    let W = 0, H = 0, DPR = 1, cx = 0, cy = 0;
    let flat = [], targets = {}, mode = 'portrait', start = 0, raf = 0;

    // ---------- geometry ----------
    function flatWave() {
      const pts = new Array(N), amp = Math.min(H * 0.05, 26);
      for (let i = 0; i < N; i++) {
        const x = (W * i) / (N - 1), p = i / (N - 1);
        pts[i] = [x, cy + amp * (0.55 * Math.sin(p * Math.PI * 9) + 0.3 * Math.sin(p * Math.PI * 23 + 1.3) + 0.15 * Math.sin(p * Math.PI * 4))];
      }
      return pts;
    }
    function lissajous() {
      const Rx = Math.min(W * 0.16, 240), Ry = Math.min(H * 0.30, 220), a = 3, b = 2, d = Math.PI / 2, pts = new Array(N);
      for (let i = 0; i < N; i++) { const s = (i / (N - 1)) * Math.PI * 2; pts[i] = [cx + Rx * Math.sin(a * s + d), cy + Ry * Math.sin(b * s)]; }
      return pts;
    }
    function spline(keys, n, bw, bh) {
      const ox = cx - bw / 2, oy = cy - bh / 2, P = keys.map(k => [ox + k[0] * bw, oy + k[1] * bh]), out = [], segs = P.length - 1;
      for (let i = 0; i < n; i++) {
        const tt = (i / (n - 1)) * segs; let s = Math.floor(tt); if (s > segs - 1) s = segs - 1;
        const lt = tt - s, t2 = lt * lt, t3 = t2 * lt, p0 = P[Math.max(0, s - 1)], p1 = P[s], p2 = P[s + 1], p3 = P[Math.min(P.length - 1, s + 2)];
        const x = .5 * ((2 * p1[0]) + (-p0[0] + p2[0]) * lt + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3);
        const y = .5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * lt + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3);
        out.push([x, y]);
      }
      return out;
    }
    const PK = [[.86, .16], [.66, .05], [.42, .03], [.26, .13], [.215, .33], [.085, .45], [.06, .52], [.20, .55],
      [.115, .63], [.16, .70], [.30, .76], [.31, .87], [.46, .94], [.53, 1.06]];
    function portrait() { const bh = Math.min(H * 0.66, 440), bw = bh * 0.78; return spline(PK, N, bw, bh); }

    // recognizable NYC silhouette
    const SKY = [
      [0.00,0.05],[0.025,0.20],[0.045,0.13],[0.07,0.16],
      [0.085,0.22],[0.092,0.95],[0.099,0.95],[0.1035,1.08],[0.108,0.95],[0.114,0.95],[0.121,0.34],
      [0.15,0.30],[0.175,0.44],[0.205,0.31],[0.235,0.52],[0.265,0.43],[0.295,0.60],[0.33,0.47],
      [0.355,0.56],[0.375,0.56],[0.385,0.80],[0.398,0.80],[0.402,0.92],[0.406,1.0],[0.41,0.92],[0.418,0.80],[0.43,0.52],
      [0.455,0.50],[0.475,0.62],[0.49,0.78],[0.5,0.90],[0.503,0.96],[0.506,0.90],[0.515,0.74],[0.53,0.50],
      [0.56,0.64],[0.595,0.50],[0.63,0.72],[0.665,0.55],
      [0.70,0.58],[0.715,0.58],[0.72,0.98],[0.742,0.98],[0.748,0.55],
      [0.78,0.66],[0.815,0.50],[0.85,0.72],[0.885,0.48],[0.92,0.62],[0.955,0.45],[0.985,0.55],[1.0,0.06]
    ];
    function skyline() {
      const base = cy + Math.min(H * 0.18, 120), span = Math.min(H * 0.52, 410), pts = new Array(N);
      let seg = 0;
      for (let i = 0; i < N; i++) {
        const p = i / (N - 1);
        while (seg < SKY.length - 2 && SKY[seg + 1][0] < p) seg++;
        const a = SKY[seg], b = SKY[Math.min(SKY.length - 1, seg + 1)];
        const t = b[0] === a[0] ? 0 : (p - a[0]) / (b[0] - a[0]);
        const hf = a[1] + (b[1] - a[1]) * Math.max(0, Math.min(1, t));
        pts[i] = [W * p, base - hf * span];
      }
      return pts;
    }

    const NAMES = { lissajous: 'an oscilloscope figure', skyline: 'the New York skyline', portrait: 'a one-line portrait' };

    function buildGeom() {
      DPR = Math.min(global.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * DPR; canvas.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cx = W * (opts.cxFactor || 0.80); cy = H * 0.52;
      flat = flatWave();
      targets = { lissajous: lissajous(), skyline: skyline(), portrait: portrait() };
    }

    // ---------- render ----------
    function grad() {
      const s = isDark() ? ['#42EAFF', '#4272FF', '#FF7E42'] : ['#1EA8E6', '#2F6BF6', '#1E40FF'];
      const g = ctx.createLinearGradient(0, 0, W, 0); g.addColorStop(0, s[0]); g.addColorStop(0.5, s[1]); g.addColorStop(1, s[2]); return g;
    }
    function strokePath(tgt, count, morphT) {
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        const fx = flat[i][0], fy = flat[i][1], tx = tgt[i][0], ty = tgt[i][1];
        const x = fx + (tx - fx) * morphT, y = fy + (ty - fy) * morphT;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    function draw(drawFrac, morphT) {
      ctx.clearRect(0, 0, W, H);
      const tgt = targets[mode], count = Math.max(2, Math.round(drawFrac * N)), g = grad();
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      ctx.globalAlpha = isDark() ? 0.42 : 0.3;
      ctx.shadowColor = isDark() ? 'rgba(66,114,255,0.55)' : 'rgba(47,91,219,0.3)'; ctx.shadowBlur = isDark() ? 20 : 8;
      ctx.strokeStyle = g; ctx.lineWidth = 2.3; strokePath(tgt, count, morphT);
      ctx.globalAlpha = 1; ctx.shadowBlur = 0; strokePath(tgt, count, morphT);
    }

    const T_DRAW = 1200, T_MORPH = 1600, HOLD = 500;
    const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    function render(p) {
      const e = p * (T_DRAW + T_MORPH);
      if (e < T_DRAW) draw(easeOut(e / T_DRAW), 0);
      else draw(1, easeIO((e - T_DRAW) / T_MORPH));
    }
    function loop(now) {
      if (!start) start = now;
      const e = now - start, total = T_DRAW + T_MORPH;
      render(Math.min(1, e / total));
      if (e < total + HOLD) raf = requestAnimationFrame(loop); else render(1);
    }
    function pickMode() {
      const pool = ['portrait', 'portrait', 'skyline', 'lissajous'];
      mode = pool[Math.floor(Math.random() * pool.length)];
      if (opts.onName) opts.onName(NAMES[mode]);
    }
    function play() { cancelAnimationFrame(raf); start = 0; if (reduced) { render(1); return; } raf = requestAnimationFrame(loop); }

    buildGeom(); pickMode();
    let rt; global.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { buildGeom(); render(1); }, 150); });
    new MutationObserver(() => render(1)).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    play();

    return {
      replay() { pickMode(); play(); },
      setMode(m) { mode = m; if (opts.onName) opts.onName(NAMES[m]); play(); },
      currentName() { return NAMES[mode]; }
    };
  }
  global.initSignal = initSignal;
})(window);
