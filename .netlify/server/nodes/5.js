import * as server from '../entries/pages/blog/_slug_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.427de1a0.js","_app/immutable/chunks/index.789cc631.js","_app/immutable/chunks/Head.025ddad3.js","_app/immutable/chunks/SocialIcon.5285625c.js","_app/immutable/chunks/Author.6b4b30fb.js","_app/immutable/chunks/theme.f274b7a4.js"];
export const stylesheets = [];
export const fonts = [];
