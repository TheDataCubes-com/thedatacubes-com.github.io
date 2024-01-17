export default defineNuxtConfig({
	target: "static",
  devtools: { enabled: false },
  ssr: true,
  modules: [],
  alias: {
    data: "/app_data",
  },
  components: {
    dirs: ["~/components", "~/components/bg"],
  },
  css: ["~/assets/variables.css", "~/assets/common.css"],
  app: {
    rootId: "app",
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
