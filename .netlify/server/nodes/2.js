import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.6fa0670c.js","_app/immutable/chunks/index.789cc631.js","_app/immutable/chunks/Head.025ddad3.js","_app/immutable/chunks/SocialIcon.5285625c.js","_app/immutable/chunks/Blogs.6e474f7f.js","_app/immutable/chunks/Author.6b4b30fb.js","_app/immutable/chunks/Title.497171a0.js","_app/immutable/chunks/stores.a6082084.js","_app/immutable/chunks/singletons.1170bd12.js"];
export const stylesheets = [];
export const fonts = [];
