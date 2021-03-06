var CONST = require("./const");

module.exports = {
  title: `Today Learned`,
  description: `songc's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'docs',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: '1. JavaScript',
        children: CONST.JavaScriptList
      },
      {
        title: '2. React',
        children: CONST.ReactList
      },
      {
        title: '3. Serverless',
        children: CONST.ServerlessList
      },
      {
        title: '4. Daily Coding',
        children: CONST.DailyCodingList
      },
      {
        title: '5. Vue JS',
        children: CONST.VueList
      },
      {
        title: '6. Git',
        children: CONST.GitList
      },
      {
        title: '7. ETC',
        children: CONST.ETC
      }
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/s-ong-c/'
      }, {
        text: 'Blog',
        link: 'https://s-ong-c.github.io/'
      }
    ]
  },
}