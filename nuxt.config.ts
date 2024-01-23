export default defineNuxtConfig({
  css: ["~/assets/style/main.scss"],

  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-svgo"],

  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: '',
    storageKey: "nuxt-starter-color-mode",
  },

  googleFonts: {
    families: {
      "Montserrat+Alternates": [400, 500, 600, 700, 800, 900],
    },
  },

  devtools: { enabled: true }
})
