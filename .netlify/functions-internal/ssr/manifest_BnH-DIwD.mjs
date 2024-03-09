import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_tk0IRZ-S.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.4.9_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/ask","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/ask\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"ask","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/ask.ts","pathname":"/api/ask","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/login","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/login.ts","pathname":"/api/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/voice","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/voice\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"voice","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/voice.ts","pathname":"/api/voice","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/Myndverse/_astro/hoisted.CMuDFnIm.js"}],"styles":[{"type":"external","src":"/Myndverse/_astro/index.CyB0iYeA.css"},{"type":"inline","content":".btn-audio[data-astro-cid-kdi26o5o]{font-family:Arial;color:#fff;font-size:20px;padding:10px;text-decoration:none;border-radius:28px;box-shadow:0 1px 3px #000;text-shadow:1px 1px 4px #666666;border:solid #000000 2px;background:-webkit-gradient(linear,0 0,0 100%,from(#b530f2),to(#6305fa))}.group-text[data-astro-cid-kdi26o5o]{color:#000;background-color:#fff;border-radius:38px;-moz-border-radius:38px 38px 38px 38px;-webkit-border-radius:38px 38px 38px 38px;border:2px solid #000000;margin-top:10px}.audio-ask[data-astro-cid-kdi26o5o]{position:fixed;bottom:7%;left:50%;transform:translate(-50%,50%);z-index:1000}@media (max-width: 700px){.audio-ask[data-astro-cid-kdi26o5o]{left:25%}.btn-audio[data-astro-cid-kdi26o5o],.group-text[data-astro-cid-kdi26o5o]{font-size:10px}}@media (max-width: 415px){.audio-ask[data-astro-cid-kdi26o5o]{left:35%}}@media (max-width: 280px){#videoUser[data-astro-cid-kdi26o5o]{height:0px;border-radius:none;-moz-border-radius:none;-webkit-border-radius:none;border:none;box-shadow:none}}.form-group[data-astro-cid-kwy34gcy]{color:#000;text-align:center;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.userCam[data-astro-cid-kwy34gcy]{position:fixed;bottom:1rem;right:1rem;z-index:1000}#videoUser[data-astro-cid-kwy34gcy]{height:200px;border-radius:29px;-moz-border-radius:29px 29px 29px 29px;-webkit-border-radius:29px 29px 29px 29px;border:4px solid #4100ff}@media (max-width: 680px){#videoUser[data-astro-cid-kwy34gcy]{height:120px}}@media (max-width: 415px){#videoUser[data-astro-cid-kwy34gcy]{height:0px;border-radius:none;-moz-border-radius:none;-webkit-border-radius:none;border:none;box-shadow:none}}.background-container[data-astro-cid-qkdcdm26]{position:fixed;top:60px;left:0;width:100%;height:calc(100% - 60px);overflow:hidden;z-index:1}.background-video[data-astro-cid-qkdcdm26]{width:100%;height:90%;-o-object-fit:cover;object-fit:cover}.usercam-container[data-astro-cid-esnpy73i]{position:fixed;bottom:0;right:0;z-index:2}main[data-astro-cid-ydj5n4xw]{margin:auto;padding:1rem;width:800px;max-width:calc(100% - 2rem);color:#fff;font-size:20px;line-height:1.6}.astro-a[data-astro-cid-ydj5n4xw]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-ydj5n4xw]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-ydj5n4xw]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-ydj5n4xw]{margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.instructions[data-astro-cid-ydj5n4xw] code[data-astro-cid-ydj5n4xw]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-ydj5n4xw] strong[data-astro-cid-ydj5n4xw]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-ydj5n4xw]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n"}],"routeData":{"route":"/teacher","isIndex":false,"type":"page","pattern":"^\\/teacher\\/?$","segments":[[{"content":"teacher","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/teacher.astro","pathname":"/teacher","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/Myndverse/_astro/hoisted.CyVmEd8W.js"}],"styles":[{"type":"external","src":"/Myndverse/_astro/index.CyB0iYeA.css"},{"type":"external","src":"/Myndverse/_astro/index.Cs07oWMB.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://willking20.github.io","base":"/Myndverse/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/OMEN/Documents/GitHub/Mindverse/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/OMEN/Documents/GitHub/Mindverse/src/pages/teacher.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/api/ask.ts":"chunks/pages/ask_4eep0iSJ.mjs","/node_modules/.pnpm/astro@4.4.9_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_C6lZa-nM.mjs","/src/pages/api/login.ts":"chunks/pages/login_CCvcL6BV.mjs","/src/pages/teacher.astro":"chunks/pages/teacher_Bx5CqtGc.mjs","/src/pages/api/voice.ts":"chunks/pages/voice_CXlMurJD.mjs","\u0000@astrojs-manifest":"manifest_BnH-DIwD.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.4.9_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_hym5k3aT.mjs","\u0000@astro-page:src/pages/api/ask@_@ts":"chunks/ask_CkpgnVT7.mjs","\u0000@astro-page:src/pages/api/login@_@ts":"chunks/login_d4HpE_ag.mjs","\u0000@astro-page:src/pages/api/voice@_@ts":"chunks/voice_CXwaByKR.mjs","\u0000@astro-page:src/pages/teacher@_@astro":"chunks/teacher_DsOLvQmK.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DKMcxag6.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.CyVmEd8W.js","/astro/hoisted.js?q=0":"_astro/hoisted.CMuDFnIm.js","@astrojs/svelte/client.js":"_astro/client.Cx1FBVJX.js","astro:scripts/before-hydration.js":""},"assets":["/Myndverse/_astro/nav-img.B-ZKrL2-.png","/Myndverse/_astro/index.Cs07oWMB.css","/Myndverse/_astro/index.CyB0iYeA.css","/Myndverse/favicon.svg","/Myndverse/_astro/client.Cx1FBVJX.js","/Myndverse/_astro/hoisted.CMuDFnIm.js","/Myndverse/_astro/hoisted.CyVmEd8W.js"],"buildFormat":"directory"});

export { manifest };
