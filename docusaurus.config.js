module.exports = {
  title: "React Tips Only Pros Syllabus",
  url: "https://syllabus.reacttipsonlyprosknow.io/",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "reacttipsonlyprosknow",
  projectName: "Syllabus",
  onBrokenLinks: "throw",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          //sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/mauricedb/react-hooks-tips-only-the-pros-know/blob/main/LICENSE",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        }
      },
    ],
  ],
  scripts: [
    // See comments in static/js/fix-location.js
    {
      src: "/js/fix-location.js",
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "reacttipsonlyprosknow Logo",
        src: "img/logo.png",
      },
    },
    footer: {
      style: "dark",
      links: [
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} sbless`,
    },
  },
};
