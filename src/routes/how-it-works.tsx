import { createFileRoute } from "@tanstack/react-router";

import { ContactCta } from "@/components/site/ContactCta";
import { STEPS, TAGLINE_MR } from "@/lib/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Nimbalk Nursing Bureau, Wakad Pune" },
      {
        name: "description",
        content:
          "Call us, share your home care requirement, and we arrange experienced, trained and trusted staff for care at your home in Wakad, Pune.",
      },
      { property: "og:title", content: "How It Works — Nimbalk Nursing Bureau" },
      {
        property: "og:description",
        content: "Four simple steps from your first call to trusted care at home.",
      },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">How It Works</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Simple steps to arrange care
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {TAGLINE_MR}
          </p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-cta text-base font-extrabold text-primary-foreground">
                {index + 1}
              </span>
              <h2 className="mt-4 text-base font-bold">{step.title}</h2>
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
