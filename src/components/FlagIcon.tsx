/**
 * Renders an actual flag image (flagcdn.com SVG) instead of a Unicode flag
 * emoji. Regional-indicator flag emoji fall back to raw two-letter text on
 * several platforms (notably Windows without an updated emoji font), so a
 * real image is the only way to guarantee a colored flag for every visitor.
 */
export default function FlagIcon({
  countryCode,
  className,
  title,
}: {
  countryCode: string;
  className?: string;
  title?: string;
}) {
  const code = countryCode.toLowerCase() === 'eu' ? 'eu' : countryCode.toLowerCase();
  if (!/^[a-z]{2}$/.test(code)) return null;

  // Explicit 4:3 dimensions reserve the flag's space before it loads: without
  // them the directory's layout shifted as flags arrived (CLS 0.755, audit P4).
  return (
    // eslint-disable-next-line @next/next/no-img-element -- small SVG flag: next/image cannot optimise SVG
    <img
      src={`https://flagcdn.com/${code}.svg`}
      alt={title ?? ''}
      aria-hidden={title ? undefined : true}
      width={20}
      height={15}
      className={className}
      loading="lazy"
    />
  );
}
