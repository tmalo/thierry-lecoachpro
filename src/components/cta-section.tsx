import { cn } from "@/lib/utils";
import Link from "next/link";
import Section from "./section";

type CtaSectionProps = {
  variant?: "section" | "primary";
  title: string;
  description: string;
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
  variant = "section",
  title,
  description,
  children,
}: CtaSectionProps) {
  const Container =
    variant === "primary"
      ? ({ children }: { children: React.ReactNode }) => (
          <Section style="primary" centered>
            {children}
          </Section>
        )
      : ({ children }: { children: React.ReactNode }) => (
          <section
            className="bg-primary py-20 text-white"
            role="region"
            aria-labelledby="cta-title"
          >
            <div className="container-max section-padding text-center">
              {children}
            </div>
          </section>
        );

  return (
    <Container>
      <h2 className="font-montserrat mb-6 text-3xl font-bold md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
          {description}
        </p>
      )}

      {children}
    </Container>
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
