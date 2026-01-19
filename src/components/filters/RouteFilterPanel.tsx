import React from "react";

const mockRoutes = [
  { id: "4", name: "4 – Division/Fessenden" },
  { id: "14", name: "14 – Hawthorne" },
  { id: "72", name: "72 – Killingsworth/82nd" },
];

export const RouteFilterPanel: React.FC = () => {
  const [selected, setSelected] = React.useState<string[]>(mockRoutes.map(r => r.id));

  const toggleRoute = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
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
        {mockRoutes.map((route) => (
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
              checked={selected.includes(route.id)}
              onChange={() => toggleRoute(route.id)}
            />
            <span>{route.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
