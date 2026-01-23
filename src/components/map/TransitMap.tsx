import React, { useRef } from "react";
import Map, { Source, Layer } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import busIcon from '../../assets/icons/bus.svg';
import trainIcon from '../../assets/icons/train.svg';
import { VehicleMarkers } from "./VehicleMarkers";
console.log(import.meta.env);

const map_key = import.meta.env.VITE_MAP_TILER_API_KEY;

const mockVehicles = [
  {
    id: "1",
    lat: 45.523,
    lon: -122.676,
    routeType: "bus",
    delay: 30,
  },
  {
    id: "2",
    lat: 45.51,
    lon: -122.69,
    routeType: "rail",
    delay: 180,
  },
];

export const TransitMap: React.FC = () => {
    const mapRef = useRef<any>(null);

    const handleLoad = () => {
        const map = mapRef.current?.getMap();
        if (!map) return;
    
        if (!map.hasImage("bus-icon")) {
          map.loadImage(busIcon, (err, image) => {
            if (!err && image) map.addImage("bus-icon", image);
          });
        }
    
        if (!map.hasImage("train-icon")) {
          map.loadImage(trainIcon, (err, image) => {
            if (!err && image) map.addImage("train-icon", image);
          });
        }
      };

  return (
<div style={{ flex: 1, height: "100%", borderRadius: 16, overflow: "hidden" }}>
      <Map
        mapLib={maplibregl}
        onLoad={handleLoad}
        initialViewState={{
          longitude: -122.6765,
          latitude: 45.5231,
          zoom: 13,
        }}
        style={{ width: 1000, height: 1000 }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${map_key}`}
      >
        <VehicleMarkers vehicles={mockVehicles} />
      </Map>
    </div>
  );
};
