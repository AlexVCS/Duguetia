import { g as getEntries, a as getTags } from "../../../chunks/entries.js";
import { e as error } from "../../../chunks/index.js";
async function load() {
  const posts = getEntries("posts");
  if (!posts) {
    throw error(404, "No post found");
  }
  const tags = getTags();
  return {
    // eslint-disable-next-line no-unused-vars
    posts,
    tags
  };
}
export {
  load
};
