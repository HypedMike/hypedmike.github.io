import { d as deLocalizeUrl } from "./runtime.js";
const reroute = (request) => deLocalizeUrl(request.url).pathname;
export {
  reroute
};
