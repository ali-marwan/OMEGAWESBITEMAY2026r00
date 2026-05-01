"use client";

import { Sparkles, Image as ImageIcon, Mic, Video } from "lucide-react";
import { Section } from "@/components/ui/Section";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";

export default function AiPrompt() {
  return (
    <Section className="border-y border-omega-border bg-omega-black text-white">
      <div className="container-edge">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow text-white/80">
              <Sparkles className="h-3 w-3 text-omega-orange" />
              OMEGA AI · Instant Assessment
            </div>

            <h2 className="display-lg mt-5 text-balance">
              AI property assessment <span className="italic text-white/60">before</span>{" "}
              you repair, renovate, approve, or execute work.
            </h2>

            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
              Describe the issue, share photos or a short video, and OMEGA AI will route
              you to the right service, indicate a cost range, flag risks, and get you to
              the next step — inspection, quotation, or direct booking.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <AskOmegaAiButton
                variant="primary"
                className="btn-lg"
                label="Open OMEGA AI"
              />
              <a
                href="/marketplace/inspection"
                className="btn btn-lg border border-white/15 text-white hover:bg-white/10"
              >
                Book Inspection — AED 100
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/60">
              <span className="flex items-center gap-2">
                <ImageIcon className="h-3.5 w-3.5" /> Photo
              </span>
              <span className="flex items-center gap-2">
                <Video className="h-3.5 w-3.5" /> Video
              </span>
              <span className="flex items-center gap-2">
                <Mic className="h-3.5 w-3.5" /> Voice note
              </span>
              <span className="flex items-center gap-2">
                Text description
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="space-y-3">
              <ChatLine
                role="you"
                text="Some areas of my balcony tile are darker than others, and I see a faint stain on the ceiling below."
              />
              <ChatLine
                role="omega-ai"
                text="That's consistent with early waterproofing failure on a balcony. Recommended action: leak detection visit. We'll trace the source before any cosmetic repair."
                tags={["Leak Detection", "Medium urgency", "AED 299–1,500"]}
              />
              <ChatLine
                role="you"
                text="What if it's the unit above me?"
              />
              <ChatLine
                role="omega-ai"
                text="Inform building management and we'll coordinate. Until source is confirmed, hold off on repainting — it'll come back."
              />
            </div>
            <div className="mt-5 rounded-xl bg-white/5 p-3 text-[10.5px] leading-snug text-white/50">
              Preliminary AI guidance only. Final scope, cost, and execution method are
              confirmed by OMEGA after inspection or engineer review.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ChatLine({
  role,
  text,
  tags
}: {
  role: "you" | "omega-ai";
  text: string;
  tags?: string[];
}) {
  const isUser = role === "you";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl p-3.5 ${
          isUser
            ? "bg-white/10 text-white"
            : "border border-omega-orange/30 bg-omega-orange/15 text-white"
        }`}
      >
        <div
          className={`mb-1 text-[10.5px] font-medium uppercase tracking-eyebrow ${
            isUser ? "text-white/50" : "text-omega-orange"
          }`}
        >
          {isUser ? "You" : "OMEGA AI"}
        </div>
        <div className="text-[13.5px] leading-relaxed">{text}</div>
        {tags && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-2 py-0.5 text-[10.5px]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
