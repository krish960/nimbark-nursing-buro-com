import { MessageCircle, Phone } from "lucide-react";
import { PRIMARY_PHONE, telHref, waHref } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={telHref(PRIMARY_PHONE)}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-primary text-base font-bold text-primary-foreground"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={waHref()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent text-base font-bold text-accent-foreground"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
