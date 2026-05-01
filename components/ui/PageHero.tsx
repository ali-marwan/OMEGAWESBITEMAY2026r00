export default function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  small = false
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  small?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-omega-border bg-omega-cream">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className={`container-edge relative ${
          small ? "py-14 lg:py-20" : "py-20 lg:py-28"
        } ${align === "center" ? "text-center" : ""}`}
      >
        {eyebrow && <div className="eyebrow-orange mb-4">{eyebrow}</div>}
        <h1
          className={`${
            small ? "display-md" : "display-lg"
          } max-w-4xl text-balance text-omega-charcoal ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-5 max-w-2xl text-[16.5px] leading-relaxed text-omega-grey lg:text-[18px] ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
