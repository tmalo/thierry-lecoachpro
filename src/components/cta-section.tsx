import { cn } from "@/lib/utils";
import Link from "next/link";
import Section from "./section";

type CtaSectionProps = {
  title?: string;
  description: string;
  quote?: boolean | undefined;
  children?: React.ReactNode;
};

type CtaButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  icon?: React.ReactNode;
  as?: "link" | "button";
  onClick?: () => void;
};

export function CtaSection({
  title,
  description,
  quote = false,
  children,
}: CtaSectionProps) {
  return (
    <Section style="primary" centered>
      {title && (
        <h2
          id="cta-title"
          className="font-montserrat mb-6 text-3xl font-bold md:text-4xl"
        >
          {title}
        </h2>
      )}

      {description &&
        (quote ? (
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="mb-8 text-2xl leading-relaxed font-light italic md:text-3xl">
              &ldquo;{description}&rdquo;
            </blockquote>
          </div>
        ) : (
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            {description}
          </p>
        ))}

      {children}
    </Section>
  );
}

export function CtaButton({
  href,
  children,
  variant = "solid",
  icon,
  as = "link",
  onClick,
}: CtaButtonProps) {
  const baseStyles =
    "font-montserrat inline-flex items-center gap-2 rounded-lg px-8 py-4 font-medium transition-colors";

  const variants = {
    solid: "bg-white text-primary hover:bg-gray-100",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-primary",
  };

  const className = cn(baseStyles, variants[variant]);

  if (as === "button") {
    return (
      <button className={className} onClick={onClick}>
        {icon}
        {children}
      </button>
    );
  }

  return (
    <Link href={href || "#"} className={className}>
      {children}
      {icon}
    </Link>
  );
}
