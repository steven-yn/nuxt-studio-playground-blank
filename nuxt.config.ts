import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  devtools: { enabled: true },
  nitro: {
    experimental: {
      websocket: false,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  content: {
    watch: {
      enabled: true,
      port: 3500,
      showURL: true,
    },
    preview: {
      api: "https://api.nuxt.studio",
      dev: true,
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    classSuffix: "",
  },
  compatibilityDate: "2024-04-03",
});
