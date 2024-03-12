import StatsCard from "@/components/profileComponent/StatsCard";
import { createThumbnailMarker } from "@/components/profileComponent/Thumbnail";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = ({ mapRef, currentPosition, setCurrentPosition, markers }) => {
  useEffect(() => {
    if (mapRef.current && !currentPosition) {
      mapRef.current.locate({ setView: true, maxZoom: 18 });
    }
  }, [mapRef, currentPosition]);

  return (
    <MapContainer
      center={currentPosition}
      zoom={16}
      style={{ height: "100vh", width: "100vw", zIndex: 0 }}
      ref={mapRef}
      whenCreated={(mapInstance) => {
        mapRef.current = mapInstance;
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {markers.map((marker) => {
        const stats = marker.stats;
        const customIcon = L.divIcon({
          className: "custom-thumbnail-icon",
          html: createThumbnailMarker(marker.text, marker.imgSrc),
          iconSize: [40, 40],
          iconAnchor: [40, 40],
          popupAnchor: [0, -40],
        });

        return (
          <Marker key={marker.id} position={marker.position} icon={customIcon}>
            <Popup className="custom-popup bg-slate-950">
              <StatsCard stats={stats} />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
