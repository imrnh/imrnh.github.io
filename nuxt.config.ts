// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // Basic configuration
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,

  // CSS configuration
  css: ['~/assets/css/main.css'],

  // App configuration (important for static deployment)
  app: {
    baseURL: '/', // Correct for username.github.io deployment
    buildAssetsDir: '/_nuxt/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  // Vite configuration
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

  // Static generation configuration - Updated for GitHub Pages
  nitro: {
    preset: 'github_pages', // Use GitHub Pages preset
    output: {
      publicDir: '.output/public'
    }
  },

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
  ],

  // Development server
  devServer: {
    port: 3000
  }
})