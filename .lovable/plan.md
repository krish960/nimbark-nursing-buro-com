# Nimbalk Nursing Bureau — Professional Home Care Website

A premium, fully responsive healthcare website built only from the banner content. No content from any prior "Miracle" site, and only the three listed phone numbers.

## Pages

Each page is its own route with its own SEO title/description and social tags:

- `/` Home — hero, values strip, services preview, why choose us, how it works, contact CTA
- `/about` About Us — heading "सेवा हीच आमची ओळख" + short description built strictly from the banner's message (service, humanity, trust, experienced and trained staff, reliable home care). No invented history, years, certifications, awards, or partnerships.
- `/services` Our Services — all six cards
- `/why-us` Why Choose Us — the six trust points
- `/how-it-works` How It Works — Call → Tell us your requirement → Trained staff assigned → Care at home
- `/contact` Contact Us — "Need Reliable Home Care?", address, three tap-to-call numbers, WhatsApp, Get Directions

Shared header with logo wordmark and a mobile hamburger menu; footer with brand, location, phones.

## Services (exactly six, no additions)

New Born Baby Care · Baby Sitter · Maid / Home Work Assistance · Patient Care · Nursing Caretaker · Home Helper

Each card: healthcare icon, service name, one-line description, "Enquire Now" button (dials the primary number). Grid is 3 columns desktop, 2 tablet, 1 mobile.

## Content used

- Brand: Nimbalk Nursing Bureau
- Tagline: "सेवा हीच आमची ओळख..." / "Service • Humanity • Trust"
- Values line: "सेवा • माणुसकी • विश्वास हीच आमची प्रतिज्ञा"
- Staff: "अनुभवी, प्रशिक्षित आणि विश्वासू कर्मचारी उपलब्ध" / "Experienced, Trained & Trusted Staff Available"
- Location: दत्त मंदिर रोड, वाकड, पुणे / Datt Mandir Road, Wakad, Pune
- Phones: 7387788719, 8432687009, 7448259285

## Design

White + blue + green healthcare palette defined as semantic tokens (background, primary blue, accent green, soft surfaces), rounded cards, soft shadows, generous spacing, subtle scroll/hover animations. Modern typography pairing with clear Devanagari support for the Marathi lines. Warm, family-friendly home-care hero image generated for the project.

## Mobile behaviour

- Verified at 360 / 375 / 390 / 414px: no horizontal scroll, no overlap, no clipped text
- Hamburger nav, large tap targets, readable body size
- Sticky bottom bar with Call and WhatsApp
- `tel:` links on all three numbers, `wa.me` for WhatsApp, Google Maps link for directions
- Desktop layouts checked at 1280 / 1440 / 1920px

## Technical notes

- Routes under `src/routes/`; home replaces the placeholder `index.tsx`
- Color tokens added to `src/styles.css` in oklch under `@theme inline`; no hardcoded color utilities in components
- Shared data module for services, phones, and contact links so nothing is duplicated
- Fonts loaded via `<link>` in `__root.tsx`
- Reusable components: Header, Footer, MobileCallBar, ServiceCard, SectionHeading
- Static site, no backend needed
