// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "흥덕고 급식",
  tagline:
    "흥덕고등학교 학교생활에 유용한 정보들을 편리하게 확인할 수 있는 서비스입니다.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://hdmeal-docs.hgseo.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.png",
      navbar: {
        title: "흥덕고 급식",
        logo: {
          alt: "밥",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://hdmeal.hgseo.net",
            label: "홈페이지",
            position: "right",
          },
          {
            href: "https://hdmeal.hgseo.net/app",
            label: "웹 앱",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "연락처",
            items: [
              {
                label: "메일 보내기",
                href: "mailto:hekn2y4j@duck.com",
              },
            ],
          },
          {
            title: "법적 고지",
            items: [
              {
                label: "개인정보처리방침",
                to: "/legal/chatbot-privacy",
              },
            ],
          },
          {
            title: "기타",
            items: [
              {
                label: "홈페이지",
                href: "https://hdmeal.hgseo.net",
              },
              {
                label: "웹 앱",
                href: "https://hdmeal.hgseo.net/app",
              },
              {
                label: "플랫폼 상태",
                href: "https://hdmeal.hgseo.net/status",
              },
            ],
          },
        ],
        copyright: `Copyright © 2019-${new Date().getFullYear()} Hyungyo Seo. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/gh/sunn-us/SUIT@1.2.1/fonts/static/woff2/SUIT.css",
      integrity: "sha256-Wi0wE+73TX/vUbfV5vMuoUQHFj6zXK9QM/qXSUBXC9U=",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
