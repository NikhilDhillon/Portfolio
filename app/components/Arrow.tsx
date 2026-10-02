type Direction = "s" | "e" | "ne" | "n";

// Literal class names so Tailwind keeps the component classes in the build.
const directionClass: Record<Direction, string> = {
  s: "arrow-s",
  e: "arrow-e",
  ne: "arrow-ne",
  n: "arrow-n",
};

// Every arrow is IBM Plex Mono's "↓" rotated, so all directions share one
// glyph from the brand font (the other arrows are outside the latin subset).
export function Arrow({ dir, className = "" }: { dir: Direction; className?: string }) {
  return (
    <span aria-hidden="true" className={`arrow ${directionClass[dir]} ${className}`.trim()}>
      ↓
    </span>
  );
}
