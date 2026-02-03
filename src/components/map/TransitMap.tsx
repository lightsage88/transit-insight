import React, { useRef, useState } from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import { VehicleMarkers } from "./VehicleMarkers";
import { VehicleTooltip } from "./VehicleTooltip";
import { useVehicles } from "../../hooks/useVehicles";
console.log(import.meta.env);

const map_key = import.meta.env.VITE_MAP_TILER_API_KEY;

interface TransitMapProps {
  selectedRoutes: string[];
}

export const TransitMap: React.FC<TransitMapProps> = ({ selectedRoutes }) => {
    const mapRef = useRef<any>(null);
    const { vehicles } = useVehicles(selectedRoutes);
    const [hoveredVehicle, setHoveredVehicle] = useState<{
      signMessage: string;
      garage: string;
      x: number;
      y: number;
    } | null>(null);

  const handleMouseMove = (e: any) => {
    const map = mapRef.current?.getMap();
    if (!map) return;

    const features = map.queryRenderedFeatures(e.point, {
      layers: ["vehicle-debug-circles"],
    });

    if (features && features.length > 0) {
      const feature = features[0];
      setHoveredVehicle({
        signMessage: feature.properties.signMessage || "N/A",
        garage: feature.properties.garage || "N/A",
        x: e.point.x,
        y: e.point.y,
      });
      map.getCanvas().style.cursor = "pointer";
    } else {
      setHoveredVehicle(null);
      map.getCanvas().style.cursor = "";
    }
  };

  const handleMouseLeave = () => {
    setHoveredVehicle(null);
  };

  return (
    <div 
      style={{ 
        flex: 1, 
        height: "100%", 
        borderRadius: 16, 
        overflow: "hidden", 
        position: "relative",
        touchAction: "pan-y pinch-zoom"
      }}
      className="map-wrapper"
    >
      <Map
        ref={mapRef}
        mapLib={maplibregl}
        initialViewState={{
          longitude: -122.6765,
          latitude: 45.5231,
          zoom: 13,
        }}
        style={{ 
          width: "100%", 
          height: "100%",
          touchAction: "pan-y pinch-zoom"
        }}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${map_key}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        interactiveLayerIds={["vehicle-debug-circles"]}
        // Mobile-friendly settings
        touchZoomRotate={true}
        touchPitch={false}
        dragRotate={false}
      >
        <VehicleMarkers vehicles={vehicles} />
      </Map>
      {hoveredVehicle && (
        <VehicleTooltip
          signMessage={hoveredVehicle.signMessage}
          garage={hoveredVehicle.garage}
          x={hoveredVehicle.x}
          y={hoveredVehicle.y}
        />
      )}
    </div>
  );
};
