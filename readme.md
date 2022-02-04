# React-Google-Map

🗺️🗺️🗺️A React component I built for a project.

I used [`google-maps API`](https://www.npmjs.com/package/@googlemaps/react-wrapper) and [`react-autocomplete-places`](https://github.com/hibiken/react-places-autocomplete).

### NOTE: I am currently occupied and I can't maintain or refactor this repo, so feel free to copy-paste and adjust the component to your own convience

### How to use? Here is an example.

```JSX

import { Map } from "./MAP_FOLDER_NAME";

// Render pre-existing markers on the screen
const placesToGo = [
  { lat: 30.0444, lng: 31.2357, address: "Cairo"},
  { lat: 30.8761, lng: 29.7426, address: "Alexandria" },
]

<Map
  width={510}
  height={400}
  startAtCoords={{ lat: 30.033333, lng: 31.233334 }}
  placesToGo={placesToGo.current}
  // Get a free API from here: https://developers.google.com/maps/documentation/maps-static/get-api-key#creating-api-keys
  apiKey={"YOUR_API_KEY"}
/>

```
