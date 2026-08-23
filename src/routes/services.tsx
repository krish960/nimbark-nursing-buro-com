import { createFileRoute } from "@tanstack/react-router";

import { ContactCta } from "@/components/site/ContactCta";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICES, STAFF_MR } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Nimbalk Nursing Bureau, Wakad Pune" },
      {
        name: "description",
        content:
          "New born baby care, baby sitter, maid / home work assistance, patient care, nursing caretaker and home helper services in Wakad, Pune.",
      },
      { property: "og:title", content: "Our Services — Nimbalk Nursing Bureau" },
      {
        property: "og:description",
        content:
          "Six home care services delivered by experienced, trained and trusted staff in Wakad, Pune.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Our Services</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Home care services we provide
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {STAFF_MR}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <div className="pb-14 lg:pb-20">
        <ContactCta />
      </div>
    </>
  );
}
