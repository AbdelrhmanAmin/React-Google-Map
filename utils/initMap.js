import {
  initMarker,
  placeMarker,
  getBoundsZoomLevel,
} from "./index";

const initMap = ({
  startAtCoords,
  zoom,
  MapStyle,
  DomElement,
  placesToGo,
  markersArray,
  dimensions,
  bounds,
}) => {
  const map = new window.google.maps.Map(DomElement, {
    center: startAtCoords,
    zoom,
    styles: MapStyle,
    disableDefaultUI: true,
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: window.google.maps.ControlPosition.BOTTOM_RIGHT,
    },
  });
  // onClick add a new marker and InfoWindow to show lat and lng.
  map.addListener("click", (mapsMouseEvent) => {
    const { latLng } = mapsMouseEvent;
    placeMarker(latLng, map, markersArray);
  });
  // smart zooming depending on location.
  if (bounds) {
    map.setZoom(getBoundsZoomLevel(bounds, dimensions));
  }
  // Markers for places to go
  if (placesToGo.length > 0) {
    placesToGo.map((coords) => initMarker(coords, map, markersArray));
  }
  return map;
};

export default initMap;
