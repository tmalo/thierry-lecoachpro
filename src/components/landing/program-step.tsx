// components/landing/program-step.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProgramStepProps {
  week: string;
  title: string;
  duration: string;
  description: string;
  bullets?: string[];
  outcome: string;
  variant?: "primary" | "secondary";
}

export function ProgramStep({
  week,
  title,
  duration,
  description,
  bullets,
  outcome,
  variant = "primary",
}: ProgramStepProps) {
  const borderColor =
    variant === "primary" ? "border-l-primary" : "border-l-corail";
  const badgeClassName =
    variant === "primary"
      ? "bg-primary text-primary-foreground"
      : "bg-corail text-corail-foreground";
  const outcomeColor =
    variant === "primary" ? "text-primary" : "text-corail-foreground";

  return (
    <Card className={cn("border-l-4", borderColor)}>
      <CardContent className="p-8">
        <div className="mb-4 flex items-center gap-3">
          <Badge className={badgeClassName}>{week}</Badge>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <p className="text-muted-foreground mb-4 text-sm">{duration}</p>

        <p className="mb-4">{description}</p>

        {bullets && bullets.length > 0 && (
          <ul className="mb-4 ml-4 space-y-2">
            {bullets.map((bullet, index) => (
              <li key={index}>• {bullet}</li>
            ))}
          </ul>
        )}

        <p className={cn("font-semibold", outcomeColor)}>→ {outcome}</p>
      </CardContent>
    </Card>
  );
}
