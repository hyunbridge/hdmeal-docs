/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    "환영합니다",
    {
      type: "category",
      label: "앱",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "웹 앱 열기",
          href: "https://hdmeal.hgseo.net/app",
        },
        {
          type: "autogenerated",
          dirName: "app",
        },
        {
          type: "link",
          label: "안드로이드 앱 설치하기",
          href: "https://hdmeal.hgseo.net/android",
        },
      ],
    },
    {
      type: "category",
      label: "(지원 중단) PC/Mac용 앱 설치하기",
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "desktop",
        },
      ],
    },
    {
      type: "category",
      label: "법적 고지",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "legal",
        },
      ],
    },
  ],
};

module.exports = sidebars;
