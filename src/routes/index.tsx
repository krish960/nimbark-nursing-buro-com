import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import heroImage from "@/assets/hero-home-care.jpg";
import aboutImage from "@/assets/about-care.jpg";
import patientImage from "@/assets/patient-care.jpg";
import homeHelpImage from "@/assets/home-help.jpg";
import babySitterImage from "@/assets/baby-sitter.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import {
  ADDRESS_EN,
  ADDRESS_MR,
  BRAND,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONES,
  PRIMARY_PHONE,
  SERVICES,
  STAFF_EN,
  STAFF_MR,
  STEPS,
  TAGLINE_MR,
  VALUES_MR,
  WHY_US,
  formatPhone,
  telHref,
  waHref,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nimbalk Nursing Bureau" },
      {
        name: "description",
        content:
          "Professional home care & nursing services in Wakad, Pune. Experienced, trained and trusted staff for newborn care, baby sitting, patient care, nursing caretakers and home help.",
      },
      {
        property: "og:title",
        content: "Nimbalk Nursing Bureau",
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

const gallery = [
  {
    src: patientImage,
    alt: "Nursing caretaker supporting an elderly patient at home",
    title: "Patient Care & Nursing Caretaker",
    info: "We arrange trained nursing caretakers and bedside attendants for patients recovering at home. They help with daily needs, hygiene, mobility and comfort — with patience, discipline and dignity, day or night.",
  },
  {
    src: babySitterImage,
    alt: "Baby sitter playing with a toddler at home",
    title: "New Born Baby Care & Baby Sitter",
    info: "Our experienced baby sitters and newborn care staff look after feeding, bathing, sleep routines and safe play, so your child stays comfortable and cared for while you are at work or travelling.",
  },
  {
    src: homeHelpImage,
    alt: "Home helper assisting with household work",
    title: "Home Helper & Maid Assistance",
    info: "Trusted home helpers and maids take care of everyday household work and support elders through the day, keeping your home clean, organised and easy to run.",
  },
];

function HomePage() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? gallery[selected] : null;

  return (
    <>
      {/* HOME / HERO */}
      <section id="home" className="scroll-mt-24 overflow-hidden gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-24">
          <div className="min-w-0 animate-rise">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1.5 text-xs font-bold text-primary">
              <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{BRAND}</span>
            </span>
            <h1 className="mt-4 font-display text-[26px] font-extrabold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              Professional Home Care &amp; Nursing Services
            </h1>
            <p className="mt-3 text-base font-bold tracking-wide text-primary sm:text-xl">
              Service • Humanity • Trust
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
              Experienced, trained and trusted staff available for your home care needs.
            </p>
            <p className="mt-2 text-[15px] font-semibold text-foreground/80 sm:text-base">{TAGLINE_MR}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={telHref(PRIMARY_PHONE)}
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl gradient-cta px-6 py-3.5 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-border bg-background px-6 py-3.5 text-base font-bold text-foreground shadow-soft transition-colors hover:border-primary/40 hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Contact Us
              </a>
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
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
              <img
                src={heroImage}
                alt="Trained caregiver from Nimbalk Nursing Bureau supporting an elderly woman at home"
                width={1600}
                height={1200}
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
            <p className="mt-4 rounded-2xl border border-border bg-card px-4 py-3 text-center text-sm font-semibold text-foreground/80 shadow-soft">
              {VALUES_MR}
            </p>
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-surface py-5">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-foreground/80 sm:text-base">
            <ShieldCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            {STAFF_MR}
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="min-w-0 order-2 lg:order-1">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">About Us</p>
              <h2 className="mt-2 text-[22px] font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                सेवा हीच आमची ओळख
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {BRAND} arranges dependable home care for families in Wakad, Pune. Our work rests
                on three simple commitments — service, humanity and trust.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {STAFF_EN}. From newborn baby care and baby sitting to patient care, nursing
                caretakers, home helpers and household work assistance, our staff step in with
                patience and respect so your family feels supported at home.
              </p>
              <p className="mt-4 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground/80">
                {VALUES_MR}
              </p>
            </div>

            <div className="min-w-0 order-1 overflow-hidden rounded-3xl border border-border bg-card shadow-lift lg:order-2">
              <img
                src={aboutImage}
                alt="Trained caregiver holding a newborn baby at home"
                width={1200}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] h-auto w-full object-cover lg:aspect-square"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <pillar.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <button
                key={image.alt}
                type="button"
                onClick={() => setSelected(index)}
                aria-haspopup="dialog"
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card text-left shadow-soft transition-shadow hover:shadow-lift"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-2xl bg-foreground/70 px-4 py-2.5 text-sm font-bold text-background backdrop-blur-sm">
                  <span className="truncate">{image.title}</span>
                  <span className="shrink-0 text-xs font-semibold opacity-80">Tap for info</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="scroll-mt-24 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Experienced, Trained & Trusted Staff"
            subtitle={VALUES_MR}
          />
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
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-24 bg-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-cta text-base font-extrabold text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border gradient-hero p-6 shadow-soft sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="min-w-0">
                <h2 className="text-[22px] font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                  Need Reliable Home Care?
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Experienced, trained and trusted staff available for your home care needs. Call us
                  and we will help you today.
                </p>
                <p className="mt-4 text-lg font-bold">{BRAND}</p>
                <p className="mt-1 flex items-start gap-2 text-sm text-foreground/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    {ADDRESS_MR}
                    <br />
                    {ADDRESS_EN}
                  </span>
                </p>
              </div>

              <div className="min-w-0 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  Phone Numbers
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {PHONES.map((phone) => (
                    <li key={phone}>
                      <a
                        href={telHref(phone)}
                        className="flex min-h-12 items-center gap-3 rounded-2xl border border-border bg-background px-4 text-base font-bold transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span className="truncate">{formatPhone(phone)}</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                  <a
                    href={telHref(PRIMARY_PHONE)}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Now
                  </a>
                  <a
                    href={waHref()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-background px-4 text-sm font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <iframe
                title="Nimbalk Nursing Bureau location — Datt Mandir Road, Wakad, Pune"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 sm:h-80 lg:h-full lg:min-h-72"
              />
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">Our Location</h3>
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
                <h3 className="mt-4 text-lg font-bold">Talk To Us</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Tell us the type of care you need — newborn baby care, baby sitter, household work
                  assistance, patient care, nursing caretaker or home helper — and we will arrange
                  experienced, trained and trusted staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/60 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-card shadow-lift animate-rise"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <img
                src={active.src}
                alt={active.alt}
                width={1200}
                height={912}
                className="aspect-[16/10] h-auto w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-foreground shadow-soft transition-transform hover:scale-105"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl leading-tight">{active.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {active.info}
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={telHref(PRIMARY_PHONE)}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl gradient-cta px-4 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {formatPhone(PRIMARY_PHONE)}
                </a>
                <a
                  href={waHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-accent px-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
