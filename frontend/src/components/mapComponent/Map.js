import Navbar from "@/components/navComponent/Navbar";
import StatsCard from "@/components/userComponent/profile/StatsCard";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Thumbnail from "@/components/userComponent/profile/Thumbnail";

const MapComponent = ({
  mapRef,
  currentPosition,
  setCurrentPosition,
  markers,
}) => {
  console.log("markers", markers);
  useEffect(() => {
    if (mapRef.current && !currentPosition) {
      mapRef.current.locate({ setView: true, maxZoom: 18 });
    }
  }, [mapRef, currentPosition]);
  console.log(currentPosition);
  return (
    <MapContainer
      center={currentPosition}
      zoom={16}
      style={{ height: "100dvh", width: "100dvw", zIndex: 0 }}
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
        console.log(marker);

        const stats = marker.stats;
        const customIcon = L.divIcon({
          className: "custom-thumbnail-icon",
          html: ReactDOMServer.renderToString(
            <Thumbnail text={marker.id} imgSrc={marker?.photos[0].url} />
          ),
          iconSize: [40, 40],
          iconAnchor: [20, 40], // Adjust iconAnchor to center the icon
          popupAnchor: [0, -40],
        });

        return (
          <Marker
            key={marker.id}
            position={[marker.location.latitude, marker.location.longitude]}
            icon={customIcon}
          >
            <Popup className="custom-popup bg-slate-950">
              <StatsCard data={marker} />
            </Popup>
          </Marker>
        );
      })}
      <Navbar />
    </MapContainer>
  );
};

export default MapComponent;
