"use client";

import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import AiPanel from "./AiPanel";
import type { AiFlowType } from "@/data/aiMockData";

type Preset = { flow?: AiFlowType; topic?: string };

export default function FloatingOmegaAI() {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState<Preset>({});

  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<Preset>;
      setPreset(ce.detail ?? {});
      setOpen(true);
    };
    const close = () => setOpen(false);
    window.addEventListener("omega:open-ai", handler);
    window.addEventListener("omega:close-ai", close);

    const onHash = () => {
      if (window.location.hash === "#open-omega-ai") setOpen(true);
    };
    onHash();
    window.addEventListener("hashchange", onHash);

    return () => {
      window.removeEventListener("omega:open-ai", handler);
      window.removeEventListener("omega:close-ai", close);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close OMEGA AI" : "Open OMEGA AI"}
        onClick={() => setOpen((v) => !v)}
        className={`fixed bottom-6 right-6 z-[55] hidden items-center gap-2 rounded-full bg-omega-black px-4 py-3 text-white shadow-elevated transition-all hover:bg-omega-charcoal sm:inline-flex ${
          open ? "scale-95" : "scale-100"
        }`}
      >
        {open ? (
          <X className="h-4 w-4" />
        ) : (
          <>
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-omega-orange">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-white"></span>
            </span>
            <span className="text-[13px] font-medium">Ask OMEGA AI</span>
          </>
        )}
      </button>

      <AiPanel
        open={open}
        onClose={() => setOpen(false)}
        preset={preset}
      />
    </>
  );
}
