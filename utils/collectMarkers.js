import { getAddress, getCoordsFromPosition } from "./index";

const collectMarkers = async (latLng, markersArray) => {
  const address = await getAddress(latLng);
  markersArray.push({
    ...getCoordsFromPosition(latLng),
    address,
  });
  return markersArray;
};

export default collectMarkers;
