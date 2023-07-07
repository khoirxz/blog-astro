import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESC, SITE_TITLE } from "../consts";

export async function get(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE || "",
    description: SITE_DESC || "",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}`,
    })),
  });
}
