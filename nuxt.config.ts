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
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  routeRules: {
    '/': { prerender: true },
  },
  components: [
    { path: '~/components/', pathPrefix: false }
  ],
  compatibilityDate: '2024-11-12',
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return tag.startsWith('iam-') // (return true)
      },
    },
  },
})
