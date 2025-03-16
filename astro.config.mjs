import { defineConfig } from "astro/config";
import rehypeUnwrapImages from "rehype-unwrap-images";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://oshevtsov.com",
  integrations: [mdx(), purgecss()],
  markdown: {
    remarkPlugins: [rehypeUnwrapImages],
    remarkRehype: {
      footnoteLabel: "References",
    },
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
