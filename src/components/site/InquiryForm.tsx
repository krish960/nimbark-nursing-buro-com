import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { BRAND, PRIMARY_PHONE, SERVICES } from "@/lib/site";

type InquiryFormProps = {
  onSent?: () => void;
  plain?: boolean;
};

export function InquiryForm({ onSent, plain = false }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0]?.name ?? "");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = [
      `Hi, ${BRAND} team! New inquiry from your website:`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service Needed: ${service}`,
      message.trim() ? `Message: ${message.trim()}` : null,
      ``,
      `Please share details. Thank you!`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.open(
      `https://wa.me/91${PRIMARY_PHONE}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    onSent?.();
  };

  const inputClass =
    "min-h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        plain
          ? "p-5 sm:p-6"
          : "rounded-3xl border border-border bg-card p-6 shadow-soft"
      }
    >
      {!plain && (
        <>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary">
            <Send className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-bold">Quick Inquiry</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill this form and your details go straight to our WhatsApp.
          </p>
        </>
      )}

      <div className={plain ? "grid gap-3" : "mt-4 grid gap-3"}>
        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Your Name
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Patil"
            className={inputClass}
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Your Phone
          </span>
          <input
            required
            type="tel"
            inputMode="tel"
            pattern="[0-9+ ]{10,15}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 98765 43210"
            className={inputClass}
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Service Needed
          </span>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Message (optional)
          </span>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us timings, location or any special need..."
            className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
        </label>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-4 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}
