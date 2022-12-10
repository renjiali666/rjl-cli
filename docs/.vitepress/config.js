export default {
  themeConfig: {
    siteTitle: false,
    logo: "/logo.png",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/renjiali666",
      },
    ],
    nav: [
      {
        text: "vue",
        activeMatch: "/vue/",
        link: "/vue/index.md",
      },
      {
        text: "react",
        activeMatch: "/react/",
        link: "/react/index.md",
      },
      {
        text: "koa",
        activeMatch: "/koa/",
        link: "/koa/index.md",
      },
      {
        text: "utils",
        activeMatch: "/utils/",
        link: "/utils/index.md",
      },
      {
        text: "template",
        activeMatch: "/template/",
        link: "/template/index.md",
      },
    ],
    sidebar: {
      "/vue/": [
        {
          text: "简介",
          link: "/vue/router.md",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "路由",
              link: "/vue/router.md",
            },
          ],
        },
      ],
    },
  },
};
