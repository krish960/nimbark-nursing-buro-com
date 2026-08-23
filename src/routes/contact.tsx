import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { ADDRESS_EN, ADDRESS_MR, MAPS_URL, STAFF_EN } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Nimbalk Nursing Bureau, Wakad Pune" },
      {
        name: "description",
        content:
          "Contact Nimbalk Nursing Bureau, Datt Mandir Road, Wakad, Pune. Call 7387788719, 8432687009 or 7448259285 for home care and nursing staff.",
      },
      { property: "og:title", content: "Contact Us — Nimbalk Nursing Bureau" },
      {
        property: "og:description",
        content: "Need reliable home care? Call us on any of our three numbers or message on WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Contact Us</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Need Reliable Home Care?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {STAFF_EN}. Call us and we will arrange the right staff for your home.
          </p>
        </div>
      </section>

      <div className="py-10 lg:py-12">
        <ContactCta />
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-bold">Our Location</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {ADDRESS_MR}
              <br />
              {ADDRESS_EN}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center rounded-2xl border border-border bg-background px-4 text-sm font-bold transition-colors hover:border-primary/40 hover:text-primary"
            >
              Get Directions
            </a>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-bold">Talk To Us</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tell us the type of care you need — newborn baby care, baby sitter, household work
              assistance, patient care, nursing caretaker or home helper — and we will help you
              with experienced, trained and trusted staff.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
