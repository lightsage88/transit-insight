import React from "react";

interface VehicleTooltipProps {
  signMessage: string;
  garage: string;
  x: number;
  y: number;
}

export const VehicleTooltip: React.FC<VehicleTooltipProps> = ({
  signMessage,
  garage,
  x,
  y,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y - 100, // Position above the cursor/marker
        transform: "translateX(-50%)",
        background: "rgba(0, 0, 0, 0.85)",
        color: "white",
        padding: "8px 12px",
        borderRadius: "6px",
        pointerEvents: "none",
        fontSize: "14px",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
        whiteSpace: "nowrap",
      }}
    >
      <div style={{ marginBottom: "4px" }}>
        <strong>Sign:</strong> {signMessage || "N/A"}
      </div>
      <div>
        <strong>Garage:</strong> {garage || "N/A"}
      </div>
    </div>
  );
};
