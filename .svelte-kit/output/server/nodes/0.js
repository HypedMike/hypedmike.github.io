import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.B2TYZkeB.js","_app/immutable/chunks/KfowZTlf.js","_app/immutable/chunks/Cqx3ahwe.js","_app/immutable/chunks/CV9AcF5g.js","_app/immutable/chunks/BbSox-LL.js"];
export const stylesheets = ["_app/immutable/assets/0.B0cdqNrA.css"];
export const fonts = [];
