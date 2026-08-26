import { MessageCircle } from "lucide-react";
import { waHref } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={waHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-foreground text-background shadow-lift transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
