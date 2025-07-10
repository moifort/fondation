// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  experimental: { appManifest: false },
  ssr: false,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  typescript: { strict: true, shim: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/storybook',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    'nuxt-graphql-client',
  ],
  i18n: {
    defaultLocale: 'fr',
    detectBrowserLanguage: true,
    locales: [
      { code: 'fr', name: 'Français' },
      { code: 'en', name: 'English' },
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  'graphql-client': {
    codegen: { scalars: {} },
    clients: {
      default: {
        host: process.env.GQL_HOST ?? 'https://spacex-production.up.railway.app/',
        // schema: '../back/src/api/__generated__/graphql.schema.json',
      },
    },
  },
})
