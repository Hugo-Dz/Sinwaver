import { writable } from "svelte/store";

//Storage of the SVG path, updated every time the pixel path is updated (each time an input move)

const SVGpath = writable();

export default SVGpath;