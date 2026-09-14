"use client";

import { HeartPulse, MapPin, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import {
  ADDRESS_EN,
  ADDRESS_MR,
  BRAND,
  NAV_LINKS,
  PRIMARY_PHONE,
  TAGLINE_MR,
  formatPhone,
  telHref,
  waHref,
} from "@/lib/site";

const PORTFOLIO_URL = "https://portfolio-project-final.vercel.app/#about";

export function Footer() {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <footer className="border-t border-primary/20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <HeartPulse className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-base font-extrabold">{BRAND}</h3>
                <p className="text-xs text-primary-foreground/70">Service • Humanity • Trust</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">{TAGLINE_MR}</p>
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/65">
              Pages
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/65">
              Contact
            </h4>
            <a
              href={telHref(PRIMARY_PHONE)}
              className="mt-4 inline-flex items-center gap-2 text-base font-bold hover:text-primary-foreground/75"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {formatPhone(PRIMARY_PHONE)}
            </a>
            <p className="mt-3 flex items-start gap-2 text-sm text-primary-foreground/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {ADDRESS_MR}
                <br />
                {ADDRESS_EN}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/65 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <p>
            Developed by{" "}
            <button
              type="button"
              onClick={() => setShowWelcome(true)}
              className="font-semibold text-primary-foreground underline-offset-2 hover:underline"
            >
              Krushna Gajanan Thombare
            </button>
            <a
              href="https://wa.me/917823040317?text=Hi%20Krushna!%20I%20saw%20your%20work%20on%20the%20Nimbark%20Nursing%20Bureau%20website%20and%20I%20want%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact developer on WhatsApp"
              title="Contact developer on WhatsApp"
              className="ml-2 inline-flex h-6 w-6 translate-y-0.5 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>

      {showWelcome && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowWelcome(false);
          }}
          role="presentation"
        >
          <div
            className="relative w-full max-w-sm overflow-hidden rounded-3xl bg-white p-6 text-center text-foreground shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-title"
          >
            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-foreground/50 transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
              <HeartPulse className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 id="welcome-title" className="mt-4 text-lg font-bold">
              Welcome!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              You are about to visit the portfolio of{" "}
              <span className="font-semibold text-foreground">Krushna Gajanan Thombare</span>. It opens in a new tab so you can easily return here.
            </p>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowWelcome(false)}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Visit Portfolio
              </a>
              <button
                type="button"
                onClick={() => setShowWelcome(false)}
                className="inline-flex items-center justify-center rounded-full bg-muted px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted/80"
              >
                Back to Site
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
