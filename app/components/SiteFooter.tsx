import { profile } from "../data/portfolio";
import { Arrow } from "./Arrow";

export function SiteFooter({ home = true }: { home?: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline/[0.16] bg-surface">
      <div className="shell flex flex-col gap-3 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {year} <span translate="no">{profile.name}</span>
        </p>
        <a href={home ? "#top" : "/#work"} className="label inline-flex min-h-11 items-center gap-2 self-start py-1 sm:self-auto">
          <span className="link">{home ? "Back to top" : "Back to selected work"}</span>
          <Arrow dir="n" />
        </a>
      </div>
    </footer>
  );
}
