import { notFound } from 'next/navigation';

// Unknown paths under /fr or /en land here, so the 404 renders inside the
// localized layout (header, navigation, footer) instead of Next's default page.
export default function CatchAll() {
  notFound();
}
