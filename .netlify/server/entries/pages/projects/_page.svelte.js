import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, b as each } from "../../../chunks/index2.js";
import { T as Title } from "../../../chunks/Title.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { card } = $$props;
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  return `<div class="md p-4 md:w-1/2" style="max-width: '544px'"><div${add_attribute("class", `${card.image && "h-full"}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`, 0)}>${card.image ? `${card.href ? `<a${add_attribute("href", card.href, 0)} target="_blank" rel="noopener noreferrer"${add_attribute("aria-label", `Link to ${card.title}`, 0)}><img${add_attribute("alt", card.title, 0)}${add_attribute("src", card.image, 0)} class="object-cover object-center aspect-video w-full"></a>` : `<img${add_attribute("alt", card.title, 0)}${add_attribute("src", card.image, 0)} class="object-cover object-center aspect-video w-full">`}` : ``}
		<div class="p-6"><h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">${card.href ? `<a${add_attribute("href", card.href, 0)}${add_attribute("aria-label", `Link to ${card.title}`, 0)}>${escape(card.title)}</a>` : `${escape(card.title)}`}</h2>
			<p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">${escape(card.description)}</p>
			${card.href ? `<a${add_attribute("href", card.href, 0)} target="_blank" rel="noopener noreferrer" class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"${add_attribute("aria-label", `Link to ${card.title}`, 0)}>Learn more →
				</a>` : ``}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const projects = data.projects;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="divide-y divide-gray-200 dark:divide-gray-700"><div class="space-y-2 pt-6 pb-8 md:space-y-5">${validate_component(Title, "Title").$$render(
    $$result,
    {
      title: "Projects",
      subtitle: "The great things we have done and are doing at Pied Piper"
    },
    {},
    {}
  )}</div>
	<div class="container py-12"><div class="-m-4 flex flex-wrap">${!projects.length ? `No project found.` : `${each(projects, (project) => {
    return `${validate_component(Card, "Card").$$render($$result, { card: project }, {}, {})}`;
  })}`}</div></div></div>`;
});
export {
  Page as default
};
