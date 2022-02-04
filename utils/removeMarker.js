import { filterMarkers } from "./index";
const removeMarker = (marker, markersArray) => {
  marker.setMap(null);
  filterMarkers(markersArray, marker.getPosition());
};

export default removeMarker;
