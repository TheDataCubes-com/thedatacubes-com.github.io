export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: [],
  alias: {
    data: "/app_data",
  },
  components: {
    dirs: ["~/components", "~/components/bg"],
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ],
    },
  },
});
