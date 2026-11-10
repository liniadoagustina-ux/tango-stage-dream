import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  className,
  align = "left",
}: {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-8 md:mb-10 ${align === "center" ? "text-center" : ""} ${className ?? ""}`}>
      <div className={`flex items-center gap-4 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        {eyebrow && (
          <span className="font-serif text-sm tracking-[0.3em] text-primary shrink-0">{eyebrow}</span>
        )}
        <span className={eyebrow ? "h-px flex-1 max-w-24 bg-primary/30" : "h-px w-16 bg-primary"} />
      </div>
      <h2 className="font-serif text-4xl md:text-5xl text-balance leading-[1.05]">{children}</h2>
    </div>
  );
}
