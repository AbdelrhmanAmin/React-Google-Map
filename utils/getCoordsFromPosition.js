const getCoordsFromPosition = (position) => {
  return {
    lat: position.lat(),
    lng: position.lng(),
  };
};

export default getCoordsFromPosition;
