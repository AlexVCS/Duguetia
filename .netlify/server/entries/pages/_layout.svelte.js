import { c as create_ssr_component, b as each, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { n as navLinks, c as config } from "../../chunks/config.js";
import { S as SocialIcon } from "../../chunks/SocialIcon.js";
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const ThemeSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button aria-label="Toggle Dark Mode" class="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100">${``}</svg></button>`;
});
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="sm:hidden"><button type="button" class="ml-1 mr-1 h-8 w-8 rounded py-1" aria-label="Toggle Menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button>
	<div class="${[
    "fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800",
    " translate-x-full"
  ].join(" ").trim()}"><div class="flex justify-end"><button type="button" class="mr-5 mt-11 h-8 w-8 rounded" aria-label="Toggle Menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-900 dark:text-gray-100"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>
		<nav class="fixed mt-8 h-full">${each(navLinks, (link) => {
    return `<div class="px-12 py-4"><a${add_attribute("href", link.href, 0)} class="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100">${escape(link.title)}</a>
				</div>`;
  })}</nav></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="flex items-center justify-between py-10"><div><a href="/"${add_attribute("aria-label", config.headerTitle, 0)}><div class="flex items-center justify-between"><div class="mr-3"><img src="/logo.svg" alt="Logo" class="h-10 w-auto"></div>
				<div class="hidden text-4xl font-semibold sm:block font-title">${escape(config.headerTitle)}</div></div></a></div>
	<div class="flex items-center text-base leading-5"><div class="hidden sm:block">${each(navLinks, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">${escape(link.title)}</a>`;
  })}</div>
		${validate_component(ThemeSwitch, "ThemeSwitch").$$render($$result, {}, {}, {})}
		${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})}</div></header>`;
});
const Newsletter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  return `<div class="w-full text-gray-500 dark:text-gray-400 mb-2"><form><div class="flex flex-col md:flex-row items-center justify-center gap-4"><div class="font-bold">Sign up for our newsletter</div>
			<div><input type="text" id="email" name="email" placeholder="Email address" class="${"form-control block w-full px-3 py-1 text-base bg-white dark:bg-gray-800 bg-clip-padding border rounded transition ease-in-out focus:text-gray-700 focus:outline-none focus:ring-0 " + escape(
    "border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:dark:border-primary-500",
    true
  )}"${add_attribute("value", email, 0)}></div>

			<div><button type="submit" class="inline-block px-6 py-2 border-2 border-gray-300 dark:border-gray-600 font-medium text-xs leading-tight uppercase rounded focus:bg-primary-500 focus:border-primary-500 focus:dark:border-primary-500 focus:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out">${escape("Subscribe")}</button></div></div></form></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let year = (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer><div class="mt-16 flex flex-col items-center border-t pt-6 gap-2"><div class="mb-3 flex space-x-2">${validate_component(SocialIcon, "SocialIcon").$$render(
    $$result,
    {
      icon: "mail",
      url: `mailto:${config.email}`
    },
    {},
    {}
  )}
			${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "github", url: config.github }, {}, {})}
			${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "facebook", url: config.facebook }, {}, {})}
			${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "youtube", url: config.youtube }, {}, {})}
			${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "linkedin", url: config.linkedin }, {}, {})}
			${validate_component(SocialIcon, "SocialIcon").$$render($$result, { icon: "twitter", url: config.twitter }, {}, {})}</div>
		${config.newsletter.provider ? `${validate_component(Newsletter, "Newsletter").$$render($$result, {}, {}, {})}` : ``}
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400"><a href="/">${escape(config.title)}</a>   •   © ${escape(year)}
			${escape(config.author)}   •   <a href="/rss.xml">RSS Feed</a></div></div></footer>`;
});
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}

${``}

${``}`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let { data = {} } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0"><div class="flex h-screen flex-col justify-between">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
		<main class="mb-auto">${validate_component(Transition, "Transition").$$render($$result, { pathname: data?.pathname }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main>
		${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>

${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
