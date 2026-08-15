/**
 * ZELVRYQ — central site configuration.
 *
 * Values marked PLACEHOLDER must be replaced before launch.
 * Do not present placeholder values as verified company information.
 */

export const PLACEHOLDER_NOTE = "PLACEHOLDER — REPLACE BEFORE LAUNCH";

export const site = {
  name: "ZELVRYQ",
  tagline: "MAKE YOUR BRAND MATTER.",
  since: "SINCE 2026",
  positioning: ["DIGITAL", "CREATIVE", "WEB", "GROWTH"],
  description:
    "ZELVRYQ helps businesses build stronger brands and grow digitally through marketing, branding, creative, web development and technology solutions.",
  location: "Dehradun, Uttarakhand, India",
  market: "India + International",
  globalLine: "Based in Dehradun, India. Working with businesses globally.",
  phone: "7668691838",
  phoneDisplay: "+91 76686 91838",
  whatsappNumber: "917668691838",
  whatsappMessage: "Hi ZELVRYQ, I would like to discuss a project.",
  /** PLACEHOLDER — REPLACE BEFORE LAUNCH */
  email: "hello@example-demo.zelvryq",
  emailIsPlaceholder: true,
  /** PLACEHOLDER — REPLACE BEFORE LAUNCH */
  instagram: "#",
  /** PLACEHOLDER — REPLACE BEFORE LAUNCH */
  linkedin: "#",
  /** PLACEHOLDER — domain to be added before launch */
  domain: "",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const telHref = `tel:+91${site.phone}`;

export const nav = [
  { label: "HOME", to: "/" },
  { label: "SERVICES", to: "/services" },
  { label: "ABOUT", to: "/about" },
  { label: "WORK", to: "/work" },
  { label: "INDUSTRIES", to: "/industries" },
  { label: "PACKAGES", to: "/packages" },
  { label: "INSIGHTS", to: "/insights" },
  { label: "CONTACT", to: "/contact" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund / Cancellation Policy", to: "/terms" },
] as const;
