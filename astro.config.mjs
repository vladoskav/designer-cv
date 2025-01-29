// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    site: 'https://vladoskav.github.io',
    base: '/',
    experimental: {
        svg: true,
    },
    integrations: [compressor()],
});
