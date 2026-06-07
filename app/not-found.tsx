import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not found — singolab',
};

export default function NotFound() {
  return (
    <main className="notfound">
      <div>
        <div className="kick">// signal lost — Nº 404</div>
        <h1>404</h1>
        <p>This page didn&apos;t resolve into anything.</p>
        <Link className="home" href="/">
          ← back to singolab
        </Link>
      </div>
    </main>
  );
}
