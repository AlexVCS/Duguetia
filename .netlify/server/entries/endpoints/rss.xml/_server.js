import RSS from "rss";
import { c as config } from "../../../chunks/config.js";
import { g as getEntries } from "../../../chunks/entries.js";
const prerender = true;
async function GET() {
  const feed = new RSS({
    title: config.title + " - RSS Feed",
    site_url: config.siteUrl,
    feed_url: config.siteUrl + "/rss.xml"
  });
  const posts = getEntries("posts");
  posts.forEach((posts2) => {
    feed.item({
      title: posts2.title,
      url: config.siteUrl + `/${posts2.slug}`,
      date: posts2.date,
      description: posts2.summary
    });
  });
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Cache-Control": `max-age=0, s-maxage=${600}`,
      // 10 minutes
      "Content-Type": "application/rss+xml"
    }
  });
}
export {
  GET,
  prerender
};
