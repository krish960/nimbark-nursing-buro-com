"use client";

import { useEffect, useState } from "react";
import { HeartPulse, X } from "lucide-react";
import { BRAND } from "@/lib/site";
import { InquiryForm } from "@/components/site/InquiryForm";

const SESSION_KEY = "nnb-inquiry-popup-seen";

export function InquiryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick inquiry"
      className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-md animate-rise">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute -right-2 -top-2 z-10 grid h-10 w-10 place-items-center rounded-full bg-foreground text-background shadow-lift transition-transform hover:scale-105"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
          <div className="flex items-center gap-3 gradient-cta px-6 py-4 text-primary-foreground">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-background/15">
              <HeartPulse className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold">{BRAND}</p>
              <p className="text-xs opacity-85">
                Need care at home? Send us a quick inquiry.
              </p>
            </div>
          </div>
          <div className="max-h-[70vh] overflow-y-auto">
            <InquiryForm onSent={close} />
          </div>
        </div>
      </div>
    </div>
  );
}
