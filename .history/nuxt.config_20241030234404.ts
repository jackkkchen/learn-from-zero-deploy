export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/learn-from-zero-deploy/',
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
  },
  generate: {
    routes: ['/'],
    fallback: '404.html'
  },
  build: {
    transpile: ['@nuxt/content']
  }
})
