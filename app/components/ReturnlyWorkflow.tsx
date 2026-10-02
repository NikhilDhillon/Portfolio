import { MediaMotion } from "./motion/MediaMotion";

const roles = [
  { name: "Customer", action: "Book a return", detail: "Create an order, arrange pickup, and follow its status." },
  { name: "Driver", action: "Complete the pickup", detail: "Accept an offer, share location, and confirm delivery." },
  { name: "Operations", action: "Keep it moving", detail: "Manage the queue, assign drivers, and review exceptions." },
];

export function ReturnlyWorkflow({ compact = false }: { compact?: boolean }) {
  return (
    <MediaMotion zoom={false}>
      <figure>
        <div className="frame p-5 sm:p-7">
          <p className="label">One order / three connected workflows</p>
          <ol className="mt-5 grid gap-0 sm:grid-cols-3">
            {roles.map((role, index) => (
              <li key={role.name} className="border-t border-hairline/20 py-4 sm:border-l sm:border-t-0 sm:px-4 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0">
                <p className="readout text-sm text-signal-ink">0{index + 1} / {role.name}</p>
                <p className="type-title mt-3 text-lg">{role.action}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{role.detail}</p>
              </li>
            ))}
          </ol>
          <div className="mt-5 border-t border-ink pt-5">
            <p className="font-medium">Shared state, live updates</p>
            <p className="mt-2 text-sm text-ink-muted">Socket.IO + Redis coordinate orders, location, and chat.</p>
            {!compact ? <p className="mt-3 text-sm text-ink-muted">PostgreSQL persists the order lifecycle. Stripe handles payments; BullMQ separates background work from the live workflow.</p> : null}
          </div>
        </div>
        <figcaption className="label mt-3"><span className="text-ink">System overview</span> / Implemented application workflows</figcaption>
      </figure>
    </MediaMotion>
  );
}
