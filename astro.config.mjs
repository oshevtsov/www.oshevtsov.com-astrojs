import { defineConfig } from 'astro/config';
import remarkUnwrapImages from 'remark-unwrap-images';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import purgecss from "astro-purgecss";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), purgecss(), compress()],
  markdown: {
    remarkPlugins: [remarkUnwrapImages],
    shikiConfig: {
      theme: "one-dark-pro"
    }
  }
});
