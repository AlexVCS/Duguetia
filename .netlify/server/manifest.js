export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.ico","icon-128.png","icon-16.png","icon-256.png","icon-32.png","icon-512.png","img/dinesh.jpg","img/duguetia_phaeoclados.jpg","img/gilfoyle.jpg","img/logo.png","img/piperchat.jpg","img/pipernet.jpg","img/richard.png","img/thebox.png","img/theplatform.jpg","logo.png","logo.svg"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.1aa1d48b.js","app":"_app/immutable/entry/app.5a451db2.js","imports":["_app/immutable/entry/start.1aa1d48b.js","_app/immutable/chunks/index.789cc631.js","_app/immutable/chunks/singletons.1170bd12.js","_app/immutable/entry/app.5a451db2.js","_app/immutable/chunks/index.789cc631.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/newsletter",
				pattern: /^\/api\/newsletter\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/newsletter/_server.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/og",
				pattern: /^\/og\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/og/_server.js'))
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tags/[tag]",
				pattern: /^\/tags\/([^/]+?)\/?$/,
				params: [{"name":"tag","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
