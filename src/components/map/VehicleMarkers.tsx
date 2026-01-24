import React from "react";
import { Source, Layer } from "react-map-gl/maplibre";

interface Vehicle {
  id: string;
  latitude: number;
  longitude: number;
  type: string;
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
          v.type === "rail" ? "train-icon" : "bus-icon",
        delay: v.delay,
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
    "circle-color": "#ff0000",
    "circle-stroke-width": 2,
    "circle-stroke-color": "#ffffff",
  }}
/>
    </Source>
  );
};
