import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'iam // frontend guild',
      templateParams: {
        titleTemplate: '%s %separator %siteName',
        separator: '//',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  routeRules: {
    '/': { prerender: true },
  },
  components: [
    { path: '~/components/', pathPrefix: false },
    { path: '~/components/layouts', pathPrefix: true },
  ],
  compatibilityDate: '2024-11-12',
})
