import { useEffect, useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { ActionButton } from "@/components/ActionButton";
import { site, whatsappHref } from "@/data/site";
import { submitLead } from "@/lib/leads.functions";
import { cn } from "@/lib/utils";


const serviceOptions = [
  "Digital Marketing",
  "Social Media",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Branding",
  "Content",
  "Website",
  "E-commerce",
  "Web Application",
  "Mobile App",
  "Lead Generation",
  "Other",
];

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000+",
  "Not Sure",
];

const industryOptions = [
  "Education",
  "Restaurants & Cafes",
  "Real Estate",
  "Retail",
  "E-commerce",
  "Startups",
  "Healthcare",
  "Hospitality",
  "Professional Services",
  "Local Business",
  "Technology",
  "D2C Brand",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-()\s]+$/, "Phone can only contain digits and + - ( )"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  services: z.string().trim().min(1, "Select a service"),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Please describe your project in a little more detail")
    .max(2000),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  industry: "",
  services: "",
  budget: "",
  message: "",
};

const fieldClass =
  "mt-2 h-12 w-full border border-input bg-surface/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none";
const labelClass =
  "text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground";

const DRAFT_KEY = "zelvryq-inquiry-draft";

export function ContactForm() {
  const saveLead = useServerFn(submitLead);
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [saved, setSaved] = useState(false);


  // Restore an unfinished enquiry so a visitor never loses what they typed.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DRAFT_KEY);
      if (saved) setValues({ ...initial, ...(JSON.parse(saved) as Partial<FormValues>) });
    } catch {
      /* ignore unreadable drafts */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(values));
    } catch {
      /* storage unavailable */
    }
  }, [values]);

  const set = (key: keyof FormValues) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const v = result.data;
    const summary = [
      `Project inquiry — ${site.name}`,
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      `Phone: ${v.phone}`,
      v.company ? `Company: ${v.company}` : null,
      v.website ? `Website: ${v.website}` : null,
      v.industry ? `Industry: ${v.industry}` : null,
      `Services required: ${v.services}`,
      v.budget ? `Budget: ${v.budget}` : null,
      `Details: ${v.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    setSending(true);
    setSaved(false);
    try {
      await saveLead({
        data: {
          name: v.name,
          email: v.email,
          phone: v.phone,
          company: v.company ?? "",
          website: v.website ?? "",
          industry: v.industry ?? "",
          service: v.services,
          budget: v.budget ?? "",
          message: v.message,
        },
      });
      setSaved(true);
      try {
        window.localStorage.removeItem(DRAFT_KEY);
      } catch {
        /* storage unavailable */
      }
    } catch {
      setSaved(false);
    } finally {
      setSending(false);
      setPrepared(summary);
    }
  };


  return (
    <div>
      <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-6 md:grid-cols-2">
        <Field label="Name *" error={errors.name} id="name">
          <input
            id="name"
            className={fieldClass}
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Email *" error={errors.email} id="email">
          <input
            id="email"
            type="email"
            className={fieldClass}
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            autoComplete="email"
            required
          />
        </Field>
        <Field label="Phone *" error={errors.phone} id="phone">
          <input
            id="phone"
            type="tel"
            className={fieldClass}
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            autoComplete="tel"
            required
          />
        </Field>
        <Field label="Company" error={errors.company} id="company">
          <input
            id="company"
            className={fieldClass}
            value={values.company}
            onChange={(e) => set("company")(e.target.value)}
            autoComplete="organization"
          />
        </Field>
        <Field label="Website" error={errors.website} id="website">
          <input
            id="website"
            className={fieldClass}
            placeholder="example.com"
            value={values.website}
            onChange={(e) => set("website")(e.target.value)}
          />
        </Field>
        <Field label="Industry" error={errors.industry} id="industry">
          <select
            id="industry"
            className={cn(fieldClass, "appearance-none")}
            value={values.industry}
            onChange={(e) => set("industry")(e.target.value)}
          >
            <option value="">Select industry</option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Services required *" error={errors.services} id="services">
          <select
            id="services"
            className={cn(fieldClass, "appearance-none")}
            value={values.services}
            onChange={(e) => set("services")(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget (optional)" error={errors.budget} id="budget">
          <select
            id="budget"
            className={cn(fieldClass, "appearance-none")}
            value={values.budget}
            onChange={(e) => set("budget")(e.target.value)}
          >
            <option value="">Prefer not to say</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field label="Project description *" error={errors.message} id="message">
            <textarea
              id="message"
              rows={6}
              className={cn(fieldClass, "h-auto py-3 leading-relaxed")}
              value={values.message}
              onChange={(e) => set("message")(e.target.value)}
              required
            />
          </Field>
        </div>

        <div className="md:col-span-2">
          <ActionButton type="submit" variant="gold" size="lg">
            <Send className="h-4 w-4" aria-hidden="true" /> Send Project Inquiry
          </ActionButton>
        </div>
      </form>

      {prepared && (
        <div
          role="status"
          aria-live="polite"
          className="surface-panel mt-8 p-6 text-sm text-muted-foreground"
        >
          <p className="font-display text-base font-bold uppercase text-foreground">
            One last step — choose how to send it
          </p>
          <p className="mt-2">
            Your details are ready. Send them on WhatsApp for the fastest reply, or send by email if
            you prefer. We usually respond within one working day.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`${whatsappHref.split("?")[0]}?text=${encodeURIComponent(prepared)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 bg-gold-gradient px-7 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send on WhatsApp
            </a>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(
                `Project inquiry — ${site.name}`,
              )}&body=${encodeURIComponent(prepared)}`}
              className="inline-flex h-12 items-center justify-center gap-2 border border-gold/50 px-7 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold/10"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Send by Email
            </a>
          </div>
          <details className="mt-5">
            <summary className="cursor-pointer text-xs uppercase tracking-[0.16em] text-gold">
              Review your details
            </summary>
            <pre className="mt-3 max-h-60 overflow-auto whitespace-pre-wrap border border-border bg-background p-4 text-xs">
              {prepared}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
