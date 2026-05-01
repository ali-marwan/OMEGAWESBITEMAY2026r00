"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Check,
  Camera,
  Video,
  Mic,
  ChevronRight,
  ChevronLeft,
  X
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import {
  MARKETPLACE_SERVICES,
  type MarketplaceService
} from "@/data/marketplaceServices";

type Mode = "booking" | "inspection" | "quote";

type SavedState = {
  step: number;
  serviceSlug: string;
  propertyType: string;
  community: string;
  unit: string;
  urgency: string;
  scope: string;
  name: string;
  phone: string;
  email: string;
};

const STEPS = [
  "Service",
  "Property",
  "Scope & media",
  "Contact",
  "Review"
];

export default function BookingFlow({
  mode,
  preselectedService
}: {
  mode: Mode;
  preselectedService?: string;
}) {
  const [step, setStep] = useState(0);
  const [serviceSlug, setServiceSlug] = useState(preselectedService ?? "");
  const [propertyType, setPropertyType] = useState("");
  const [community, setCommunity] = useState("");
  const [unit, setUnit] = useState("");
  const [urgency, setUrgency] = useState("medium");
  const [scope, setScope] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const storageKey = `omega:booking:${mode}:${preselectedService ?? "any"}`;

  // Hydrate from sessionStorage once on mount
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<SavedState>;
        if (saved.step !== undefined) setStep(saved.step);
        if (saved.serviceSlug && !preselectedService) setServiceSlug(saved.serviceSlug);
        if (saved.propertyType) setPropertyType(saved.propertyType);
        if (saved.community) setCommunity(saved.community);
        if (saved.unit) setUnit(saved.unit);
        if (saved.urgency) setUrgency(saved.urgency);
        if (saved.scope) setScope(saved.scope);
        if (saved.name) setName(saved.name);
        if (saved.phone) setPhone(saved.phone);
        if (saved.email) setEmail(saved.email);
      }
    } catch {
      // ignore parse errors
    }
    setHydrated(true);
  }, [storageKey, preselectedService]);

  // Persist on change (after hydration to avoid clobbering on mount)
  useEffect(() => {
    if (!hydrated) return;
    try {
      const data: SavedState = {
        step,
        serviceSlug,
        propertyType,
        community,
        unit,
        urgency,
        scope,
        name,
        phone,
        email
      };
      sessionStorage.setItem(storageKey, JSON.stringify(data));
    } catch {
      // ignore quota errors
    }
  }, [
    hydrated,
    step,
    serviceSlug,
    propertyType,
    community,
    unit,
    urgency,
    scope,
    name,
    phone,
    email,
    storageKey
  ]);

  const service: MarketplaceService | undefined = MARKETPLACE_SERVICES.find(
    (s) => s.slug === serviceSlug
  );

  const openFilePicker = (accept: string) => {
    if (!fileInputRef.current) return;
    fileInputRef.current.accept = accept;
    fileInputRef.current.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...list]);
    e.target.value = "";
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const titleMap: Record<Mode, string> = {
    booking: "Book a service",
    inspection: `Book Inspection — AED ${COMPANY.inspectionFee}`,
    quote: "Request a quotation"
  };

  const subtitleMap: Record<Mode, string> = {
    booking: "Direct booking with indicative pricing.",
    inspection: "An OMEGA technician attends, assesses, and shares an indicative scope.",
    quote: "Tell us the scope. We'll respond with a written quotation."
  };

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  if (confirmed) {
    // Clear saved state once confirmed
    if (typeof window !== "undefined") {
      try {
        sessionStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
    return (
      <div className="rounded-2xl border border-omega-orange/30 bg-omega-orange-soft/40 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-omega-orange text-white">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-5 font-display text-3xl text-omega-charcoal">
          Request received.
        </h2>
        <p className="mt-3 max-w-md mx-auto text-[14.5px] text-omega-grey">
          OMEGA will contact you shortly to confirm the visit, scope, or quotation. For
          urgent matters, WhatsApp{" "}
          <a
            href={COMPANY.whatsappHref}
            className="font-medium text-omega-orange"
            target="_blank"
            rel="noopener noreferrer"
          >
            {COMPANY.phone}
          </a>
          .
        </p>

        {mode === "inspection" && (
          <div className="mt-6 rounded-2xl border border-omega-border bg-white p-5 text-left">
            <div className="eyebrow-orange">Payment</div>
            <div className="mt-2 flex items-center justify-between text-[14px] text-omega-charcoal">
              <span>Inspection fee</span>
              <span className="font-medium">AED {COMPANY.inspectionFee}.00</span>
            </div>
            <div className="mt-3 text-[12px] text-omega-grey">
              Stripe payment integration is being prepared. For now, OMEGA will share a
              payment link directly when confirming the visit.
            </div>
            <Link
              href="/marketplace/checkout"
              className="btn-secondary btn-sm mt-4"
            >
              Open Checkout (preview)
            </Link>
          </div>
        )}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          <Link href="/marketplace" className="btn-secondary btn-sm">
            Back to Marketplace
          </Link>
          <Link href="/marketplace/orders" className="btn-ghost btn-sm">
            My requests
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-omega-border bg-white p-6 lg:p-8">
      <div className="eyebrow-orange">{mode.toUpperCase()}</div>
      <h2 className="display-md mt-3 text-balance text-omega-charcoal">
        {titleMap[mode]}
      </h2>
      <p className="mt-2 text-[14.5px] text-omega-grey">{subtitleMap[mode]}</p>

      <div className="mt-6 grid grid-cols-5 gap-1.5">
        {STEPS.map((s, i) => (
          <div
            key={s}
            className={`h-1 rounded-full ${
              i <= step ? "bg-omega-orange" : "bg-omega-border"
            }`}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px] uppercase tracking-eyebrow text-omega-grey">
        <span>Step {step + 1} of {STEPS.length}</span>
        <span>{STEPS[step]}</span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step < STEPS.length - 1) next();
          else setConfirmed(true);
        }}
        className="mt-6"
      >
        {step === 0 && (
          <div className="space-y-4">
            <div>
              <label className="label-base">Service</label>
              <select
                value={serviceSlug}
                onChange={(e) => setServiceSlug(e.target.value)}
                className="input-base"
                required={mode !== "inspection"}
              >
                <option value="">
                  {mode === "inspection" ? "General inspection (or pick a service)" : "Select a service…"}
                </option>
                {MARKETPLACE_SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title} ({s.category})
                  </option>
                ))}
              </select>
            </div>
            {service && (
              <div className="rounded-xl border border-omega-border bg-omega-offwhite p-4 text-[13px]">
                <div className="font-medium text-omega-charcoal">{service.title}</div>
                <div className="mt-1 text-omega-grey">{service.summary}</div>
                <div className="mt-2 text-[12px] text-omega-orange">
                  {service.startingPrice ?? "Quote on request"} · {service.duration}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="label-base">Property type</label>
              <select
                required
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="input-base"
              >
                <option value="">Select…</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Townhouse</option>
                <option>Office / Commercial</option>
                <option>Retail / Shop</option>
                <option>Restaurant / Clinic</option>
                <option>Other</option>
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label-base">Community / area</label>
                <input
                  required
                  value={community}
                  onChange={(e) => setCommunity(e.target.value)}
                  className="input-base"
                  placeholder="e.g. JVC, Marina, Downtown"
                />
              </div>
              <div>
                <label className="label-base">Building / unit</label>
                <input
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="input-base"
                  placeholder="e.g. Tower A, Apt 1502"
                />
              </div>
            </div>
            {mode !== "quote" && (
              <div>
                <label className="label-base">Urgency</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["low", "medium", "high"] as const).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUrgency(u)}
                      className={`rounded-xl border px-3 py-2 text-[12.5px] font-medium capitalize ${
                        urgency === u
                          ? "border-omega-orange bg-omega-orange-soft text-omega-orange"
                          : "border-omega-border bg-white text-omega-charcoal"
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="label-base">Describe the scope or issue</label>
              <textarea
                required
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                rows={5}
                className="input-base resize-none"
                placeholder="Tell OMEGA what you're seeing or planning…"
              />
            </div>
            <div>
              <label className="label-base">Add media (optional)</label>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="grid grid-cols-3 gap-2">
                <UploadButton
                  icon={<Camera className="h-4 w-4" />}
                  label="Photo"
                  onClick={() => openFilePicker("image/*")}
                />
                <UploadButton
                  icon={<Video className="h-4 w-4" />}
                  label="Video"
                  onClick={() => openFilePicker("video/*")}
                />
                <UploadButton
                  icon={<Mic className="h-4 w-4" />}
                  label="Voice"
                  onClick={() => openFilePicker("audio/*")}
                />
              </div>

              {files.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {files.map((f, i) => (
                    <li
                      key={`${f.name}-${i}`}
                      className="flex items-center justify-between rounded-lg border border-omega-border bg-omega-cream px-3 py-1.5 text-[12px] text-omega-charcoal"
                    >
                      <span className="truncate" title={f.name}>
                        {f.name}{" "}
                        <span className="text-omega-grey">
                          ({(f.size / 1024).toFixed(0)} KB)
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        aria-label={`Remove ${f.name}`}
                        className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-omega-grey hover:bg-white"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <p className="mt-2 text-[10.5px] text-omega-grey">
                Files are held locally for now — backend upload integration is being
                prepared. OMEGA will request media via WhatsApp during scheduling.
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label-base">Full name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-base"
                />
              </div>
              <div>
                <label className="label-base">Phone</label>
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-base"
                  placeholder="+971 …"
                />
              </div>
            </div>
            <div>
              <label className="label-base">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-base"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3 text-[13.5px] text-omega-charcoal">
            <ReviewLine label="Type" value={mode} />
            <ReviewLine
              label="Service"
              value={service?.title ?? "General inspection"}
            />
            <ReviewLine label="Property" value={`${propertyType} · ${community}${unit ? " · " + unit : ""}`} />
            {mode !== "quote" && (
              <ReviewLine label="Urgency" value={urgency} capitalize />
            )}
            <ReviewLine label="Scope" value={scope} />
            <ReviewLine label="Contact" value={`${name} · ${phone} · ${email}`} />
            {mode === "inspection" && (
              <div className="rounded-xl border border-omega-border bg-omega-cream p-4">
                <div className="flex items-center justify-between text-[13px] text-omega-charcoal">
                  <span>Inspection fee</span>
                  <span className="font-medium">AED {COMPANY.inspectionFee}.00</span>
                </div>
                <div className="mt-1.5 text-[11px] text-omega-grey">
                  Payment confirmed after OMEGA contacts you to schedule the visit.
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-7 flex items-center justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={prev}
              className="btn-ghost btn-sm"
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
          ) : (
            <span />
          )}
          <button type="submit" className="btn-primary btn-lg">
            {step === STEPS.length - 1 ? "Submit request" : "Continue"}
            {step < STEPS.length - 1 && <ChevronRight className="h-4 w-4" />}
          </button>
        </div>
      </form>
    </div>
  );
}

function UploadButton({
  icon,
  label,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-1 rounded-xl border border-omega-border bg-omega-cream px-2 py-3 text-[11.5px] font-medium text-omega-charcoal transition hover:border-omega-charcoal/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-omega-orange"
    >
      {icon}
      {label}
    </button>
  );
}

function ReviewLine({
  label,
  value,
  capitalize
}: {
  label: string;
  value: string;
  capitalize?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 border-b border-omega-border pb-2.5">
      <div className="w-28 text-[10.5px] font-medium uppercase tracking-eyebrow text-omega-grey">
        {label}
      </div>
      <div className={`flex-1 ${capitalize ? "capitalize" : ""}`}>{value}</div>
    </div>
  );
}
