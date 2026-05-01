import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="OMEGA — home">
      <Image
        src="/omega-logo.svg"
        alt="OMEGA CFM"
        width={140}
        height={42}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}
