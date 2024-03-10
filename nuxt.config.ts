export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  modules: ["nuxt-swiper"],
  swiper: {
    modules: ["autoplay"],
  },
  alias: {
    data: "/app_data",
  },
  components: {
    dirs: ["~/components"],
  },
  app: {
    head: {
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
      ],
      title: "Strategic Data Advisory | TheDataCubes",
      meta: [
        {
          name: "description",
          property: "og:description",
          content:
            "TheDataCubes is a niche business and technology consulting firm, helping businesses transform data into profitable insights. We focus on Enterprise Data Management, Master Data Management, and AI. With our expertise, you get insight-ready data at scale.",
        },
        {
          name: "keywords",
          property: "og:keywords",
          content:
            "digital transformation services, advisory strategic data consulting, customer 360, master data management, MDM, Enterprise data management, data engineering consulting, analytics",
        },
        {
          name: "title",
          property: "og:title",
          content: "Strategic Data Advisory | TheDataCubes",
        },
        {
          name: "locale",
          property: "og:locale",
          content: "en_US",
        },
        {
          name: "type",
          property: "og:type",
          content: "website",
        },
        {
          name: "url",
          property: "og:url",
          content: "https://thedatacubes.com/",
        },
        {
          name: "site_name",
          property: "og:site_name",
          content: "TheDataCubes",
        },
        {
          name: "image",
          property: "og:image",
          content: "/images/tdc-logo.jpg",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        {
          name: "msapplication-TileColor",
          content: "#da532c",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
    },
  },
});
