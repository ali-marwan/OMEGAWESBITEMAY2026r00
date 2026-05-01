"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AskOmegaAiButton({
  className,
  variant = "secondary",
  label = "Ask OMEGA AI"
}: {
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  label?: string;
}) {
  const onClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("omega:open-ai"));
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
