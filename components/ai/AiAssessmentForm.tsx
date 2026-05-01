"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, Mic, Video, X } from "lucide-react";
import type { AiFlowType } from "@/data/aiMockData";

type Saved = {
  propertyType: string;
  community: string;
  urgency: string;
  description: string;
};

export default function AiAssessmentForm({
  flow,
  topicId,
  onSubmit
}: {
  flow: AiFlowType;
  topicId: string;
  onSubmit: () => void;
}) {
  const [propertyType, setPropertyType] = useState("");
  const [community, setCommunity] = useState("");
  const [urgency, setUrgency] = useState("medium");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const storageKey = `omega:ai:${flow}:${topicId}`;

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<Saved>;
        if (saved.propertyType) setPropertyType(saved.propertyType);
        if (saved.community) setCommunity(saved.community);
        if (saved.urgency) setUrgency(saved.urgency);
        if (saved.description) setDescription(saved.description);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const data: Saved = { propertyType, community, urgency, description };
      sessionStorage.setItem(storageKey, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [hydrated, propertyType, community, urgency, description, storageKey]);

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

  return (
    <form
      className="px-5 py-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="eyebrow mb-2">Step 2 of 3 — Quick details</div>
      <h4 className="font-display text-xl text-omega-charcoal">
        Tell OMEGA AI a little more
      </h4>

      <div className="mt-4 space-y-3">
        <div>
          <label className="label-base">Property type</label>
          <select
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
          </select>
        </div>

        <div>
          <label className="label-base">Community / area (optional)</label>
          <input
            value={community}
            onChange={(e) => setCommunity(e.target.value)}
            placeholder="e.g. JVC, Dubai Marina, Downtown"
            className="input-base"
          />
        </div>

        {flow === "repair" && (
          <div>
            <label className="label-base">Urgency</label>
            <div className="grid grid-cols-3 gap-2">
              {(["low", "medium", "high"] as const).map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => setUrgency(u)}
                  className={`rounded-xl border px-3 py-2 text-[12.5px] font-medium capitalize transition ${
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

        <div>
          <label className="label-base">Describe the situation</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell OMEGA AI what you're seeing, hearing, or planning…"
            rows={4}
            className="input-base resize-none"
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
                  className="flex items-center justify-between rounded-lg border border-omega-border bg-white px-3 py-1.5 text-[12px] text-omega-charcoal"
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
                    className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-omega-grey hover:bg-omega-offwhite"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-1.5 text-[10.5px] text-omega-grey">
            Files held locally for now — backend upload integration is being prepared.
            OMEGA will request media via WhatsApp during scheduling.
          </p>
        </div>
      </div>

      <button type="submit" className="btn-primary btn-lg mt-5 w-full">
        Generate Preliminary Assessment
      </button>
    </form>
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
      className="flex flex-col items-center justify-center gap-1 rounded-xl border border-omega-border bg-white px-2 py-3 text-[11.5px] font-medium text-omega-charcoal transition hover:border-omega-charcoal/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-omega-orange"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
