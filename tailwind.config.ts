import type { Config } from 'tailwindcss';

// Theming is driven by CSS variables on <html data-theme> (see app/globals.css),
// not Tailwind's `dark:` variant — so the palette is exposed as var() references
// for any utility usage, while the bulk of the design lives in globals.css.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        body: ['var(--font-literata)', 'Georgia', 'serif'],
        mono: ['var(--font-spline-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: 'var(--paper)',
        'paper-2': 'var(--paper-2)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-3': 'var(--ink-3)',
        accent: 'var(--accent)',
        warm: 'var(--warm)',
      },
      maxWidth: { wrap: '1080px' },
    },
  },
  plugins: [],
};

export default config;
