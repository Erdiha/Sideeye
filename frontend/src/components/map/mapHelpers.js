import { useEffect, useState } from "react";

const useCurrentLocation = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let watchId;

    if ("geolocation" in navigator) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          setError(err.message);
        },
        options
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return { position, error };
};

export const handleFocusCurrentLocation = ({ mapRef }) => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const map = mapRef.current;
    if (map) {
      map.flyTo([latitude, longitude], 13);
    }
  });
};
