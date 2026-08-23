import { Phone } from "lucide-react";
import { PRIMARY_PHONE, telHref, type Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-accent-soft group-hover:text-accent">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold leading-snug">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <a
        href={telHref(PRIMARY_PHONE)}
        className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-primary/25 bg-primary-soft px-4 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Enquire Now
      </a>
    </article>
  );
}
