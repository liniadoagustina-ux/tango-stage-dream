import type { ReactNode } from "react";

export function SectionHeading({
  children,
  className,
  align = "left",
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-8 md:mb-10 ${align === "center" ? "text-center" : ""} ${className ?? ""}`}>
      <div className={`flex items-center gap-4 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-16 bg-primary" />
      </div>
      <h2 className="font-serif font-bold italic text-primary text-glow-gold text-5xl md:text-6xl text-balance leading-[1.05]">{children}</h2>
    </div>
  );
}
