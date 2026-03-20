// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.ts'
  },
  nitro: {
    serverAssets: [{
      baseName: 'ejercicios',
      dir: './app/pages/ejercicios'
    }]
  },
  future: {
    compatibilityVersion: 4,
  }
})
