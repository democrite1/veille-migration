/**
 * Renders an actual flag image instead of a Unicode flag emoji. Regional-
 * indicator flag emoji fall back to raw two-letter text on several platforms
 * (notably Windows without an updated emoji font), so a real image is the
 * only way to guarantee a colored flag for every visitor.
 *
 * The SVGs are served by the site itself (public/flags, copied from the
 * flag-icons package by `npm run flags`): loading them from flagcdn.com sent
 * every visitor's IP address to a third party (audit J3).
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
  const code = countryCode.toLowerCase();
  if (!/^[a-z]{2}$/.test(code)) return null;

  // Explicit 4:3 dimensions, the flags' own ratio, reserve their space before
  // they load: without them the directory's layout shifted (CLS 0.755, P4).
  return (
    // eslint-disable-next-line @next/next/no-img-element -- small SVG flag: next/image cannot optimise SVG
    <img
      src={`/flags/${code}.svg`}
      alt={title ?? ''}
      aria-hidden={title ? undefined : true}
      width={20}
      height={15}
      className={className}
      loading="lazy"
    />
  );
}
