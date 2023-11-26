import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "./index2.js";
import { slug } from "github-slugger";
import { S as SocialIcon } from "./SocialIcon.js";
import { c as config } from "./config.js";
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { size = "text-sm" } = $$props;
  let { url = slug(text) } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<a${add_attribute("href", `/tags/${url}`, 0)} class="${"mr-3 font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 " + escape(size, true)}">${escape(text)}</a>`;
});
const formatDate = (date) => {
  return new Date(date).toLocaleDateString(config.locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
const Author = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { author = "" } = $$props;
  let { avatar = "" } = $$props;
  let { twitter = "" } = $$props;
  let { postDate = "" } = $$props;
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0)
    $$bindings.avatar(avatar);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.postDate === void 0 && $$bindings.postDate && postDate !== void 0)
    $$bindings.postDate(postDate);
  return `${avatar ? `<img${add_attribute("src", avatar, 0)} width="38px" height="38px" alt="avatar" class="h-10 w-10 rounded-lg">` : ``}
<dl class="whitespace-nowrap text-sm font-medium leading-5"><dt class="sr-only">Author</dt><dd class="text-base font-bold leading-6 text-gray-600 dark:text-gray-300">${escape(author)}</dd>${twitter ? `<dt class="sr-only">Twitter</dt>
		<dd>${validate_component(SocialIcon, "SocialIcon").$$render(
    $$result,
    {
      icon: "twitter",
      url: twitter,
      small: true
    },
    {},
    {
      default: () => {
        return `${escape(twitter?.replace("https://twitter.com/", "@"))}`;
      }
    }
  )}</dd>` : ``}${postDate ? `<dt class="sr-only">Published on</dt>
		<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time${add_attribute("datetime", postDate, 0)}>${escape(formatDate(postDate))}</time></dd>` : ``}</dl>`;
});
export {
  Author as A,
  Tag as T
};
