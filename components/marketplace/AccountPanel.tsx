"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Lock,
  ShoppingBag,
  FileText,
  Building2,
  Sparkles,
  MessageCircle
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/constants";

export default function AccountPanel() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <Section bare className="py-14 lg:py-20">
      <div className="container-edge">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-omega-border bg-white p-6 lg:p-8">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMode("login")}
                  className={`text-[13.5px] font-medium ${
                    mode === "login"
                      ? "text-omega-charcoal"
                      : "text-omega-grey"
                  }`}
                >
                  Log in
                </button>
                <span className="text-omega-grey">·</span>
                <button
                  onClick={() => setMode("signup")}
                  className={`text-[13.5px] font-medium ${
                    mode === "signup"
                      ? "text-omega-charcoal"
                      : "text-omega-grey"
                  }`}
                >
                  Create account
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Authentication is not yet enabled. Use the contact form or WhatsApp for now."
                  );
                }}
                className="mt-6 space-y-4"
              >
                {mode === "signup" && (
                  <div>
                    <label className="label-base">Full name</label>
                    <input required className="input-base" />
                  </div>
                )}
                <div>
                  <label className="label-base">Email or phone</label>
                  <input required className="input-base" />
                </div>
                <div>
                  <label className="label-base">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-omega-grey" />
                    <input
                      required
                      type="password"
                      className="input-base pl-9"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary btn-lg w-full">
                  {mode === "login" ? "Log in" : "Create account"}
                </button>
                <p className="text-center text-[11.5px] text-omega-grey">
                  Authentication will be enabled soon. For now, please contact OMEGA
                  directly via WhatsApp or the contact form.
                </p>
              </form>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href={COMPANY.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn-sm justify-center"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <Link href="/contact" className="btn-ghost btn-sm justify-center">
                  Contact form
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-omega-border bg-omega-cream p-6 lg:p-8">
              <div className="eyebrow-orange">YOUR ACCOUNT WILL INCLUDE</div>
              <h2 className="display-md mt-3 text-balance text-omega-charcoal">
                Everything you and OMEGA need —{" "}
                <span className="italic text-omega-grey">in one place.</span>
              </h2>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Feature
                  icon={<ShoppingBag className="h-4 w-4" />}
                  title="Service requests"
                  body="View and track every booking, inspection, or quotation request."
                />
                <Feature
                  icon={<FileText className="h-4 w-4" />}
                  title="Inspection reports"
                  body="Brief written reports from each OMEGA visit — kept on file."
                />
                <Feature
                  icon={<Building2 className="h-4 w-4" />}
                  title="Saved properties"
                  body="Your apartment, villa, or office — recall details with one click."
                />
                <Feature
                  icon={<Sparkles className="h-4 w-4" />}
                  title="AI assessment history"
                  body="Past OMEGA AI conversations and recommendations, archived."
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Link href="/marketplace/orders" className="btn-secondary btn-sm">
                  Preview my requests
                </Link>
                <Link href="/marketplace" className="btn-ghost btn-sm">
                  Open Marketplace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Feature({
  icon,
  title,
  body
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-omega-border bg-white p-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-omega-orange-soft text-omega-orange">
        {icon}
      </span>
      <div className="mt-3 text-[14px] font-medium text-omega-charcoal">{title}</div>
      <div className="mt-1 text-[12.5px] text-omega-grey">{body}</div>
    </div>
  );
}
