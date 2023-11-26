import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.a5cfd276.js","_app/immutable/chunks/index.789cc631.js","_app/immutable/chunks/SocialIcon.5285625c.js","_app/immutable/chunks/theme.f274b7a4.js","_app/immutable/chunks/stores.a6082084.js","_app/immutable/chunks/singletons.1170bd12.js"];
export const stylesheets = ["_app/immutable/assets/0.d3512e6e.css"];
export const fonts = [];
