'use client';

import { useEffect } from 'react';

// Reveal-on-scroll: mirrors the prototype script. Observes every `.reveal`
// element, adds `.in` on intersection, staggers hero items, and reveals the
// hero immediately. Renders nothing. Reduced motion is handled in CSS.
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal')
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    els.forEach((el, i) => {
      if (el.closest('.hero')) el.style.transitionDelay = i * 90 + 'ms';
      io.observe(el);
    });

    // hero is in view immediately
    const raf = requestAnimationFrame(() => {
      document
        .querySelectorAll('.hero .reveal')
        .forEach((el) => el.classList.add('in'));
    });

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
