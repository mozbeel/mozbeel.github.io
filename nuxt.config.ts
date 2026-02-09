// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [ "~/assets/css/main.css"],
  modules: ["@nuxt/fonts"],
  fonts: {
    families: [
      { name: "Oswald", weights: [700]},
      { name: "Lato", weights: [400, 700, 900]}
    ],
  },
  app: {
    head: {
      title: "<Matthias Leeb/>",
    },
    baseURL: "/Portfolio/",
  }
})