'use client';

import { useEffect, useRef, useState } from 'react';
import { initSignal, type SignalApi } from '@/lib/signal';

export default function HeroSignal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const apiRef = useRef<SignalApi | null>(null);
  const [name, setName] = useState('a one-line portrait');

  useEffect(() => {
    if (!canvasRef.current) return;
    const api = initSignal(canvasRef.current, { onName: setName });
    apiRef.current = api;
    return () => api.destroy();
  }, []);

  return (
    <>
      <canvas id="signal" ref={canvasRef} aria-hidden="true" />
      <div className="sigcap">
        <span>
          the signal resolves into <b>{name}</b>
        </span>
        <button
          type="button"
          title="Redraw the signal"
          onClick={() => apiRef.current?.replay()}
        >
          ↻ redraw
        </button>
      </div>
    </>
  );
}
