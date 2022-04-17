import { writable } from "svelte/store";

//initial values used for sliders positions and curve shape on the landing
//Then, the concerned value is updated everytime inputs changes with a function inside the Cursors component

const CursorValues = writable( {
  amplitudeValue : 177,
  lengthValue : 99,
  phaseValue : 20,
  strokeValue : 16,
});

export default CursorValues;

