import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BnH-DIwD.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_hym5k3aT.mjs');
const _page1 = () => import('./chunks/ask_CkpgnVT7.mjs');
const _page2 = () => import('./chunks/login_d4HpE_ag.mjs');
const _page3 = () => import('./chunks/voice_CXwaByKR.mjs');
const _page4 = () => import('./chunks/teacher_DsOLvQmK.mjs');
const _page5 = () => import('./chunks/index_DKMcxag6.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.4.9_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/ask.ts", _page1],
    ["src/pages/api/login.ts", _page2],
    ["src/pages/api/voice.ts", _page3],
    ["src/pages/teacher.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "9798f7a8-9e07-408e-a876-c292f060d86e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
