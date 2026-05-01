"use client";

export function Marquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-omega-border bg-omega-offwhite py-5">
      <div className="flex w-max animate-marquee gap-12">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 text-[12px] font-medium uppercase tracking-eyebrow text-omega-grey"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-omega-orange" />
          </span>
        ))}
      </div>
    </div>
  );
}
