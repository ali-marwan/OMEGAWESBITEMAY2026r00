"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const INQUIRY_TYPES = [
  "Marketplace / Service Request",
  "Renovation / Quotation",
  "AMC / Property Care",
  "Engineering / Drawings",
  "OMEGA AI Property Intelligence Platform (Corporate)",
  "General"
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-omega-orange/30 bg-omega-orange-soft/40 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-omega-orange text-white">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-2xl text-omega-charcoal">
          Thank you. Message received.
        </h3>
        <p className="mt-2 max-w-md mx-auto text-[14px] text-omega-grey">
          OMEGA will reach out shortly. For urgent matters, please WhatsApp us at{" "}
          <a href="https://wa.me/971566605596" className="font-medium text-omega-orange">
            +971 56 660 5596
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary btn-sm mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to backend / CRM later
        setSubmitted(true);
      }}
      className="rounded-2xl border border-omega-border bg-white p-6 lg:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label-base">Full name</label>
          <input required className="input-base" placeholder="Your name" />
        </div>
        <div>
          <label className="label-base">Phone</label>
          <input
            required
            type="tel"
            className="input-base"
            placeholder="+971 …"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label-base">Email</label>
          <input
            required
            type="email"
            className="input-base"
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label-base">Inquiry type</label>
          <select required className="input-base">
            <option value="">Select…</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="label-base">Message</label>
          <textarea
            required
            rows={5}
            className="input-base resize-none"
            placeholder="Tell OMEGA what you need…"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary btn-lg mt-5 w-full sm:w-auto">
        Send message
      </button>

      <p className="mt-4 text-[11.5px] leading-snug text-omega-grey">
        By submitting, you agree to be contacted by OMEGA via phone, WhatsApp, or email
        regarding your request. We do not share your details with third parties.
      </p>
    </form>
  );
}
