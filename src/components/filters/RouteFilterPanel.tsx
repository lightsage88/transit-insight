import React from "react";
import { routes } from "../../shared/constants";

interface RouteFilterPanelProps {
  selectedRoutes: string[];
  onSelectionChange: (routes: string[]) => void;
}

export const RouteFilterPanel: React.FC<RouteFilterPanelProps> = ({
  selectedRoutes,
  onSelectionChange,
}) => {
  const toggleRoute = (id: string) => {
    const newSelection = selectedRoutes.includes(id)
      ? selectedRoutes.filter((x) => x !== id)
      : [...selectedRoutes, id];
    onSelectionChange(newSelection);
  };

  return (
    <div>
      <h2
        style={{
          fontSize: "0.9rem",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#9ca3af",
          marginTop: 0,
          marginBottom: "0.75rem",
        }}
      >
        Filters
      </h2>

      <div
        style={{
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#6b7280",
          marginBottom: "0.4rem",
        }}
      >
        Routes
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        {routes.map((route) => (
          <label
            key={route.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.85rem",
              color: "#e5e7eb",
            }}
          >
            <input
              type="checkbox"
              checked={selectedRoutes.includes(route.id)}
              onChange={() => toggleRoute(route.id)}
            />
            <span>{route.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
