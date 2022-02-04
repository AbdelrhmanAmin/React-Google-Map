import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "./GoogleMap";
import SearchLocationInput from "./SearchLocationInput";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import PropTypes from "prop-types";

const Map = ({ width, height, startAtCoords, placesToGo }) => {
  const [mapProps, setMapProps] = React.useState({
    coords: startAtCoords,
    bounds: null,
  });

  const handleSelect = (address) => {
    geocodeByAddress(address).then(async (result) => {
      const latLng = await getLatLng(result[0]);
      setMapProps({
        coords: latLng,
        bounds: result[0].geometry.viewport,
      });
    });
  };

  const dimensions = { width, height };
  return (
    <div>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
        <div
          style={dimensions}
          className="position-relative d-flex flex-column align-items-center border border-2 border-light"
        >
          <SearchLocationInput handleSelect={handleSelect} />
          <GoogleMap
            zoom={6}
            startAtCoords={mapProps.coords}
            bounds={mapProps.bounds}
            placesToGo={placesToGo}
            dimensions={dimensions}
            markersArray={placesToGo}
          />
        </div>
      </Wrapper>
    </div>
  );
};

Map.defaultProps = {
  width: 600,
  height: 800,
  startAtCoords: { lat: 30.033333, lng: 31.233334 },
  placesToGo: [],
};

Map.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  startAtCoords: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  placesToGo: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func,
};

export default Map;
