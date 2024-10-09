export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  modules: ['@nuxtjs/i18n', '@nuxt/content', '@nuxt/ui'],

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: '🇬🇧' },
      { code: 'fr', file: 'fr.json', name: '🇫🇷' }
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix'
  },

  ui: { global: true },

  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },

  compatibilityDate: '2024-10-08'
})
