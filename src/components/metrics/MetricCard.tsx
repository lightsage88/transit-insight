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
      style={{
        flex: 1,
        minWidth: 0,
        padding: "0.75rem 0.9rem",
        borderRadius: 12,
        border: "1px solid rgba(148, 163, 184, 0.3)",
        background:
          "radial-gradient(circle at top left, rgba(148, 163, 184, 0.16), rgba(15, 23, 42, 0.95))",
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "#9ca3af",
          marginBottom: "0.3rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "1.1rem",
          fontWeight: 600,
          color: toneColor[tone],
        }}
      >
        {value}
      </div>
    </div>
  );
};
