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
  build: {
    transpile: ['@headlessui/vue']  // 如果你使用了 headlessui
  },
  components: {
    global: true,
    dirs: ['~/components']
  }
})
