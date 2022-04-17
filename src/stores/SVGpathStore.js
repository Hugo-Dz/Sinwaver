import { writable } from "svelte/store";

//Storage of the SVG path, updated every time the path is recalculated (each time an input move)

const SVGpath = writable();

export default SVGpath;