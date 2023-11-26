import * as server from '../entries/pages/about/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/about/+page.server.js";
export const imports = ["_app/immutable/nodes/3.e1c4942f.js","_app/immutable/chunks/index.789cc631.js","_app/immutable/chunks/Head.025ddad3.js","_app/immutable/chunks/SocialIcon.5285625c.js","_app/immutable/chunks/Title.497171a0.js"];
export const stylesheets = [];
export const fonts = [];
