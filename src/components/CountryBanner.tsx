import { countryFlag } from '@/lib/flags';
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

  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-white/60">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-10 select-none text-[9rem] leading-none opacity-[0.12] sm:text-[11rem]"
      >
        {countryFlag(countryCode)}
      </span>
      <div className="relative flex flex-col gap-2 p-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">
            {countryFlag(countryCode)}
          </span>
          <span className="font-serif text-lg font-semibold">{countryLabel}</span>
          {profile ? (
            <span className="ml-auto flex gap-1 text-lg" aria-hidden="true">
              {profile.motifs.map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </span>
          ) : null}
        </div>
        {profile ? <p className="max-w-2xl text-sm text-muted">{profile.tagline}</p> : null}
      </div>
    </div>
  );
}
