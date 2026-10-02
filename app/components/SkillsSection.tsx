import { toolbox } from "../data/portfolio";
import { DisclosureRow } from "./AnimatedDisclosure";

export function SkillsSection() {
  return (
    <div>
      <h3
        id="toolbox-title"
        className="type-title pt-5 text-[clamp(1.625rem,1.3rem+1.1vw,2.25rem)]"
      >
        Toolbox
      </h3>
      <div className="mt-6">
        {toolbox.map((group, index) => (
          <DisclosureRow key={group.id} index={index} className="rule grid gap-4 py-6 lg:grid-cols-12 lg:gap-10">
            <h4 className="font-semibold lg:col-span-4">{group.title}</h4>
            <ul className="grid gap-x-10 gap-y-2 text-ink-muted sm:grid-cols-2 lg:col-span-8">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </DisclosureRow>
        ))}
      </div>
    </div>
  );
}
