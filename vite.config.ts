import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      // The site is deployed as a fully static bundle on GitHub Pages,
      // so TanStack Start prerenders every route into plain HTML at build time.
      pages: [
        { path: '/' },
        { path: '/projects' },
        { path: '/about' },
        { path: '/contact' },
      ],
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
      },
      sitemap: {
        enabled: true,
        host: 'https://iamomid.github.io',
      },
      spa: {
        enabled: false,
      },
    }),
    viteReact(),
  ],
})

export default config
