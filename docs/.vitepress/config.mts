import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Team Build",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'UIUX', link: '/uiux/index.md' },
      { text: '前端', link: '/frontend/index.md' },
      { text: '後端', link: '/backend/index.md' },
      { text: '各種官網', link: '/documents/index.md' },
      { text: '學長姐', link: '/senior' },
      { text: '專案靈感', link: '/idea' },
      { text: '友站連結', link: '/links' },
      { text: '會議記錄', link: '/meeting/index.md' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: {
      '/frontend/': [
        {
          text: 'Admin Template',
          collapsed: true,
          items: [
            { text: 'All Topics', link: '/frontend/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 全站模糊搜尋元件(放大鏡)
    search: {
      provider: 'local'
    },
    // 頁腳，請注意! 側邊欄 sidebar 可見時，不會顯示 footer
    // 基本 home 會顯示，或是設定 frontmatter.sidebar: false 的其他單獨頁
    footer: {
      message: 'Released under the nowhere License.',
      copyright: 'Copyright © 2025-present Adam chou'
    }
  },
  // 顯示每份 .md 最後更新時間
  lastUpdated: true,
  // markdown 相關設定
  markdown: {
    lineNumbers: true
  },
})