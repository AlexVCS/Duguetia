import { g as getEntries } from "../../../chunks/entries.js";
import { e as error } from "../../../chunks/index.js";
async function load() {
  const projects = getEntries("projects");
  if (!projects) {
    throw error(404, "No project found");
  }
  return {
    // eslint-disable-next-line no-unused-vars
    projects
  };
}
export {
  load
};
