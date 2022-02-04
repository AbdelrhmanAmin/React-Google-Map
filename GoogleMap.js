import React from "react";
import { initMap } from "./utils";
// For more styles, visit: https://mapstyle.withgoogle.com/
import MapStyle from "./MapStyle.json";

const GoogleMap = ({ startAtCoords, zoom, placesToGo, dimensions, bounds, markersArray }) => {
  const elemRef = React.useRef(null);

  React.useEffect(() => {
    initMap({
      startAtCoords,
      zoom,
      MapStyle,
      DomElement: elemRef.current,
      placesToGo,
      markersArray: markersArray,
      dimensions,
      bounds,
    });
  });
  return (
    <div ref={elemRef} id="map" style={{ width: "100%", height: "100%" }} />
  );
};

export default GoogleMap;
