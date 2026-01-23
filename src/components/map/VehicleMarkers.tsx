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
  // const geojson = {
  //   type: "FeatureCollection",
  //   features: vehicles.map((v) => ({
  //     type: "Feature",
  //     properties: {
  //       icon:
  //         v.routeType === "rail" ? "train-icon" : "bus-icon",
  //       delay: v.delay,
  //     },
  //     geometry: {
  //       type: "Point",
  //       coordinates: [v.lon, v.lat],
  //     },
  //   })),
  // };
  const geojson = {
    type: "FeatureCollection",
    features: vehicles.map((v: any) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [v.lon, v.lat], // lon, lat is correct
      },
      properties: {},
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
