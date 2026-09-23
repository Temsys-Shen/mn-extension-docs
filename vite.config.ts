import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import press from "fumapress/vite";
import { fumadocsMdx } from "fumadocs-mdx/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [press(), fumadocsMdx(), tailwindcss(), cloudflare()],
});
