import { tv, type VariantProps } from "tailwind-variants";

const sx = tv({
  base: "py-20",
  variants: {
    style: {
      gradient: "bg-gradient-to-br from-white to-gray-200",
      gray: "bg-gray-50",
      primary: "bg-primary text-white",
      white: "bg-white",
      none: "",
    },
  },
  defaultVariants: {
    style: "none",
  },
});

type SectionVariants = VariantProps<typeof sx>;

interface SectionProps extends SectionVariants {
  children: React.ReactNode;
  centered?: boolean | undefined;
  className?: string | undefined;
}

export default function Section({
  children,
  style = "none",
  centered = false,
  className = "",
}: SectionProps) {
  return (
    <section className={`${className} ${sx({ style })}`}>
      <div
        className={
          centered
            ? "container-max section-padding text-center"
            : "container-max section-padding"
        }
      >
        {children}
      </div>
    </section>
  );
}
