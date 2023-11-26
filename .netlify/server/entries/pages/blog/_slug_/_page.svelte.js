import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, b as each } from "../../../../chunks/index2.js";
import { H as Head } from "../../../../chunks/Head.js";
import { c as config, a as comment } from "../../../../chunks/config.js";
import { A as Author, T as Tag } from "../../../../chunks/Author.js";
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let { author } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  return `<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0"><article><div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"><header class="pt-6 xl:pb-6">${post.image ? `<div class="w-full pb-6"><img${add_attribute("alt", post.title, 0)}${add_attribute("src", post.image, 0)} class="object-cover object-center w-full h-auto"></div>` : ``}
				<div class="space-y-1 text-center"><div><h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">${escape(post.title)}</h1></div>
					<dl class="space-y-10"><div><dt class="sr-only">Published on</dt>
							<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time${add_attribute("datetime", post.date, 0)}>${escape(new Date(post.date).toLocaleDateString(config.locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }))}</time></dd></div></dl></div></header>
			<div class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0" style="grid-template-rows: auto 1fr;"><dl class="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700"><dt class="sr-only">Authors</dt><dd><ul class="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"><li class="flex items-center space-x-2">${validate_component(Author, "Author").$$render(
    $$result,
    {
      author: author.name,
      avatar: author.avatar,
      twitter: author.twitter
    },
    {},
    {}
  )}</li></ul></dd></dl>
				<div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"><div class="prose max-w-none pt-10 pb-8 dark:prose-dark"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div></div>
				<footer class=""><div class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">${post.tags ? `<div class="py-4 xl:py-8"><h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Tags
								</h2>
								<div class="flex flex-wrap">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, { text: tag }, {}, {})}`;
  })}</div></div>` : ``}
						${post.next || post.prev ? `<div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">${post.prev ? `<div><h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Previous Article
										</h2>
										<div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"><a${add_attribute("href", `/blog/${post.prev.slug}`, 0)}>${escape(post.prev.title)}</a></div></div>` : ``}
								${post.next ? `<div><h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Next Article
										</h2>
										<div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"><a${add_attribute("href", `/blog/${post.next.slug}`, 0)}>${escape(post.next.title)}</a></div></div>` : ``}</div>` : ``}</div>
					<div class="pt-4 xl:pt-8"><a href="/blog" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">← Back to the blog
						</a></div></footer></div></div></article></div>`;
});
const Giscus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { config: config2 = {} } = $$props;
  if ($$props.config === void 0 && $$bindings.config && config2 !== void 0)
    $$bindings.config(config2);
  return `<div id="giscus-container"><div id="giscus-loading" class="flex flex-col items-center"><h4>Loading Giscus Discussion</h4></div>
	<div id="giscus" class="giscus"></div></div>`;
});
const Comment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`<div class="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300 border-t">${`${validate_component(Giscus, "Giscus").$$render($$result, { config: comment.giscus }, {}, {})}`}</div>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const post = data.post;
  const author = data.author;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Head, "Head").$$render($$result, { title: post.title }, {}, {})}

${validate_component(Blog, "Blog").$$render($$result, { post, author }, {}, {})}
${validate_component(Comment, "Comments").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
