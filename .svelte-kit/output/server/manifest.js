export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.C9C9iXMy.js",app:"_app/immutable/entry/app.BrY1yRme.js",imports:["_app/immutable/entry/start.C9C9iXMy.js","_app/immutable/chunks/Dj1QkR18.js","_app/immutable/chunks/Cqx3ahwe.js","_app/immutable/chunks/DGdogZAS.js","_app/immutable/entry/app.BrY1yRme.js","_app/immutable/chunks/Cqx3ahwe.js","_app/immutable/chunks/KfowZTlf.js","_app/immutable/chunks/DGdogZAS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
