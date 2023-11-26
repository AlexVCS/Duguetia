import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, m as missing_component } from "./index2.js";
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M7 9l5 3.5L17 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="currentColor" stroke-width="1.5"></path></svg>`;
});
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M14 12l-3.5 2v-4l3.5 2z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z" stroke="currentColor" stroke-width="1.5"></path></svg>`;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const SocialIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  let { icon = "" } = $$props;
  let { popup = false } = $$props;
  let { small = false } = $$props;
  let size = small ? "w-5" : "w-7";
  const options = [
    { caption: "mail", component: Mail },
    { caption: "github", component: Github },
    {
      caption: "facebook",
      component: Facebook
    },
    {
      caption: "youtube",
      component: Youtube
    },
    {
      caption: "linkedin",
      component: Linkedin
    },
    {
      caption: "twitter",
      component: Twitter
    }
  ];
  let svg = options.find((option) => option.caption === icon)?.component;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.popup === void 0 && $$bindings.popup && popup !== void 0)
    $$bindings.popup(popup);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  return `${url ? `<a class="flex gap-x-2 text-gray-500 transition hover:text-primary-600"${add_attribute("href", url || "#", 0)}${add_attribute("target", popup ? "_blank" : "", 0)} rel="noreferrer"><span class="sr-only">${escape(icon)}</span>
		${validate_component(svg || missing_component, "svelte:component").$$render($$result, { class: size + " " }, {}, {})}
		<span>${slots.default ? slots.default({}) : ``}</span></a>` : ``}`;
});
export {
  SocialIcon as S
};
