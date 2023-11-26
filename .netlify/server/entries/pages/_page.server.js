import { g as getEntries } from "../../chunks/entries.js";
import { e as error } from "../../chunks/index.js";
async function load() {
  const posts = getEntries("posts");
  if (!posts) {
    throw error(404, "No post found");
  }
  return {
    // eslint-disable-next-line no-unused-vars
    posts
  };
}
export {
  load
};
