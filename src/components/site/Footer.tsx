import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import {
  ADDRESS_EN,
  ADDRESS_MR,
  BRAND,
  NAV_LINKS,
  PHONES,
  SERVICES,
  TAGLINE_MR,
  formatPhone,
  telHref,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface pb-28 pt-12 sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8">
        <div className="min-w-0">
          <h3 className="text-lg font-extrabold">{BRAND}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{TAGLINE_MR}</p>
          <p className="mt-1 text-sm font-semibold text-primary">Service • Humanity • Trust</p>
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Pages</h4>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-foreground/80 hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Services
          </h4>
          <ul className="mt-3 space-y-2">
            {SERVICES.map((service) => (
              <li key={service.slug} className="text-sm text-foreground/80">
                {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Contact
          </h4>
          <p className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              {ADDRESS_MR}
              <br />
              {ADDRESS_EN}
            </span>
          </p>
          <ul className="mt-3 space-y-2">
            {PHONES.map((phone) => (
              <li key={phone}>
                <a
                  href={telHref(phone)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/90 hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {formatPhone(phone)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
