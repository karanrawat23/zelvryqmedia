import { useState } from "react";
import { AlertTriangle, Send } from "lucide-react";
import { z } from "zod";

import { ActionButton } from "@/components/ActionButton";
import { site, whatsappHref } from "@/data/site";
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

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState<string | null>(null);

  const set = (key: keyof FormValues) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (event: React.FormEvent) => {
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
    setPrepared(summary);
  };

  return (
    <div>
      <div
        role="note"
        className="flex gap-3 border border-dashed border-gold/50 p-4 text-xs leading-relaxed text-muted-foreground"
      >
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
        <p>
          <strong className="text-gold">Internal note — PLACEHOLDER SETUP.</strong> No email, CRM or
          database delivery is configured yet, so this form does not claim a successful submission.
          Once a backend or inbox is connected, submissions will be stored and emailed. Until then,
          validated enquiries are prepared for WhatsApp so nothing is lost.
        </p>
      </div>

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
            Your inquiry is validated and ready to send
          </p>
          <p className="mt-2">
            Backend delivery is not configured yet, so we will not pretend this was submitted. Send
            the prepared summary over WhatsApp or call us directly — we respond quickly.
          </p>
          <pre className="mt-4 max-h-60 overflow-auto whitespace-pre-wrap border border-border bg-background p-4 text-xs">
            {prepared}
          </pre>
          <a
            href={`${whatsappHref.split("?")[0]}?text=${encodeURIComponent(prepared)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-12 items-center justify-center bg-gold-gradient px-7 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground"
          >
            Send on WhatsApp
          </a>
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
