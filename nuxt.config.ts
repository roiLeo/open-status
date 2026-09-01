export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/device', '@nuxt/content', '@nuxt/ui'],

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: '🇬🇧' },
      { code: 'fr', file: 'fr.json', name: '🇫🇷' }
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix'
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },

  content: {
    experimental: { sqliteConnector: 'native' },
  },

  compatibilityDate: '2024-10-08'
})
