"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AiFlowType } from "@/data/aiMockData";

export type AskAiPayload = {
  flow?: AiFlowType;
  topic?: string;
};

export default function AskOmegaAiButton({
  className,
  variant = "secondary",
  label = "Ask OMEGA AI",
  flow,
  topic
}: {
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  label?: string;
  flow?: AiFlowType;
  topic?: string;
}) {
  const onClick = () => {
    if (typeof window !== "undefined") {
      const detail: AskAiPayload = { flow, topic };
      window.dispatchEvent(new CustomEvent("omega:open-ai", { detail }));
    }
  };

  const cls =
    variant === "primary"
      ? "btn-primary"
      : variant === "dark"
      ? "btn-dark"
      : variant === "ghost"
      ? "btn-ghost"
      : "btn-secondary";

  return (
    <button onClick={onClick} className={cn(cls, className)}>
      <Sparkles className="h-4 w-4" />
      {label}
    </button>
  );
}
