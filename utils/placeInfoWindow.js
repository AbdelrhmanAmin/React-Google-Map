import { getAddress } from "./index";

const placeInfoWindow = async (latLng, map) => {
  const address = await getAddress(latLng);
  const textStyle = "color: black; font-weight:800; margin:0";
  const infoWindow = new window.google.maps.InfoWindow({
    position: latLng,
    content: `<p style="${textStyle}">${address}</p>`,
    maxWidth: 210,
  });
  infoWindow.open(map);
};

export default placeInfoWindow;
