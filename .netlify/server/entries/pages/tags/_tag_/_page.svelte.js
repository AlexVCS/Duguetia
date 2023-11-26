import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { H as Head } from "../../../../chunks/Head.js";
import { B as Blogs } from "../../../../chunks/Blogs.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Head, "Head").$$render($$result, { title: data.tag }, {}, {})}

${validate_component(Blogs, "Blogs").$$render(
    $$result,
    {
      title: data.tag,
      posts: data.posts,
      search: false
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
