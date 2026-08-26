import { HeartPulse, MapPin, Phone } from "lucide-react";
import {
  ADDRESS_EN,
  ADDRESS_MR,
  BRAND,
  NAV_LINKS,
  PRIMARY_PHONE,
  TAGLINE_MR,
  formatPhone,
  telHref,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <HeartPulse className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-base font-extrabold">{BRAND}</h3>
                <p className="text-xs text-muted-foreground">Service • Humanity • Trust</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{TAGLINE_MR}</p>
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Pages
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-foreground/80 hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Contact
            </h4>
            <a
              href={telHref(PRIMARY_PHONE)}
              className="mt-4 inline-flex items-center gap-2 text-base font-bold hover:text-foreground/70"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {formatPhone(PRIMARY_PHONE)}
            </a>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {ADDRESS_MR}
                <br />
                {ADDRESS_EN}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <a
              href="https://portfolio-project-final.vercel.app/#about"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:underline"
            >
              Krushna Gajanan Thombare
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
