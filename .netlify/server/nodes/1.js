

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.13f9cce4.js","_app/immutable/chunks/index.789cc631.js","_app/immutable/chunks/stores.a6082084.js","_app/immutable/chunks/singletons.1170bd12.js"];
export const stylesheets = [];
export const fonts = [];
