import { MapPin, Globe } from "lucide-react";

interface RankingTypeToggleProps {
  value: "local" | "organic";
  onChange: (value: "local" | "organic") => void;
}

export function RankingTypeToggle({ value, onChange }: RankingTypeToggleProps) {
  return (
    <div className="w-full">
      <div className="inline-flex w-full md:w-auto rounded-lg bg-muted p-1" role="group">
        <button
          type="button"
          onClick={() => onChange("local")}
          data-testid="toggle-local-ranking"
          className={`
            flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium text-base transition-all
            ${value === "local" 
              ? "bg-background text-foreground shadow-sm" 
              : "text-muted-foreground hover-elevate"
            }
          `}
        >
          <MapPin className="h-5 w-5" />
          <span>Local Ranking</span>
        </button>
        <button
          type="button"
          onClick={() => onChange("organic")}
          data-testid="toggle-organic-ranking"
          className={`
            flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium text-base transition-all
            ${value === "organic" 
              ? "bg-background text-foreground shadow-sm" 
              : "text-muted-foreground hover-elevate"
            }
          `}
        >
          <Globe className="h-5 w-5" />
          <span>Organic Ranking</span>
        </button>
      </div>
    </div>
  );
}
