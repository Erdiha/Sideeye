export const handleFocusCurrentLocation = ({
  mapRef,
  setCurrentPosition,
  currentPosition,
}) => {
  const geolocationAPI = navigator.geolocation;

  if (!geolocationAPI) {
    setError("Geolocation API is not available in your browser!");
  } else {
    geolocationAPI.getCurrentPosition(
      (position) => {
        const { coords } = position;
        setCurrentPosition([coords.latitude, coords.longitude]);
        
        if (mapRef.current) {
          mapRef.current.flyTo(currentPosition, 18); // Adjust zoom level as needed
        }
      },
      (error) => {
        setError("Something went wrong getting your position!");
      }
    );
  }
};
