"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  X,
  Sparkles,
  Hammer,
  Wrench,
  HelpCircle,
  MessageCircle,
  ArrowLeft
} from "lucide-react";
import {
  AI_REPAIR_TOPICS,
  AI_RENOVATION_TOPICS,
  generateMockRepairReport,
  generateMockRenovationReport,
  generateUnknownReport,
  type AiPreliminaryReport,
  type AiFlowType
} from "@/data/aiMockData";
import AiAssessmentForm from "./AiAssessmentForm";
import AiPreliminaryReportView from "./AiPreliminaryReportView";

type Step =
  | "flows"
  | "topic"
  | "form"
  | "report";

type Preset = { flow?: AiFlowType; topic?: string };

export default function AiPanel({
  open,
  onClose,
  preset
}: {
  open: boolean;
  onClose: () => void;
  preset?: Preset;
}) {
  const [step, setStep] = useState<Step>("flows");
  const [flow, setFlow] = useState<AiFlowType>("repair");
  const [topicId, setTopicId] = useState<string | null>(null);
  const [report, setReport] = useState<AiPreliminaryReport | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const mountedRef = useRef(false);

  // Imperatively set the transform so the browser doesn't get confused
  // by simultaneous parent-state changes (opacity / pointer-events) and
  // leave the sheet stuck at its previous matrix value.
  useLayoutEffect(() => {
    const el = sheetRef.current;
    if (!el) return;
    const target = open ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)";
    if (!mountedRef.current) {
      mountedRef.current = true;
      el.style.transition = "none";
      el.style.transform = target;
      void el.offsetHeight;
      el.style.transition = "transform 280ms cubic-bezier(0.32, 0.72, 0, 1)";
      return;
    }
    el.style.transform = target;
  }, [open]);

  // Apply preset whenever the panel opens with one
  useEffect(() => {
    if (!open || !preset) return;
    const { flow: pf, topic: pt } = preset;
    if (!pf && !pt) return;

    if (pf === "unknown") {
      setReport(generateUnknownReport());
      setStep("report");
      return;
    }

    if (pf) {
      setFlow(pf);
      if (pt) {
        setTopicId(pt);
        setStep("form");
      } else {
        setStep("topic");
      }
    } else if (pt) {
      // Topic without flow — try to infer
      const isRepair = AI_REPAIR_TOPICS.some((t) => t.id === pt);
      const isRenovation = AI_RENOVATION_TOPICS.some((t) => t.id === pt);
      if (isRepair) {
        setFlow("repair");
        setTopicId(pt);
        setStep("form");
      } else if (isRenovation) {
        setFlow("renovation");
        setTopicId(pt);
        setStep("form");
      }
    }
  }, [open, preset]);

  const reset = () => {
    setStep("flows");
    setFlow("repair");
    setTopicId(null);
    setReport(null);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 250);
  };

  const handleFlowSelect = (selected: AiFlowType) => {
    setFlow(selected);
    if (selected === "unknown") {
      setReport(generateUnknownReport());
      setStep("report");
    } else {
      setStep("topic");
    }
  };

  const handleTopicSelect = (id: string) => {
    setTopicId(id);
    setStep("form");
  };

  const handleSubmitForm = () => {
    if (!topicId) return;
    if (flow === "renovation") {
      setReport(generateMockRenovationReport(topicId));
    } else {
      setReport(generateMockRepairReport(topicId));
    }
    setStep("report");
  };

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[54] transition-opacity ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-omega-black/30 backdrop-blur-[2px]"
        onClick={handleClose}
      />
      <div
        ref={sheetRef}
        style={{ willChange: "transform", transform: "translate3d(0, 100%, 0)" }}
        className="absolute bottom-0 right-0 flex h-[100dvh] w-full flex-col bg-omega-cream shadow-elevated sm:right-4 sm:bottom-4 sm:h-[640px] sm:max-h-[calc(100dvh-32px)] sm:w-[440px] sm:rounded-2xl sm:border sm:border-omega-border"
      >
        <div className="flex items-center justify-between border-b border-omega-border px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-omega-orange">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-[13px] font-semibold leading-tight text-omega-charcoal">
                OMEGA AI
              </div>
              <div className="text-[11px] text-omega-grey">Instant Assessment</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {step !== "flows" && (
              <button
                onClick={() => {
                  if (step === "topic") setStep("flows");
                  else if (step === "form") setStep("topic");
                  else if (step === "report") reset();
                }}
                aria-label="Back"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-omega-grey hover:bg-omega-offwhite"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-omega-grey hover:bg-omega-offwhite"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {step === "flows" && (
            <div className="px-5 py-5">
              <p className="text-[13.5px] leading-relaxed text-omega-grey">
                Not sure what service you need? Describe the issue or upload media. OMEGA
                AI will guide you to the right service, inspection, quotation, or next step.
              </p>

              <div className="mt-5 space-y-2.5">
                <FlowOption
                  icon={<Hammer className="h-4 w-4" />}
                  title="Renovation Cost Approximation"
                  desc="Apartment, villa, kitchen, bathroom, fit-out, interior upgrade"
                  onClick={() => handleFlowSelect("renovation")}
                />
                <FlowOption
                  icon={<Wrench className="h-4 w-4" />}
                  title="Home Service Issue & Repair Cost"
                  desc="AC, plumbing, electrical, leaks, paint, gypsum, doors"
                  onClick={() => handleFlowSelect("repair")}
                />
                <FlowOption
                  icon={<HelpCircle className="h-4 w-4" />}
                  title="I'm not sure what I need"
                  desc="OMEGA will guide you or schedule an inspection"
                  onClick={() => handleFlowSelect("unknown")}
                />
                <a
                  href="/contact"
                  className="flex items-start gap-3 rounded-xl border border-omega-border bg-white p-3.5 hover:border-omega-charcoal/30"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-omega-offwhite text-omega-charcoal">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block text-[13.5px] font-medium text-omega-charcoal">
                      Speak to OMEGA Team
                    </span>
                    <span className="block text-[12px] text-omega-grey">
                      WhatsApp, call, or office contact
                    </span>
                  </span>
                </a>
              </div>
            </div>
          )}

          {step === "topic" && (
            <div className="px-5 py-5">
              <div className="eyebrow mb-2">Step 1 of 3</div>
              <h4 className="font-display text-xl text-omega-charcoal">
                {flow === "renovation"
                  ? "What are you planning to renovate?"
                  : "What is the issue?"}
              </h4>
              <div className="mt-4 grid gap-2">
                {(flow === "renovation" ? AI_RENOVATION_TOPICS : AI_REPAIR_TOPICS).map(
                  (t) => (
                    <button
                      key={t.id}
                      onClick={() => handleTopicSelect(t.id)}
                      className="flex w-full items-center justify-between rounded-xl border border-omega-border bg-white p-3.5 text-left hover:border-omega-charcoal/30"
                    >
                      <span className="text-[14px] text-omega-charcoal">
                        {t.label}
                      </span>
                      <span className="text-omega-grey">→</span>
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {step === "form" && topicId && (
            <AiAssessmentForm
              flow={flow}
              topicId={topicId}
              onSubmit={handleSubmitForm}
            />
          )}

          {step === "report" && report && (
            <AiPreliminaryReportView report={report} />
          )}
        </div>

        <div className="border-t border-omega-border bg-omega-cream px-5 py-3">
          <p className="text-[10.5px] leading-snug text-omega-grey">
            OMEGA AI provides preliminary guidance only. Final scope, cost, and execution
            method are confirmed by OMEGA after inspection or engineer review.
          </p>
        </div>
      </div>
    </div>
  );
}

function FlowOption({
  icon,
  title,
  desc,
  onClick
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-start gap-3 rounded-xl border border-omega-border bg-white p-3.5 text-left transition-all hover:border-omega-orange/40 hover:shadow-soft"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-omega-orange-soft text-omega-orange">
        {icon}
      </span>
      <span className="flex-1">
        <span className="block text-[13.5px] font-medium text-omega-charcoal">
          {title}
        </span>
        <span className="block text-[12px] text-omega-grey">{desc}</span>
      </span>
    </button>
  );
}
