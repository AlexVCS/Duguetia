import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Head } from "../../../chunks/Head.js";
import { B as Blogs } from "../../../chunks/Blogs.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const posts = data.posts;
  const tags = data.tags;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Head, "Head").$$render($$result, { title: "Blog" }, {}, {})}

${validate_component(Blogs, "Blogs").$$render($$result, { title: "All Posts", posts, tags }, {}, {})}`;
});
export {
  Page as default
};
