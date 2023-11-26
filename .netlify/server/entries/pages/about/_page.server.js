import { g as getEntries } from "../../../chunks/entries.js";
const authors = getEntries("authors");
async function load() {
  return {
    // eslint-disable-next-line no-unused-vars
    authors
  };
}
export {
  load
};
