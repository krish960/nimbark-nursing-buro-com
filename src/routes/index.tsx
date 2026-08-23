import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";

import heroImage from "@/assets/hero-home-care.jpg";
import { ContactCta } from "@/components/site/ContactCta";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import {
  BRAND,
  PRIMARY_PHONE,
  SERVICES,
  STAFF_MR,
  STEPS,
  TAGLINE_MR,
  VALUES_MR,
  WHY_US,
  telHref,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nimbalk Nursing Bureau — Home Care & Nursing in Wakad, Pune" },
      {
        name: "description",
        content:
          "Professional home care & nursing services in Wakad, Pune. Experienced, trained and trusted staff for newborn care, patient care, nursing caretakers and home help.",
      },
      {
        property: "og:title",
        content: "Nimbalk Nursing Bureau — Home Care & Nursing in Wakad, Pune",
      },
      {
        property: "og:description",
        content:
          "Service • Humanity • Trust. Experienced, trained and trusted staff available for your home care needs.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-24">
          <div className="min-w-0 animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1.5 text-xs font-bold text-primary">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {BRAND}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-5xl xl:text-6xl">
              Professional Home Care &amp; Nursing Services
            </h1>
            <p className="mt-3 text-lg font-bold text-primary sm:text-xl">
              Service • Humanity • Trust
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Experienced, trained and trusted staff available for your home care needs.
            </p>
            <p className="mt-2 text-base font-semibold text-foreground/80">{TAGLINE_MR}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={telHref(PRIMARY_PHONE)}
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl gradient-cta px-6 py-3.5 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-border bg-background px-6 py-3.5 text-base font-bold text-foreground shadow-soft transition-colors hover:border-primary/40 hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Contact Us
              </Link>
            </div>

            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {["Experienced Staff", "Trained Staff", "Trusted Service", "Compassionate Care"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="min-w-0">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
              <img
                src={heroImage}
                alt="Trained caregiver from Nimbalk Nursing Bureau supporting an elderly woman at home"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 rounded-2xl border border-border bg-card px-4 py-3 text-center text-sm font-semibold text-foreground/80 shadow-soft">
              {VALUES_MR}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-5">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-foreground/80 sm:text-base">
            <ShieldCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            {STAFF_MR}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="Care for every need at home"
          subtitle="Six dedicated home care services, delivered by experienced and trained staff."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-border bg-card px-6 text-sm font-bold shadow-soft transition-colors hover:border-primary/40 hover:text-primary"
          >
            View all services
          </Link>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Experienced, Trained & Trusted Staff"
            subtitle="Every placement is guided by service, humanity and trust."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="How It Works"
          title="Getting care at home is simple"
          subtitle="Four easy steps from your first call to care at your doorstep."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl gradient-cta text-sm font-extrabold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="pb-14 lg:pb-20">
        <ContactCta />
      </div>
    </>
  );
}
