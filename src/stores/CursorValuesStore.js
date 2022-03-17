import { writable } from "svelte/store";

//initial values used for positions and curve draw

//Then, the concerned value is updated everytime inputs changes

const CursorValues = writable( {
  amplitudeValue : 177,
  lengthValue : 99,
  phaseValue : 20,
  strokeValue : 6,
});

export default CursorValues;

