import { c as createComponent } from './astro-component_7WUr-rCC.mjs';
import 'piccolore';
import { k as createRenderInstruction, m as maybeRenderHead, s as spreadAttributes, f as addAttribute, l as renderSlot, r as renderTemplate, i as renderComponent, n as renderHead } from './ssr-function_CDyZFfOe.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Check = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Check;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 6 9 17l-5-5"></path> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/Check.astro", void 0);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "instagram", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/Instagram.astro", void 0);

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "linkedin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/Linkedin.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path> <rect x="2" y="4" width="20" height="16" rx="2"></rect> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/Mail.astro", void 0);

const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/MapPin.astro", void 0);

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "menu", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 5h16"></path> <path d="M4 12h16"></path> <path d="M4 19h16"></path> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/Menu.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "phone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/Phone.astro", void 0);

const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Twitter;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "twitter", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path> ` })}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/node_modules/lucide-astro/dist/Twitter.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const pathname = Astro2.url?.pathname ?? "/";
  const normalizePath = (path) => {
    const clean = (path ?? "/").split("?")[0].split("#")[0];
    if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
    return clean;
  };
  const isActive = (href) => normalizePath(pathname) === normalizePath(href);
  return renderTemplate`${maybeRenderHead()}<nav class="w-full flex justify-center pt-4"> <div class="max-w-7xl w-full mx-auto relative text-white"> <!-- Navbar --> <div class="navbar-shell relative"> <div class="navbar-shape pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500 to-blue-400 backdrop-blur-md border border-white/10" aria-hidden="true"></div> <div class="relative z-10 flex items-center justify-start gap-3 px-3 py-2"> <!-- Hamburger --> <button class="md:hidden text-white z-10" onclick="
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('opacity-0');
        menu.classList.toggle('scale-95');
        menu.classList.toggle('invisible');
        "> ${renderComponent($$result, "Menu", $$Menu, {})} </button> <a href="/" class="flex items-center gap-2 min-w-0"> <img src="/images/logoTTG.png" alt="Company Logo" class="w-10 h-10 rounded-lg object-cover"> <span class="font-semibold text-sm leading-none whitespace-nowrap sm:hidden">TTG</span> <span class="font-semibold text-sm md:text-md leading-none whitespace-nowrap hidden sm:inline truncate">
Tim Teknologi Global
</span> </a> <!-- Menu Desktop (CENTER) --> <ul id="desktop-menu" class="bg-white/30 backdrop-blur-md border border-white/10 rounded-full px-2 py-3 hidden md:flex gap-1 text-white font-semibold absolute left-1/2 -translate-x-1/2 order-2 text-sm"> <span id="desktop-indicator" class="pointer-events-none absolute top-1 bottom-1 left-0 rounded-full bg-linear-to-r from-blue-500 to-blue-400 transition-[transform,width,opacity] duration-300 ease-out opacity-0" style="width: 0px; transform: translateX(0px);"></span> <li> <a href="/"${addAttribute(isActive("/") ? "page" : void 0, "aria-current")} class="relative z-10 rounded-full px-4 py-2">Home</a> </li> <li> <a href="/jobs"${addAttribute(isActive("/jobs") ? "page" : void 0, "aria-current")} class="relative z-10 rounded-full px-4 py-2">Jobs</a> </li> <li> <a href="/company"${addAttribute(isActive("/company") ? "page" : void 0, "aria-current")} class="relative z-10 rounded-full px-4 py-2">Company</a> </li> </ul> <a href="/contact"${addAttribute(isActive("/contact") ? "page" : void 0, "aria-current")} class="order-3 ml-auto bg-linear-to-b from-blue-500 to-blue-400 border border-white/10 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-blue-200">Contact</a> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="absolute left-0 top-full mt-2 w-full bg-white rounded-xl p-4 md:hidden z-20
         opacity-0 scale-95 invisible
         transition-all duration-300 ease-in-out"> <ul class="flex flex-col gap-4 text-gray-600 font-medium"> <li> <a href="/"${addAttribute(isActive("/") ? "page" : void 0, "aria-current")}${addAttribute([
    "px-3 py-2 rounded-lg transition-colors hover:bg-slate-100 hover:text-blue-500 font-semibold font-sm",
    isActive("/") && "bg-slate-100 text-blue-500"
  ], "class:list")}>Home</a> </li> <li> <a href="/jobs"${addAttribute(isActive("/jobs") ? "page" : void 0, "aria-current")}${addAttribute([
    "px-3 py-2 rounded-lg transition-colors hover:bg-slate-100 hover:text-blue-500 font-semibold font-sm",
    isActive("/jobs") && "bg-slate-100 text-blue-500"
  ], "class:list")}>Jobs</a> </li> <li> <a href="/company"${addAttribute(isActive("/company") ? "page" : void 0, "aria-current")}${addAttribute([
    "px-3 py-2 rounded-lg transition-colors hover:bg-slate-100 hover:text-blue-500 font-semibold font-sm",
    isActive("/company") && "bg-slate-100 text-blue-500"
  ], "class:list")}>Company</a> </li> </ul> </div> </div> </nav> ${renderScript($$result, "/Users/gufronaprilianto/Documents/code/portal_job-main/src/components/navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/src/components/navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative z-20 bg-[#0f172a] text-gray-300"> <div class="w-[90%] mx-auto py-12 grid md:grid-cols-4 gap-8"> <!-- LEFT: Logo & Desc --> <div> <h2 class="text-white font-semibold text-lg flex items-center gap-2"> <img src="/images/logoTTG.png" alt="Company Logo" class="w-6 h-6 rounded-lg object-cover">
Tim Teknologi Global
</h2> <p class="mt-4 text-sm text-gray-400">
Global Technology Team is an outsourcing company specializing in design
        and technology services. With a primary focus on innovation, and
        quality.
</p> <!-- Social --> <div class="flex gap-4 mt-4"> ${renderComponent($$result, "Linkedin", $$Linkedin, { "class": "w-5 h-5 hover:text-white cursor-pointer" })} ${renderComponent($$result, "Twitter", $$Twitter, { "class": "w-5 h-5 hover:text-white cursor-pointer" })} ${renderComponent($$result, "Instagram", $$Instagram, { "class": "w-5 h-5 hover:text-white cursor-pointer" })} </div> </div> <!-- Company --> <div> <h3 class="text-white font-semibold mb-3">Company</h3> <ul class="space-y-2 text-sm"> <li><a href="/company" class="hover:text-white">About Us</a></li> <li><a href="/company" class="hover:text-white">Our Team</a></li> <li><a href="/company" class="hover:text-white">Careers</a></li> </ul> </div> <!-- Support --> <div> <h3 class="text-white font-semibold mb-3">Support</h3> <ul class="space-y-2 text-sm"> <li><a href="#" class="hover:text-white">Help Center</a></li> <li><a href="#" class="hover:text-white">Contact</a></li> <li><a href="#" class="hover:text-white">Terms of Service</a></li> </ul> </div> <!-- Contact --> <div> <h3 class="text-white font-semibold mb-3">Contact</h3> <ul class="space-y-3 text-sm"> <li class="flex items-center gap-2"> ${renderComponent($$result, "MapPin", $$MapPin, { "class": "w-4 h-4" })}
Surabaya, Indonesia
</li> <li class="flex items-center gap-2"> ${renderComponent($$result, "Phone", $$Phone, { "class": "w-4 h-4" })}
+62 81 1234 5678
</li> <li class="flex items-center gap-2"> ${renderComponent($$result, "Mail", $$Mail, { "class": "w-4 h-4" })}
Jobportal@example.com
</li> </ul> </div> </div> <!-- Bottom --> <div class="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
2026 Job Portal. All rights reserved.
</div> </footer>`;
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/src/components/footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Mainlayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Mainlayout;
  const { title = "Job Portal" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html> <head><title>", "</title>", '</head> <body class="bg-linear-to-r from-blue-500 to-blue-400 min-h-screen"> <!-- Sticky navbar --> <div id="site-navbar" class="sticky top-0 z-50 px-4"> ', ' </div> <!-- Wrapper hero --> <div class="px-4 bg-linear-to-r from-blue-500 to-blue-400 pb-20"> ', " </div> <!-- Content --> <main> ", " </main> ", ' <script>\n      (() => {\n        const navbar = document.getElementById("site-navbar");\n        if (!navbar) return;\n\n        const HIDDEN_CLASS = "navbar-hidden";\n        const SCROLLED_ATTR = "data-scrolled";\n        const MIN_Y_TO_HIDE = 64;\n        const DELTA_THRESHOLD = 6;\n\n        let lastY = window.scrollY || 0;\n        let ticking = false;\n\n        const setHidden = (hidden) => {\n          navbar.classList.toggle(HIDDEN_CLASS, hidden);\n          if (hidden) navbar.setAttribute("aria-hidden", "true");\n          else navbar.removeAttribute("aria-hidden");\n        };\n\n        const update = () => {\n          const y = window.scrollY || 0;\n          const delta = y - lastY;\n\n          if (y > 0) navbar.setAttribute(SCROLLED_ATTR, "true");\n          else navbar.removeAttribute(SCROLLED_ATTR);\n\n          if (y <= 0) {\n            setHidden(false);\n            lastY = y;\n            return;\n          }\n\n          if (Math.abs(delta) >= DELTA_THRESHOLD) {\n            if (delta > 0 && y > MIN_Y_TO_HIDE) setHidden(true);\n            if (delta < 0) setHidden(false);\n          }\n\n          lastY = y;\n        };\n\n        const onScroll = () => {\n          if (ticking) return;\n          ticking = true;\n          requestAnimationFrame(() => {\n            update();\n            ticking = false;\n          });\n        };\n\n        window.addEventListener("scroll", onScroll, { passive: true });\n\n        // Initialize state (e.g. when landing mid-page)\n        update();\n      })();\n    <\/script> </body> </html>'])), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["hero"]), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/gufronaprilianto/Documents/code/portal_job-main/src/layouts/mainlayout.astro", void 0);

const BASE_URL = "https://hrms-dev-api.webadmin.my.id/api/";
const TOKEN = "account-40441db12c729e897c67c1b77309e6246805bdae89869";
async function requestJobs(query = "") {
  const url = `${BASE_URL}collections/get/t_job_posting?token=${TOKEN}${query}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Gagal mengambil data job");
  }
  return res.json();
}
async function getJobById(id) {
  try {
    const data = await requestJobs(`&filter[_id]=${id}`);
    return data.entries?.[0] || null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export { $$ as $, $$Mainlayout as a, $$Check as b, $$MapPin as c, getJobById as g, renderScript as r };
