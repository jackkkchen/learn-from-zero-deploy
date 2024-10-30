// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  ssr: false,  // 禁用服务端渲染
  nitro: {
    preset: 'github-pages',
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ['/'],
    },
    debug: true,
  },
  app: {
    baseURL: '/learn-from-zero-deploy/',
    buildAssetsDir: 'assets',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt'
  ],
  content: {
    markdown: {
      toc: { depth: 2, searchDepth: 2 },
    },
    highlight: {
      langs: ['py', 'js'],
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        light: 'github-light',
      }
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode'
  },
})
