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
      clientDB: true,
      stripQueryParameters: false
    },
    documentDriven: false,
    api: {
      baseURL: '/api/_content'
    }
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      failOnError: false,
      ignore: [
        '/python-zero',
        '/mysql-zero'
      ]
    }
  }
})
