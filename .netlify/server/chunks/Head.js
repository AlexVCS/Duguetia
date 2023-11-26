import { c as create_ssr_component, e as escape, d as add_attribute } from "./index2.js";
import { c as config } from "./config.js";
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Duguetia" } = $$props;
  let { description = config.description } = $$props;
  let { author = config.author } = $$props;
  let { url = config.siteUrl } = $$props;
  let { domain = config.domain } = $$props;
  let { rtl = false } = $$props;
  let titleFromUrl = url.split("/").pop().replace("-", " ");
  let { img = `${url}/og?message=${rtl ? titleFromUrl : title}` } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.domain === void 0 && $$bindings.domain && domain !== void 0)
    $$bindings.domain(domain);
  if ($$props.rtl === void 0 && $$bindings.rtl && rtl !== void 0)
    $$bindings.rtl(rtl);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  return `${$$result.head += `<!-- HEAD_svelte-18j6qw3_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta name="author"${add_attribute("content", author, 0)}><meta property="og:url"${add_attribute("content", url, 0)}><meta property="og:type" content="website"><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image"${add_attribute("content", img, 0)}><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${add_attribute("content", domain, 0)}><meta property="twitter:url"${add_attribute("content", url, 0)}><meta name="twitter:title"${add_attribute("content", title, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}><meta name="twitter:image"${add_attribute("content", img, 0)}><!-- HEAD_svelte-18j6qw3_END -->`, ""}`;
});
export {
  Head as H
};
