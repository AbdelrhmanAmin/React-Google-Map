import { getCoordsFromPosition } from "./index";

const filterMarkers = (markersArray, latLng) => {
  const { lat, lng } = getCoordsFromPosition(latLng);
  markersArray.splice(
    markersArray.findIndex(
      (marker) => marker["lat"] === lat && marker["lng"] === lng
    ),
    1
  );
  return markersArray;
};

export default filterMarkers;
