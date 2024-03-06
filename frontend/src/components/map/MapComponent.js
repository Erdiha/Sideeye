"use client";
import PinComponent from "@/components/map/PinComponent";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MyMap = ({ mapRef }) => {
  const [position, setPosition] = useState(null); // Default position
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setPosition([p.coords.latitude, p.coords.longitude]);
      },
      (error) => {
        console.error("Error getting user location:", error);
      },
      {
        enableHighAccuracy: true, // Request a more accurate position
        timeout: 5000, // Maximum time to wait for a position in milliseconds
        maximumAge: 0, // Maximum age of a cached position to accept
      }
    );
  }, []);

  const mapPinIcon = L.divIcon({
    className: "custom-pin-icon",
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32" fill="currentColor"><path d="M128,24a72,72,0,0,0-72,72c0,39.8,72,136,72,136s72-96.2,72-136A72,72,0,0,0,128,24Zm0,96a24,24,0,1,1,24-24A24.1,24.1,0,0,1,128,120Z"/></svg>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32], // Adjust based on the actual size and desired anchor point
    popupAnchor: [0, -32], // Adjust based on the desired popup position
  });
  console.log(position);

  return (
    position && ( // Only render the map if position is not null
      <>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100vh", width: "100%", zIndex: 0 }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={mapPinIcon}>
            <Popup>
              <PinComponent />
            </Popup>
          </Marker>
        </MapContainer>
      </>
    )
  );
};

export default MyMap;
