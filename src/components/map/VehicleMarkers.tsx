import React from "react";
import { Source, Layer } from "react-map-gl/maplibre";

interface Vehicle {
  id: string;
  latitude: number;
  longitude: number;
  type: string;
  delay: number;
  signMessage?: string;
  garage?: string;
  routeNumber?: number;
  routeColor?: string;
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
          v.type === "rail" ? "train-icon" : "bus-icon",
        delay: v.delay,
        signMessage: v.signMessage,
        garage: v.garage,
        vehicleType: v.type,
        routeColor: v.routeColor,
        routeNumber: v.routeNumber,
      },
      geometry: {
        type: "Point",
        coordinates: [v.longitude, v.latitude],
      },
    })),
  };

  console.log('Vehicle markers vehicles:', vehicles);

  return (
    <Source id="vehicles" type="geojson" data={geojson}>
      <Layer
  id="vehicle-debug-circles"
  type="circle"
  paint={{
    "circle-radius": 16,
    "circle-color": [
      "case",
      ["all",
        ["==", ["get", "vehicleType"], "rail"],
        ["has", "routeColor"]
      ],
      ["concat", "#", ["get", "routeColor"]],
      ["==", ["get", "vehicleType"], "bus"],
      "#ff6b35",
      "#ff0000"
    ],
    "circle-stroke-width": 2,
    "circle-stroke-color": "#ffffff",
  }}
/>
      <Layer
        id="vehicle-labels"
        type="symbol"
        layout={{
          "text-field": [
            "case",
            ["==", ["get", "vehicleType"], "rail"],
            "MAX",
            ["to-string", ["get", "routeNumber"]]
          ],
          "text-size": 10,
          "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
          "text-anchor": "center",
        }}
        paint={{
          "text-color": "#ffffff",
        }}
      />
    </Source>
  );
};
