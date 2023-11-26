import { e as error } from "../../../../chunks/index.js";
import { slug } from "github-slugger";
import { g as getEntries } from "../../../../chunks/entries.js";
function slugsArray(tags) {
  return tags?.map((t) => slug(t)) || [];
}
async function load({ params }) {
  const { tag } = params;
  const posts = getEntries("posts");
  const filteredPosts = posts.filter((p) => slugsArray(p.tags).includes(tag));
  if (!filteredPosts) {
    throw error(404, "No post found");
  }
  return {
    // eslint-disable-next-line no-unused-vars
    tag,
    posts: filteredPosts
  };
}
export {
  load
};
