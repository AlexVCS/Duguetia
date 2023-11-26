import { c as create_ssr_component, f as subscribe, d as add_attribute, v as validate_component, b as each, e as escape } from "./index2.js";
import { T as Tag, A as Author } from "./Author.js";
import { T as Title } from "./Title.js";
import { p as page } from "./stores.js";
const SearchBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let search = "";
  $$unsubscribe_page();
  return `<form><div class="relative mb-2"><input id="search" name="search" aria-label="Search posts" type="text" placeholder="Search posts" class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"${add_attribute("value", search, 0)}>
		<svg class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", 2, 0)} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></form>`;
});
const fuzzySearch = (items, query) => {
  let search = query?.toLowerCase().split(" ");
  console.log("search >>>", search);
  let ret = items.reduce((found, i) => {
    let matches = 0;
    search.forEach((s) => {
      let props = 0;
      for (var prop in i) {
        let p = i[prop]?.toString().toLowerCase();
        if (p?.indexOf(s) > -1) {
          props++;
        }
      }
      if (props >= 1) {
        matches++;
      }
    });
    if (matches == search.length) {
      found.push(i);
    }
    return found;
  }, []);
  return ret;
};
const Blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filter;
  let currentPosts;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { posts = [] } = $$props;
  let { tags = [] } = $$props;
  let { more = true } = $$props;
  let { search = true } = $$props;
  let { h2 = false } = $$props;
  let { count = 0 } = $$props;
  if (count) {
    posts = posts.slice(0, count);
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.more === void 0 && $$bindings.more && more !== void 0)
    $$bindings.more(more);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.h2 === void 0 && $$bindings.h2 && h2 !== void 0)
    $$bindings.h2(h2);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  filter = $page.url.searchParams.get("query");
  currentPosts = filter ? fuzzySearch(posts, filter) : posts;
  $$unsubscribe_page();
  return `<div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="space-y-2 pt-6 pb-8 md:space-y-5"><div class="grid lg:grid-cols-2 gap-4"><div>${validate_component(Title, "Title").$$render($$result, { title, subtitle, h2 }, {}, {})}</div>

			<div class="${["pl-4", search ? "border-l-2" : ""].join(" ").trim()}">${search ? `${validate_component(SearchBox, "SearchBox").$$render($$result, {}, {}, {})}` : ``}

				${tags.length ? `<div class="flex flex-wrap">${each(tags, (tag) => {
    return `<div class="mr-5">${validate_component(Tag, "Tag").$$render($$result, { text: tag.text, size: "text-xs" }, {}, {})}
								<a${add_attribute("href", `/tags/${tag.slug}`, 0)} class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">${escape(` (${tag.count})`)}</a>
							</div>`;
  })}</div>` : ``}</div></div></div>
	${!currentPosts.length ? `No post found.` : `<ul>${each(currentPosts, (post) => {
    return `<li class="py-12"><article><div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">${validate_component(Author, "Author").$$render($$result, { author: post.author, postDate: post.date }, {}, {})}
							<div class="space-y-5 xl:col-span-3"><div class="space-y-6"><div><h2 class="text-2xl font-bold leading-8 tracking-tight"><a${add_attribute("href", `/blog/${post.slug}`, 0)} class="text-gray-900 dark:text-gray-100">${escape(post.title)}
											</a></h2>
										<div class="flex flex-wrap">${each(post.tags, (tag) => {
      return `${validate_component(Tag, "Tag").$$render($$result, { text: tag }, {}, {})}`;
    })}
										</div></div>
									<div class="prose max-w-none text-gray-500 dark:text-gray-400">${escape(post.summary)}
									</div></div>
								${more ? `<div class="text-base font-medium leading-6"><a${add_attribute("href", `/blog/${post.slug}`, 0)} class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"${add_attribute("aria-label", `Read "${post.title}"`, 0)}>Read more →
										</a>
									</div>` : ``}</div>
						</div></article>
				</li>`;
  })}</ul>`}</div>`;
});
export {
  Blogs as B
};
