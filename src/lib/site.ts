import {
  Baby,
  HeartPulse,
  Home,
  Stethoscope,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export const BRAND = "Nimbark Nursing Bureau";
export const TAGLINE_MR = "सेवा हीच आमची ओळख...";
export const VALUES_MR = "सेवा • माणुसकी • विश्वास हीच आमची प्रतिज्ञा";
export const VALUES_EN = "Service • Humanity • Trust";
export const STAFF_MR = "अनुभवी, प्रशिक्षित आणि विश्वासू कर्मचारी उपलब्ध";
export const STAFF_EN = "Experienced, Trained & Trusted Staff Available";

export const ADDRESS_MR = "दत्त मंदिर रोड, वाकड, पुणे";
export const ADDRESS_EN = "Datt Mandir Road, Wakad, Pune";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Datt+Mandir+Road+Wakad+Pune";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Datt+Mandir+Road,+Wakad,+Pune&output=embed";

export const PHONES = ["7387788719"] as const;
export const PRIMARY_PHONE = PHONES[0];

export const telHref = (phone: string) => `tel:+91${phone}`;

export const WHATSAPP_MESSAGE = `Hi, ${BRAND} team! I saw your website and I need home care / nursing services at my home in Pune. Please share details. — Thank you`;

export const waHref = (phone: string = PRIMARY_PHONE) =>
  `https://wa.me/91${phone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const formatPhone = (phone: string) =>
  `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;

export type Service = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "new-born-baby-care",
    name: "New Born Baby Care",
    description:
      "Gentle, attentive care for newborns at home — feeding, bathing, sleep routines and round-the-clock support for the family.",
    icon: Baby,
  },
  {
    slug: "baby-sitter",
    name: "Baby Sitter",
    description:
      "Reliable baby sitters who keep your child safe, engaged and comfortable while you are away at work or travelling.",
    icon: Sparkles,
  },
  {
    slug: "maid-home-work-assistance",
    name: "Maid / Home Work Assistance",
    description:
      "Trusted help for everyday household work so your home stays clean, organised and easy to run.",
    icon: Home,
  },
  {
    slug: "patient-care",
    name: "Patient Care",
    description:
      "Compassionate bedside attendants for patients recovering at home, with careful attention to daily needs and comfort.",
    icon: HeartPulse,
  },
  {
    slug: "nursing-caretaker",
    name: "Nursing Caretaker",
    description:
      "Trained nursing caretakers to support day and night care at home with patience, discipline and dignity.",
    icon: Stethoscope,
  },
  {
    slug: "home-helper",
    name: "Home Helper",
    description:
      "Dependable home helpers for elders and families who need a helping hand through the day.",
    icon: UserRound,
  },
];

export const WHY_US = [
  {
    title: "Experienced Staff",
    description: "Caregivers who have handled real home-care situations with calm confidence.",
  },
  {
    title: "Trained Staff",
    description: "Staff trained for careful, respectful and hygienic care at home.",
  },
  {
    title: "Trusted Service",
    description: "Trust is our promise — विश्वास हीच आमची प्रतिज्ञा.",
  },
  {
    title: "Compassionate Care",
    description: "Care given with warmth, patience and genuine concern for the family.",
  },
  {
    title: "Home Care Support",
    description: "Support arranged right at your home, for babies, patients and elders.",
  },
  {
    title: "Service With Humanity",
    description: "माणुसकी first — we treat every family the way we would treat our own.",
  },
];

export const STEPS = [
  {
    title: "Call Us",
    description: "Give us a call on any of our numbers and tell us what you need.",
  },
  {
    title: "Share Your Requirement",
    description: "Tell us the type of care, timings and preferences for your home.",
  },
  {
    title: "Staff Assigned",
    description: "We arrange experienced, trained and trusted staff for your requirement.",
  },
  {
    title: "Care At Home",
    description: "Care begins at your home, with service, humanity and trust.",
  },
];

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact Us" },
] as const;
