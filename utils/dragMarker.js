import { collectMarkers, placeInfoWindow } from "./index";

const dragMarker = (latLng, markersArray, map) => {
  collectMarkers(latLng, markersArray);
  placeInfoWindow(latLng, map);
};

export default dragMarker;
