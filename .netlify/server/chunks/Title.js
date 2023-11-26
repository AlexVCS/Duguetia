import { c as create_ssr_component, e as escape, i as is_void } from "./index2.js";
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Title" } = $$props;
  let { subtitle = "" } = $$props;
  let { h2 = false } = $$props;
  let selected = h2 ? "h2" : "h1";
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.h2 === void 0 && $$bindings.h2 && h2 !== void 0)
    $$bindings.h2(h2);
  return `${title ? `${((tag) => {
    return tag ? `<${selected} class="${escape(
      h2 ? "text-2xl sm:text-3xl md:text-5xl" : "text-3xl sm:text-4xl md:text-6xl",
      true
    ) + " font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14 capitalize"}">${is_void(tag) ? "" : `${escape(title)}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(selected)}` : ``}

${subtitle ? `<p class="text-lg leading-7 text-gray-700 dark:text-gray-400">${escape(subtitle)}</p>` : ``}`;
});
export {
  Title as T
};
