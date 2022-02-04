# React-Google-Map

🗺️🗺️🗺️A React component I built for a project. I used google-maps API and NPM package `react-autocomplete-places`.

### NOTE: I am currently occupied and I can't maintain or refactor this repo, so feel free to copy-paste and adjust the component to your own convience

### How to use?

```JSX

import { Map } from "./MAP_FOLDER_NAME";

const placesToGo = [
  { lat: 30.0444, lng: 31.2357, address: "Cairo"},
  { lat: 30.8761, lng: 29.7426, address: "Alexandria" },
]

<Map
  width={510}
  height={400}
  startAtCoords={{ lat: 30.033333, lng: 31.233334 }}
  placesToGo={placesToGo.current}
/>

```