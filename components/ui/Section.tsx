import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  bare
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bare?: boolean;
}) {
  return (
    <section id={id} className={cn(bare ? "" : "py-20 lg:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <div className="eyebrow-orange mb-4">{eyebrow}</div>}
      <h2 className="display-lg text-balance text-omega-charcoal">{title}</h2>
      {description && (
        <p className="mt-5 text-[16.5px] leading-relaxed text-omega-grey lg:text-[17.5px]">
          {description}
        </p>
      )}
    </div>
  );
}
