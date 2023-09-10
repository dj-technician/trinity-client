// https://nuxt.com/docs/api/configuration/nuxt-config
import {style} from "postcss-minify-font-values/types/lib/keywords";

export default defineNuxtConfig({
  devtools: {enabled: true},
  // @ts-ignore
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: "Trinity - devjk's personal devlog",
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOriginIsolated: true},
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap'
        },
      ],
    },
  }
})
