/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_tk0IRZ-S.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro("https://willking20.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Incluye annyang.js mediante un CDN -->${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/OMEN/Documents/GitHub/Mindverse/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("https://willking20.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" data-astro-cid-hpnw4vwy> <div class="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 img-nav" data-astro-cid-hpnw4vwy> <div class="flex gap-6 md:gap-10 header-text" data-astro-cid-hpnw4vwy> <a href="/" class="flex items-center space-x-2" data-astro-cid-hpnw4vwy> <span class="inline-block font-bold" data-astro-cid-hpnw4vwy>Mindverse Education 0.1</span> </a> </div> <div class="flex flex-1 items-center justify-end space-x-4" data-astro-cid-hpnw4vwy> <nav class="flex items-center space-x-1" data-astro-cid-hpnw4vwy></nav> </div> </div> </header> `;
}, "C:/Users/OMEN/Documents/GitHub/Mindverse/src/components/header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://willking20.github.io");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate(_a || (_a = __template(["", `<div class="login-container" data-astro-cid-ch3gdv5f> <div class="superlogin" data-astro-cid-ch3gdv5f> <div class="p-5" data-astro-cid-ch3gdv5f> <div class="text-center" data-astro-cid-ch3gdv5f> <h1 class="title-login" data-astro-cid-ch3gdv5f>Bienvenido</h1> </div> <form class="user" id="login-form" data-astro-cid-ch3gdv5f> <div class="form-group" data-astro-cid-ch3gdv5f> <input type="text" class="form-control form-control-user" id="username" aria-describedby="emailHelp" placeholder="Ingresa tu nombre de usuario..." name="username" data-astro-cid-ch3gdv5f> </div> <div class="form-group" data-astro-cid-ch3gdv5f> <input type="password" class="form-control form-control-user" id="password" placeholder="Contrase\xF1a" name="password" data-astro-cid-ch3gdv5f> </div> <button type="submit" class="btn-login" data-astro-cid-ch3gdv5f>
Ingresar
</button> <br data-astro-cid-ch3gdv5f> <hr data-astro-cid-ch3gdv5f> </form> <script type="module">
          document.getElementById("login-form").addEventListener("submit", async function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
  
            try {
              const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
              });
  
              if (response.ok) {
                alert("Inicio de sesi\xF3n exitoso");
                window.location.href = 'http://localhost:4321/teacher';
              } else if (response.status === 401) {
                alert("Credenciales incorrectas");
              } else {
                alert("Error en la solicitud");
              }
            } catch (error) {
              console.error("Error:", error);
              alert("Error en la solicitud");
            }
          });
        <\/script> </div> </div> </div> `])), maybeRenderHead());
}, "C:/Users/OMEN/Documents/GitHub/Mindverse/src/components/login.astro", void 0);

const $$Astro = createAstro("https://willking20.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mindverse", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main class="main-container" data-astro-cid-j7pv25f6> <div class="style-login" data-astro-cid-j7pv25f6> <div class="container-login" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "MyLogin", $$Login, { "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="img-gato" data-astro-cid-j7pv25f6> <img src="../../src/layouts/image/gato2.png" data-astro-cid-j7pv25f6> </div> <div class="background-container" data-astro-cid-j7pv25f6> <video class="background-video" src="../../src/layouts/video/space.mp4" autoplay="true" loop data-astro-cid-j7pv25f6></video> </div> </main> ` })}  `;
}, "C:/Users/OMEN/Documents/GitHub/Mindverse/src/pages/index.astro", void 0);

const $$file = "C:/Users/OMEN/Documents/GitHub/Mindverse/src/pages/index.astro";
const $$url = "/Myndverse";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$Layout as a, index as i };
