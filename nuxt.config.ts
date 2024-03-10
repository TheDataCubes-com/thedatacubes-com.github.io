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
      title: "Advisory Strategic Data Consulting | TheDataCubes",
      meta: [
        {
          name: "description",
          content:
            "TheDataCubes is a niche business and technology consulting firm, helping businesses transform data into profitable insights. We focus on Enterprise Data Management, Master Data Management, and AI. With our expertise, you get insight-ready data at scale.",
        },
        {
          name: "keywords",
          content:
            "digital transformation services, advisory strategic data consulting, customer 360, master data management, MDM, Enterprise data management, data engineering consulting, analytics",
        },
        {
          name: "og:title",
          content: "Advisory Strategic Data Consulting | TheDataCubes",
        },
        {
          name: "og:description",
          content:
            "TheDataCubes is a niche business and technology consulting firm, helping businesses transform data into profitable insights. We focus on Enterprise Data Management, Master Data Management, and AI. With our expertise, you get insight-ready data at scale.",
        },
        {
          name: "og:locale",
          content: "en_US",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: "https://thedatacubes.com/",
        },
        {
          name: "og:site_name",
          content: "TheDataCubes",
        },
        {
          name: "og:image",
          content: "/images/tdc-logo.png",
        },
        {
          name: "og:image:width",
          content: "979",
        },
        {
          name: "og:image:height",
          content: "664",
        },
        {
          name: "og:image:type",
          content: "image/png",
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
