// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['@headlessui/vue']
    },
    ssr: {
      noExternal: ['@headlessui/vue']
    }
  },

  // Static target (important for GitHub Pages)
  ssr: true,
  nitro: {
    preset: 'static'
  },

  // Set base path if you're deploying to GitHub project page (e.g., github.com/username/repo-name)
  router: {
    base: 'https://imrnh.github.io' // Replace with your actual repo name
  },

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/scripts'
  ]
})