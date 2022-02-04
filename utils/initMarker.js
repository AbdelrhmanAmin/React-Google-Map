import { dragMarker, removeMarker, filterMarkers } from "./index";

const Marker = {
  path: "m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z",
  fillColor: "#C4C4C4",
  fillOpacity: 1,
  blend: "passThrough",
  anchor: new window.google.maps.Point(12, 18),
  strokeWeight: 0,
  scale: 1.5,
};

const initMarker = (coords, map, markersArray) => {
  const markerElem = new window.google.maps.Marker({
    position: coords,
    map,
    icon: Marker,
    draggable: true,
  });

  window.google.maps.event.addListener(markerElem, "click", () => {
    removeMarker(markerElem, markersArray);
  });
  window.google.maps.event.addListener(markerElem, "dragstart", () => {
    filterMarkers(markersArray, markerElem.getPosition());
  });
  window.google.maps.event.addListener(markerElem, "dragend", () => {
    dragMarker(markerElem.getPosition(), markersArray, map);
  });
  return markerElem;
};

export default initMarker;
