import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Users } from "lucide-react";

import aboutImage from "@/assets/about-care.jpg";
import { ContactCta } from "@/components/site/ContactCta";
import { BRAND, STAFF_EN, STAFF_MR, VALUES_MR } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Nimbalk Nursing Bureau, Wakad Pune" },
      {
        name: "description",
        content:
          "सेवा हीच आमची ओळख — Nimbalk Nursing Bureau provides reliable home care in Wakad, Pune with experienced, trained and trusted staff.",
      },
      { property: "og:title", content: "About Us — Nimbalk Nursing Bureau" },
      {
        property: "og:description",
        content:
          "Service, humanity and trust guide our home care: experienced and trained staff for babies, patients and elders.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: HeartHandshake,
    title: "Service",
    text: "Service is our identity — every family we visit receives our full attention.",
  },
  {
    icon: Users,
    title: "Humanity",
    text: "माणुसकी guides how our staff speak, listen and care inside your home.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Trust is our promise, kept through dependable and respectful care.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">About Us</p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              सेवा हीच आमची ओळख
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {BRAND} arranges dependable home care for families in Wakad, Pune. Our work rests on
              three simple commitments — service, humanity and trust.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {STAFF_EN}. From newborn baby care and baby sitting to patient care, nursing
              caretakers, home helpers and household work assistance, our staff step in with
              patience and respect so your family feels supported at home.
            </p>
            <p className="mt-4 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground/80">
              {VALUES_MR}
            </p>
            <p className="mt-3 text-sm font-semibold text-primary">{STAFF_MR}</p>
          </div>

          <div className="min-w-0 overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
            <img
              src={aboutImage}
              alt="Trained caregiver holding a newborn baby at home"
              width={1200}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                <pillar.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-14 lg:pb-20">
        <ContactCta />
      </div>
    </>
  );
}
