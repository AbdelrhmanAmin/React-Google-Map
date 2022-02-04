import { getCoordsFromPosition } from "./index";

const getAddress = async (latLng) => {
  const { lat, lng } = getCoordsFromPosition(latLng);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAP_API}`
  );
  const { results } = await response.json();
  let address;
  if (results.length === 1) {
    address = results[0];
  } else if (results.length <= 4) {
    address = results[1];
  } else {
    address = results[2];
  }
  return address.formatted_address;
};

export default getAddress;
