import { ArrowUpRight, Phone } from "lucide-react";
import { PRIMARY_PHONE, telHref, type Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-primary/15 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-accent-soft group-hover:text-accent">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-primary/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-5 font-display text-xl leading-snug">{service.name}</h3>
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
