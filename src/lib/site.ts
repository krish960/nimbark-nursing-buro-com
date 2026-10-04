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
export type SiteLanguage = "en" | "mr";

export const SITE_COPY = {
  en: {
    languageName: "English",
    nav: ["Home", "About Us", "Our Services", "Why Choose Us", "How It Works", "Contact Us"],
    comingSoon: "Coming Soon — New Services",
    upcoming: ["Election Services", "AC Repair & Service", "More Home Services"],
    heroTitle: "Professional Home Care & Nursing Services",
    serviceHumanityTrust: "Service • Humanity • Trust",
    heroDescription: "Experienced, trained and trusted staff available for your home care needs.",
    callNow: "Call Now",
    contactUs: "Contact Us",
    heroBenefits: ["Experienced Staff", "Trained Staff", "Trusted Service", "Compassionate Care"],
    aboutEyebrow: "About Us",
    aboutTitle: "Service is our identity",
    aboutParagraphOne:
      "Nimbark Nursing Bureau arranges dependable home care for families in Wakad, Pune. Our work rests on three simple commitments — service, humanity and trust.",
    aboutParagraphTwo:
      "From newborn baby care and baby sitting to patient care, nursing caretakers, home helpers and household work assistance, our staff support your family at home with patience and respect.",
    pillars: ["Service", "Humanity", "Trust"],
    pillarDescriptions: [
      "Every family we visit receives our full attention.",
      "We listen and care with kindness and respect.",
      "Dependable, respectful care is our promise.",
    ],
    servicesEyebrow: "Our Services",
    servicesTitle: "Care for every need at home",
    servicesSubtitle: "Six home care services, delivered by experienced and trained staff.",
    tapForInfo: "Tap for info",
    whyEyebrow: "Why Choose Us",
    whyTitle: "Experienced, Trained & Trusted Staff",
    howEyebrow: "How It Works",
    howTitle: "Getting care at home is simple",
    howSubtitle: "Four easy steps from your first call to care at your doorstep.",
    contactTitle: "Need Reliable Home Care?",
    contactDescription:
      "Experienced, trained and trusted staff available for your home care needs. Call us and we will help you today.",
    phoneNumbers: "Phone Numbers",
    directions: "Directions",
    location: "Our Location",
    getDirections: "Get Directions",
    quickInquiry: "Quick Inquiry",
    inquiryDescription: "Fill this form and your details go straight to WhatsApp.",
    yourName: "Your Name",
    yourPhone: "Your Phone",
    serviceNeeded: "Service Needed",
    optionalMessage: "Message (optional)",
    messagePlaceholder: "Tell us timings, location or any special need...",
    sendWhatsApp: "Send on WhatsApp",
    popupWelcome: "Need care at home? Send us a quick inquiry.",
    footerPages: "Pages",
    footerContact: "Contact",
    welcome: "Welcome!",
    portfolioIntro: "You are about to visit the portfolio of",
    portfolioReturn: "It opens in a new tab so you can easily return here.",
    visitPortfolio: "Visit Portfolio",
    backToSite: "Back to Site",
    close: "Close",
    serviceModalCall: "Call",
    whatsappUs: "WhatsApp Us",
  },
  mr: {
    languageName: "मराठी",
    nav: ["मुख्यपृष्ठ", "आमच्याबद्दल", "आमच्या सेवा", "आम्हालाच का निवडावे", "सेवा कशी मिळेल", "संपर्क"],
    comingSoon: "लवकरच — नवीन सेवा",
    upcoming: ["निवडणूक सेवा", "एसी दुरुस्ती व सेवा", "इतर गृहसेवा"],
    heroTitle: "घरगुती सेवा आणि नर्सिंग सेवा",
    serviceHumanityTrust: "सेवा • माणुसकी • विश्वास",
    heroDescription: "अनुभवी, प्रशिक्षित आणि विश्वासू कर्मचारी तुमच्या सेवेसाठी उपलब्ध.",
    callNow: "आत्ताच फोन करा",
    contactUs: "संपर्क करा",
    heroBenefits: ["अनुभवी कर्मचारी", "प्रशिक्षित कर्मचारी", "विश्वासू सेवा", "मायेने काळजी"],
    aboutEyebrow: "आमच्याबद्दल",
    aboutTitle: "सेवा हीच आमची ओळख",
    aboutParagraphOne:
      "निंबार्क नर्सिंग ब्युरो, वाकड, पुणे येथे कुटुंबांसाठी विश्वासार्ह घरगुती सेवा उपलब्ध करून देते. सेवा, माणुसकी आणि विश्वास ही आमची तीन वचने आहेत.",
    aboutParagraphTwo:
      "नवजात बाळाची काळजी, बेबीसिटर, रुग्णसेवा, नर्सिंग केअरटेकर, घरकाम आणि होम हेल्पर—तुमच्या कुटुंबाला घरच्या घरी मदत करण्यासाठी आमचे कर्मचारी तत्पर आहेत.",
    pillars: ["सेवा", "माणुसकी", "विश्वास"],
    pillarDescriptions: [
      "प्रत्येक कुटुंबाला आम्ही मनापासून सेवा देतो.",
      "आपुलकीने ऐकून आदराने काळजी घेतो.",
      "विश्वासार्ह आणि आदरपूर्वक सेवा हे आमचे वचन.",
    ],
    servicesEyebrow: "आमच्या सेवा",
    servicesTitle: "घरातील प्रत्येक गरजेसाठी सेवा",
    servicesSubtitle: "अनुभवी आणि प्रशिक्षित कर्मचाऱ्यांकडून सहा घरगुती सेवा.",
    tapForInfo: "माहितीसाठी पाहा",
    whyEyebrow: "आम्हालाच का निवडावे",
    whyTitle: "अनुभवी, प्रशिक्षित आणि विश्वासू कर्मचारी",
    howEyebrow: "सेवा कशी मिळेल",
    howTitle: "घरगुती सेवा मिळवणे सोपे आहे",
    howSubtitle: "फोनपासून घरच्या सेवांपर्यंत चार सोप्या पायऱ्या.",
    contactTitle: "विश्वासार्ह घरगुती सेवा हवी आहे?",
    contactDescription: "अनुभवी, प्रशिक्षित आणि विश्वासू कर्मचारी उपलब्ध. आजच फोन करा.",
    phoneNumbers: "फोन नंबर",
    directions: "दिशा पहा",
    location: "आमचे ठिकाण",
    getDirections: "दिशा पहा",
    quickInquiry: "चौकशी करा",
    inquiryDescription: "हा फॉर्म भरा; माहिती थेट WhatsApp वर पाठवली जाईल.",
    yourName: "तुमचे नाव",
    yourPhone: "तुमचा फोन नंबर",
    serviceNeeded: "हवी असलेली सेवा",
    optionalMessage: "संदेश (ऐच्छिक)",
    messagePlaceholder: "वेळ, ठिकाण किंवा विशेष गरज सांगा...",
    sendWhatsApp: "WhatsApp वर पाठवा",
    popupWelcome: "घरगुती सेवा हवी आहे? चौकशी पाठवा.",
    footerPages: "पाने",
    footerContact: "संपर्क",
    welcome: "स्वागत आहे!",
    portfolioIntro: "तुम्ही आता यांची पोर्टफोलिओ साइट पाहणार आहात:",
    portfolioReturn: "ती नवीन टॅबमध्ये उघडेल; त्यामुळे तुम्ही सहज परत येऊ शकता.",
    visitPortfolio: "पोर्टफोलिओ पहा",
    backToSite: "साइटवर परत",
    close: "बंद करा",
    serviceModalCall: "फोन करा",
    whatsappUs: "WhatsApp करा",
  },
} as const;

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
  nameMr: string;
  descriptionMr: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "new-born-baby-care",
    name: "New Born Baby Care",
    nameMr: "नवजात बाळाची काळजी",
    description:
      "Gentle, attentive care for newborns at home — feeding, bathing, sleep routines and round-the-clock support for the family.",
    descriptionMr: "नवजात बाळासाठी घरी प्रेमळ काळजी—खाऊ घालणे, अंघोळ, झोपेची दिनचर्या आणि कुटुंबाला मदत.",
    icon: Baby,
  },
  {
    slug: "baby-sitter",
    name: "Baby Sitter",
    nameMr: "बेबीसिटर",
    description:
      "Reliable baby sitters who keep your child safe, engaged and comfortable while you are away at work or travelling.",
    descriptionMr: "तुम्ही कामावर किंवा प्रवासात असताना बाळाची सुरक्षित आणि प्रेमळ काळजी.",
    icon: Sparkles,
  },
  {
    slug: "maid-home-work-assistance",
    name: "Maid / Home Work Assistance",
    nameMr: "मोलकरीण / घरकामासाठी मदत",
    description:
      "Trusted help for everyday household work so your home stays clean, organised and easy to run.",
    descriptionMr: "घर स्वच्छ आणि व्यवस्थित ठेवण्यासाठी रोजच्या घरकामात विश्वासू मदत.",
    icon: Home,
  },
  {
    slug: "patient-care",
    name: "Patient Care",
    nameMr: "रुग्णसेवा",
    description:
      "Compassionate bedside attendants for patients recovering at home, with careful attention to daily needs and comfort.",
    descriptionMr: "घरी उपचार घेणाऱ्या रुग्णांच्या दैनंदिन गरजा आणि आरामासाठी आपुलकीची मदत.",
    icon: HeartPulse,
  },
  {
    slug: "nursing-caretaker",
    name: "Nursing Caretaker",
    nameMr: "नर्सिंग केअरटेकर",
    description:
      "Trained nursing caretakers to support day and night care at home with patience, discipline and dignity.",
    descriptionMr: "घरी दिवसा किंवा रात्री मदतीसाठी प्रशिक्षित नर्सिंग केअरटेकर.",
    icon: Stethoscope,
  },
  {
    slug: "home-helper",
    name: "Home Helper",
    nameMr: "होम हेल्पर",
    description:
      "Dependable home helpers for elders and families who need a helping hand through the day.",
    descriptionMr: "दिवसभर मदतीची गरज असलेल्या ज्येष्ठ नागरिक आणि कुटुंबांसाठी विश्वासू मदत.",
    icon: UserRound,
  },
];

export const WHY_US = [
  {
    title: "Experienced Staff",
    titleMr: "अनुभवी कर्मचारी",
    description: "Caregivers who have handled real home-care situations with calm confidence.",
    descriptionMr: "घरगुती सेवांचा अनुभव असलेले कर्मचारी.",
  },
  {
    title: "Trained Staff",
    titleMr: "प्रशिक्षित कर्मचारी",
    description: "Staff trained for careful, respectful and hygienic care at home.",
    descriptionMr: "घरी काळजीपूर्वक, आदराने आणि स्वच्छतेने सेवा देण्यासाठी प्रशिक्षित.",
  },
  {
    title: "Trusted Service",
    titleMr: "विश्वासू सेवा",
    description: "Trust is our promise — विश्वास हीच आमची प्रतिज्ञा.",
    descriptionMr: "विश्वासार्ह सेवा हेच आमचे वचन.",
  },
  {
    title: "Compassionate Care",
    titleMr: "मायेची काळजी",
    description: "Care given with warmth, patience and genuine concern for the family.",
    descriptionMr: "कुटुंबाची मनापासून काळजी, मायेने आणि संयमाने.",
  },
  {
    title: "Home Care Support",
    titleMr: "घरगुती सेवा",
    description: "Support arranged right at your home, for babies, patients and elders.",
    descriptionMr: "बाळे, रुग्ण आणि ज्येष्ठांसाठी घरच्या घरी मदत.",
  },
  {
    title: "Service With Humanity",
    titleMr: "माणुसकीने सेवा",
    description: "माणुसकी first — we treat every family the way we would treat our own.",
    descriptionMr: "प्रत्येक कुटुंबाची आपल्याच कुटुंबाप्रमाणे काळजी.",
  },
];

export const STEPS = [
  {
    title: "Call Us",
    titleMr: "फोन करा",
    description: "Give us a call on any of our numbers and tell us what you need.",
    descriptionMr: "फोन करून तुम्हाला कोणती सेवा हवी आहे ते सांगा.",
  },
  {
    title: "Share Your Requirement",
    titleMr: "गरज सांगा",
    description: "Tell us the type of care, timings and preferences for your home.",
    descriptionMr: "सेவை, நேரம் आणि வீட்டில் என்ன मदत हवी ते सांगा.",
  },
  {
    title: "Staff Assigned",
    titleMr: "कर्मचारी उपलब्ध",
    description: "We arrange experienced, trained and trusted staff for your requirement.",
    descriptionMr: "तुमच्या गरजेनुसार अनुभवी, प्रशिक्षित आणि विश्वासू कर्मचारी देतो.",
  },
  {
    title: "Care At Home",
    titleMr: "घरच्या घरी सेवा",
    description: "Care begins at your home, with service, humanity and trust.",
    descriptionMr: "सेवा, माणुसकी आणि विश्वासासह तुमच्या घरी मदत सुरू होते.",
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
