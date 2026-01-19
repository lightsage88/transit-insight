import React from "react";
import { fetchVehiclesByRoutes } from "../api/trimetClient";

export function useVehicles(selectedRoutes: string[]) {
  const [vehicles, setVehicles] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!selectedRoutes.length) {
      setVehicles([]);
      return;
    }

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchVehiclesByRoutes(selectedRoutes);
        if (!cancelled) {
          setVehicles(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError((err as Error).message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    const interval = setInterval(load, 15_000); // refresh every 15s

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [selectedRoutes.join(",")]);

  return { vehicles, loading, error };
}
