// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
            config: {
                limitInputPixels: false,
            },
        },
    },
    site: 'https://vladoskav.github.io',
    base: '/Ekaterina-Kniazeva',
    experimental: {
        svg: true,
        responsiveImages: true
    },
    integrations: [compressor()],
});
