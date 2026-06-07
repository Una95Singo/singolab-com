'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/#writing', label: 'Writing' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#music', label: 'Music' },
  { href: '/#newyork', label: 'New York' },
  { href: '/#now', label: 'Now' },
  { href: '/resume', label: 'Résumé' },
];

export default function Masthead() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Sync state to whatever the no-flash script already set on <html>.
  useEffect(() => {
    const current =
      (document.documentElement.getAttribute('data-theme') as
        | 'light'
        | 'dark') || 'light';
    setTheme(current);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('singolab-theme', next);
    } catch {
      /* ignore */
    }
  };

  return (
    <header className={`mast${scrolled ? ' scrolled' : ''}`} id="mast">
      <div className="wrap mast-in">
        <Link className="wordmark" href="/#top">
          <b>singolab</b>
          <span className="dot">.</span>
        </Link>
        <nav className="links">
          <div className={`navlinks${menuOpen ? ' open' : ''}`} id="navlinks">
            {NAV.map((item) => (
              <Link
                key={item.href}
                className="nav-item"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <button
            className="toggle"
            aria-label="Toggle theme"
            title="Toggle light/dark"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
