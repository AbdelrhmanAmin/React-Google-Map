// Credits: https://stackoverflow.com/a/13274361/18110171

const latRad = (lat) => {
  var sin = Math.sin((lat * Math.PI) / 180);
  var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
  return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
};

const zoom = (mapPx, worldPx, fraction) => {
  return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
};

const getBoundsZoomLevel = (bounds, mapDim) => {
  var WORLD_DIM = { height: 256, width: 256 };
  var ZOOM_MAX = 21;

  var ne = bounds.getNorthEast();
  var sw = bounds.getSouthWest();

  var latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;

  var lngDiff = ne.lng() - sw.lng();
  var lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;

  var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
  var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
  return Math.min(latZoom, lngZoom, ZOOM_MAX);
};

export default getBoundsZoomLevel;
