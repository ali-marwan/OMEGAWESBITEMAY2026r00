"use client";

import { useState } from "react";
import { Camera, Mic, Video, Upload } from "lucide-react";
import type { AiFlowType } from "@/data/aiMockData";

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
          <div className="grid grid-cols-3 gap-2">
            <UploadButton icon={<Camera className="h-4 w-4" />} label="Photo" />
            <UploadButton icon={<Video className="h-4 w-4" />} label="Video" />
            <UploadButton icon={<Mic className="h-4 w-4" />} label="Voice" />
          </div>
          <p className="mt-1.5 text-[10.5px] text-omega-grey">
            Upload integration coming soon — for now, send media via WhatsApp and we'll
            attach it to your request.
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
  label
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="flex flex-col items-center justify-center gap-1 rounded-xl border border-omega-border bg-white px-2 py-3 text-[11.5px] font-medium text-omega-charcoal hover:border-omega-charcoal/30"
    >
      {icon}
      <span>{label}</span>
      <Upload className="hidden" />
    </button>
  );
}
