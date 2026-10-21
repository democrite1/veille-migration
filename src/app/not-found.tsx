import Link from 'next/link';
import './globals.css';

// Outside /fr and /en there is no locale layout (the root layout only passes
// children through), so this page carries its own html and body, in both languages.
export default function RootNotFound() {
  return (
    <html lang="fr">
      <body className="min-h-screen font-sans">
        <main className="mx-auto max-w-5xl space-y-4 px-4 py-10">
          <h1 className="font-serif text-3xl font-semibold tracking-tight">Page introuvable</h1>
          <p className="text-muted">Cette page n&apos;existe pas ou a été déplacée.</p>
          <p lang="en" className="text-muted">
            This page does not exist or has moved.
          </p>
          <p className="flex gap-4">
            <Link href="/fr" className="text-accent underline">
              Accueil
            </Link>
            <Link href="/en" lang="en" className="text-accent underline">
              Home
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
