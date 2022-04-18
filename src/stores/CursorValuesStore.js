import { writable } from "svelte/store";

//initial values used for sliders positions and curve shape on the landing page
//Then, thoses values are updated everytime inputs changes with a function inside the Cursors.svelte component

const CursorValues = writable( {
  amplitudeValue : 177,
  lengthValue : 99,
  phaseValue : 20,
  strokeValue : 16,
});

export default CursorValues;