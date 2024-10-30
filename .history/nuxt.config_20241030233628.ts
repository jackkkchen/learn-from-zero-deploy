export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/learn-from-zero-deploy/',
    head: {
      title: 'My Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  modules: [
    '@nuxt/content', 
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/color-mode', 
    '@pinia/nuxt'
  ],
  content: {
    experimental: {
      clientDB: true
    }
  }
})
