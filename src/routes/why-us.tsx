import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { ContactCta } from "@/components/site/ContactCta";
import { VALUES_MR, WHY_US } from "@/lib/site";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Nimbalk Nursing Bureau, Wakad Pune" },
      {
        name: "description",
        content:
          "Experienced, trained and trusted staff, compassionate care and home care support — the reasons families in Wakad, Pune choose Nimbalk Nursing Bureau.",
      },
      { property: "og:title", content: "Why Choose Us — Nimbalk Nursing Bureau" },
      {
        property: "og:description",
        content: "Experienced staff, trained staff, trusted service and care given with humanity.",
      },
    ],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Why Choose Us</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Experienced, Trained &amp; Trusted Staff
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {VALUES_MR}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => (
            <li
              key={item.title}
              className="flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                <Check className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="text-base font-bold">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="pb-14 lg:pb-20">
        <ContactCta />
      </div>
    </>
  );
}
