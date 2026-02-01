import React from "react";
import { MetricCard } from "./MetricCard";

export const MetricsBar: React.FC = () => {
  return (
    <div className="metrics-bar" style={{ display: "flex", gap: "0.75rem" }}>
      <MetricCard label="Avg Delay (last 15 min)" value="+2.4 min" tone="warning" />
      <MetricCard label="On-time Trips" value="88%" tone="good" />
      <MetricCard label="Routes w/ Major Issues" value="3" tone="bad" />
    </div>
  );
};
