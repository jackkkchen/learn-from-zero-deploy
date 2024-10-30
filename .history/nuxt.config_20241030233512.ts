export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/learn-from-zero-deploy/',
    buildAssetsDir: 'assets',
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
    fallback: true
  },
  hooks: {
    'nitro:config': (nitroConfig) => {
      if (nitroConfig.dev) {
        return
      }
      nitroConfig.prerender = nitroConfig.prerender || {}
      nitroConfig.prerender.failOnError = false
      nitroConfig.prerender.ignore = nitroConfig.prerender.ignore || []
      nitroConfig.prerender.ignore.push('/')
    }
  }
})
