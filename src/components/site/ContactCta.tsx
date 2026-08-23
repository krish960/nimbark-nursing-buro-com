import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import {
  ADDRESS_EN,
  ADDRESS_MR,
  BRAND,
  MAPS_URL,
  PHONES,
  PRIMARY_PHONE,
  formatPhone,
  telHref,
  waHref,
} from "@/lib/site";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-border gradient-hero p-6 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
              Need Reliable Home Care?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Experienced, trained and trusted staff available for your home care needs. Call us
              and we will help you today.
            </p>
            <p className="mt-4 text-lg font-bold">{BRAND}</p>
            <p className="mt-1 flex items-start gap-2 text-sm text-foreground/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {ADDRESS_MR}
                <br />
                {ADDRESS_EN}
              </span>
            </p>
          </div>

          <div className="min-w-0 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Phone Numbers
            </h3>
            <ul className="mt-3 space-y-2.5">
              {PHONES.map((phone) => (
                <li key={phone}>
                  <a
                    href={telHref(phone)}
                    className="flex min-h-12 items-center gap-3 rounded-2xl border border-border bg-background px-4 text-base font-bold transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="truncate">{formatPhone(phone)}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
              <a
                href={telHref(PRIMARY_PHONE)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={waHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-background px-4 text-sm font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
