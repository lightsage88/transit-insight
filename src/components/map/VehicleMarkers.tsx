import React from "react";
import { Source, Layer } from "react-map-gl/maplibre";

interface Vehicle {
  id: string;
  lat: number;
  lon: number;
//   routeType: "bus" | "rail";
routeType: string;
  delay: number;
}

interface Props {
  vehicles: Vehicle[];
}

export const VehicleMarkers: React.FC<Props> = ({ vehicles }) => {
  const geojson = {
    type: "FeatureCollection",
    features: vehicles.map((v) => ({
      type: "Feature",
      properties: {
        icon:
          v.routeType === "rail" ? "train-icon" : "bus-icon",
        delay: v.delay,
      },
      geometry: {
        type: "Point",
        coordinates: [v.lon, v.lat],
      },
    })),
  };

  return (
    <Source id="vehicles" type="geojson" data={geojson}>
      <Layer
        id="vehicle-icons"
        type="symbol"
        layout={{
          "icon-image": ["get", "icon"],
        //   "icon-size": [
        //     "interpolate",
        //     ["linear"],
        //     ["zoom"],
        //     10, 0.6,
        //     14, 1.1
        //   ],
          "icon-allow-overlap": true,
        }}
        paint={{
          "icon-color": [
            "case",
            [">", ["get", "delay"], 120], "#ef4444", // very late
            [">", ["get", "delay"], 60], "#f59e0b", // late
            "#22c55e" // on time
          ],
        }}
      />
    </Source>
  );
};
