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
    },
    navigation: {
      fields: ['title']
    }
  },
  generate: {
    routes: ['/'],
  },
  hooks: {
    'nitro:config': (nitroConfig) => {
      if (nitroConfig.dev) return
      nitroConfig.prerender = nitroConfig.prerender || {}
      nitroConfig.prerender.routes = ['/', '/404']
      nitroConfig.prerender.failOnError = false
    }
  }
})
