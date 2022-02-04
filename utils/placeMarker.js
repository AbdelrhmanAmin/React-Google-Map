import { initMarker, placeInfoWindow, collectMarkers } from "./index";

const placeMarker = (latLng, map, markersArray) => {
  initMarker(latLng, map, markersArray);
  collectMarkers(latLng, markersArray)
  placeInfoWindow(latLng, map);
  map.panTo(latLng);
};

export default placeMarker;
