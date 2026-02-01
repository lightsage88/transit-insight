import React from "react";

type Tone = "good" | "warning" | "bad";

interface MetricCardProps {
  label: string;
  value: string;
  tone?: Tone;
}

const toneColor: Record<Tone, string> = {
  good: "#22c55e",
  warning: "#fbbf24",
  bad: "#f97373",
};

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  tone = "good",
}) => {
  return (
    <div
      className="metric-card"
    >
      <div
        className="metric-label"
      
      >
        {label}
      </div>
      <div
        className="metric-value tone-warn"
      >
        {value}
      </div>
    </div>
  );
};
