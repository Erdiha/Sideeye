export const handleFocusCurrentLocation = ({
  mapRef,
  setCurrentPosition,
  currentPosition,
}) => {
  const geolocationAPI = navigator.geolocation;

  if (!geolocationAPI) {
    console.log("Geolocation API is not available in your browser!");
  } else {
    geolocationAPI.getCurrentPosition(
      (position) => {
        const { coords } = position;
        const newPosition = [coords.latitude, coords.longitude];
        setCurrentPosition(newPosition);

        if (mapRef.current) {
          mapRef.current.flyTo(newPosition, 18); // Adjust zoom level as needed
        }
      },
      (error) => {
        console.log("Something went wrong getting your position!");
      }
    );
  }
};
