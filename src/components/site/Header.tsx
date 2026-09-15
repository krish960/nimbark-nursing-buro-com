import { HeartPulse, Megaphone, Menu, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { BRAND, NAV_LINKS, PRIMARY_PHONE, telHref } from "@/lib/site";

const UPCOMING = ["Election Services", "AC Repair & Service", "More Home Services"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-md">
      <div className="hidden border-b border-primary/10 bg-primary text-primary-foreground sm:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-1.5 text-[11px] font-semibold sm:justify-between sm:px-6 sm:text-xs lg:px-8">
          <span className="inline-flex items-center gap-1.5">
            <Megaphone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Coming Soon — New Services
          </span>
          <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5">
            {UPCOMING.map((item) => (
              <span key={item} className="inline-flex items-center gap-1">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                {item}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl gradient-cta text-primary-foreground shadow-soft">
            <HeartPulse className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[17px] font-normal leading-tight sm:text-xl">
              {BRAND}
            </span>
            <span className="block truncate text-[11px] font-medium text-muted-foreground sm:text-xs">
              Service • Humanity • Trust
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={telHref(PRIMARY_PHONE)}
            className="hidden shrink-0 items-center gap-2 rounded-full gradient-cta px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3.5 text-base font-semibold text-foreground/90 transition-colors hover:bg-primary-soft hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
