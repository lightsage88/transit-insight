import React from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";

export const TransitMap: React.FC = () => {

  return (
<div style={{ flex: 1, minHeight: 0, height: "100%", borderRadius: 16, overflow: "hidden" }}>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: -122.6765,
          latitude: 45.5231,
          zoom: 11,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://demotiles.maplibre.org/style.json"
      >
        {/* VehicleMarkers will go here soon */}
      </Map>
    </div>
  );
};
