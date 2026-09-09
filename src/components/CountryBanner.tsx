import FlagIcon from './FlagIcon';
import { countryProfiles } from '@/data/countryProfiles';
import type { CountryCode } from '@/data/types';

export default function CountryBanner({
  countryCode,
  countryLabel,
}: {
  countryCode: CountryCode;
  countryLabel: string;
}) {
  const profile = countryProfiles[countryCode];
  const motifs = profile?.motifs ?? [];

  // Dense tiling of the country's motif icons across the whole banner, in gray.
  const tileCount = 30;
  const tiles = motifs.length
    ? Array.from({ length: tileCount }, (_, i) => motifs[i % motifs.length])
    : [];

  return (
    <div className="sticky top-0 z-20 mx-[calc(50%-50vw)] mb-8 w-screen overflow-hidden border-b border-line bg-paper shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
      <div className="relative mx-auto min-h-[200px] max-w-5xl sm:min-h-[260px]">
        {/* Gray tiled motif texture, covering the full banner */}
        {tiles.length ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid grid-cols-6 place-items-center gap-6 overflow-hidden py-4 sm:grid-cols-10"
          >
            {tiles.map((m, i) => (
              <span
                key={i}
                className="text-3xl leading-none grayscale sm:text-4xl"
                style={{ filter: 'grayscale(1) contrast(0.7) brightness(1.15)', opacity: 0.16 }}
              >
                {m}
              </span>
            ))}
          </div>
        ) : null}

        {/* Soft scrim so the flag and text stay legible over the texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper via-paper/60 to-paper/10"
        />

        {/* Big colored flag, top-left */}
        <FlagIcon
          countryCode={countryCode}
          className="absolute left-4 top-4 h-14 w-auto rounded-sm shadow-lg ring-1 ring-black/10 sm:left-8 sm:top-6 sm:h-24"
        />

        {/* Country name + tagline, bottom-left */}
        <div className="absolute inset-x-4 bottom-4 sm:inset-x-8 sm:bottom-6">
          <p className="font-serif text-2xl font-bold tracking-tight sm:text-4xl">
            {countryLabel}
          </p>
          {profile ? (
            <p className="mt-2 max-w-2xl text-base text-muted sm:text-lg">{profile.tagline}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
