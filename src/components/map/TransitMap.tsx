import React, { useRef } from "react";
import Map, { Source, Layer } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import busIcon from '../../assets/icons/bus.svg';
import trainIcon from '../../assets/icons/train.svg';
import { VehicleMarkers } from "./VehicleMarkers";
import { useVehicles } from "../../hooks/useVehicles";
console.log(import.meta.env);

const map_key = import.meta.env.VITE_MAP_TILER_API_KEY;

interface TransitMapProps {
  selectedRoutes: string[];
}

export const TransitMap: React.FC<TransitMapProps> = ({ selectedRoutes }) => {
    const mapRef = useRef<any>(null);
    const { vehicles, loading, error } = useVehicles(selectedRoutes);

    const handleLoad = () => {
        const map = mapRef.current?.getMap();
        if (!map) return;
    
        if (!map.hasImage("bus-icon")) {
          map.loadImage(busIcon, (err, image) => {
            if (err) {
              console.error("Error loading bus icon:", err);
            } else if (image) {
              map.addImage("bus-icon", image);
              console.log("Bus icon loaded successfully");
            }
          });
        }
    
        if (!map.hasImage("train-icon")) {
          map.loadImage(trainIcon, (err, image) => {
            if (err) {
              console.error("Error loading train icon:", err);
            } else if (image) {
              map.addImage("train-icon", image);
              console.log("Train icon loaded successfully");
            }
          });
        }
      };

  return (
<div style={{ flex: 1, height: "100%", borderRadius: 16, overflow: "hidden" }}>
      <Map
        ref={mapRef}
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
        <VehicleMarkers vehicles={vehicles} />
      </Map>
    </div>
  );
};
