/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, k as renderComponent, m as maybeRenderHead } from '../astro_tk0IRZ-S.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Header, a as $$Layout } from './index_DXnJvjD0.mjs';
import 'clsx';
/* empty css                            */

const $$Astro$4 = createAstro("https://willking20.github.io");
const $$Useraudio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Useraudio;
  return renderTemplate`<html lang="en" data-astro-cid-kdi26o5o> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Asegúrate de incluir annyang -->${renderHead()}</head> <body data-astro-cid-kdi26o5o> <div class="audio-ask" data-astro-cid-kdi26o5o> <button id="btnStart" class="btn-audio" data-astro-cid-kdi26o5o>Comenzar</button> <button id="btnStop" class="btn-audio" data-astro-cid-kdi26o5o>Detener</button> <button id="btnSend" class="btn-audio" data-astro-cid-kdi26o5o>Send</button> <textarea id="textArea" placeholder="¿Esto es lo que quieres decir?" class="group-text" cols="30" rows="1" data-astro-cid-kdi26o5o></textarea> <!--
      <textarea
        id="textRespuesta"
        placeholder="Respuesta de la API"
        class="group-text"
        cols="30"
        rows="1"
        readonly></textarea>
         --> <audio id="audioPlayer" controls style="display: none;" data-astro-cid-kdi26o5o></audio> </div>   </body> </html>`;
}, "C:/Users/OMEN/Documents/GitHub/Mindverse/src/components/Useraudio.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://willking20.github.io");
const $$Usercam = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Usercam;
  return renderTemplate(_a || (_a = __template(["", "<div data-astro-cid-kwy34gcy> ", ' <div class="userCam" data-astro-cid-kwy34gcy> <video id="videoUser" autoplay="true" data-astro-cid-kwy34gcy></video> </div> </div>  <script type="module">\n  async function initVideo() {\n    try {\n      const stream = await navigator.mediaDevices.getUserMedia({\n        video: true,\n      });\n\n      // Acceder al elemento de video y asignar el stream completo\n      const videoElement = document.getElementById("videoUser");\n      videoElement.srcObject = stream;\n    } catch (err) {\n      if (\n        err instanceof PermissionDeniedError ||\n        err instanceof NotAllowedError\n      ) {\n        showNotification(`No has permitido el uso de c\xE1mara`);\n      } else {\n        throw err;\n      }\n    }\n  }\n\n  window.addEventListener("DOMContentLoaded", () => {\n    initVideo();\n  });\n<\/script>'], ["", "<div data-astro-cid-kwy34gcy> ", ' <div class="userCam" data-astro-cid-kwy34gcy> <video id="videoUser" autoplay="true" data-astro-cid-kwy34gcy></video> </div> </div>  <script type="module">\n  async function initVideo() {\n    try {\n      const stream = await navigator.mediaDevices.getUserMedia({\n        video: true,\n      });\n\n      // Acceder al elemento de video y asignar el stream completo\n      const videoElement = document.getElementById("videoUser");\n      videoElement.srcObject = stream;\n    } catch (err) {\n      if (\n        err instanceof PermissionDeniedError ||\n        err instanceof NotAllowedError\n      ) {\n        showNotification(\\`No has permitido el uso de c\xE1mara\\`);\n      } else {\n        throw err;\n      }\n    }\n  }\n\n  window.addEventListener("DOMContentLoaded", () => {\n    initVideo();\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Useraudio", $$Useraudio, { "data-astro-cid-kwy34gcy": true }));
}, "C:/Users/OMEN/Documents/GitHub/Mindverse/src/components/usercam.astro", void 0);

const $$Astro$2 = createAstro("https://willking20.github.io");
const $$Videoavatar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Videoavatar;
  return renderTemplate`${maybeRenderHead()}<div class="background-container" data-astro-cid-qkdcdm26> <video id="background-video" class="background-video" src="../../src/layouts/video/hi.mp4" autoplay="true" data-astro-cid-qkdcdm26></video> </div> `;
}, "C:/Users/OMEN/Documents/GitHub/Mindverse/src/components/videoavatar.astro", void 0);

const $$Astro$1 = createAstro("https://willking20.github.io");
const $$Resteacher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Resteacher;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-esnpy73i> ${renderComponent($$result, "Videoavatar", $$Videoavatar, { "data-astro-cid-esnpy73i": true })} <div class="usercam-container" data-astro-cid-esnpy73i> ${renderComponent($$result, "Usercam", $$Usercam, { "data-astro-cid-esnpy73i": true })} </div> </div>  `;
}, "C:/Users/OMEN/Documents/GitHub/Mindverse/src/components/resteacher.astro", void 0);

const $$Astro = createAstro("https://willking20.github.io");
const $$Teacher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Teacher;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Teacher-ia", "data-astro-cid-ydj5n4xw": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ydj5n4xw": true })} ${maybeRenderHead()}<main data-astro-cid-ydj5n4xw> <div data-astro-cid-ydj5n4xw> ${renderComponent($$result2, "Resteacher", $$Resteacher, { "data-astro-cid-ydj5n4xw": true })} </div> </main> ` })}  `;
}, "C:/Users/OMEN/Documents/GitHub/Mindverse/src/pages/teacher.astro", void 0);

const $$file = "C:/Users/OMEN/Documents/GitHub/Mindverse/src/pages/teacher.astro";
const $$url = "/Myndverse/teacher";

export { $$Teacher as default, $$file as file, $$url as url };
