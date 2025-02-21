---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My Rocket 19 🚀"
  text: "Team building"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: 值日生班表
      link: /onDuty
    - theme: alt
      text: 開發人員技能樹指南
      link: /developer-roadmap
    - theme: alt

features:
  - title: 📌2/25(二) 14:00
    details: Git, Github
  - title: 📌2/26(三) 14:00
    details: 眼鏡電商切版，學長姐經驗分享
  - title: 還沒想到🤷‍♀️
    details: 歡迎置入👀
---

<!-- 團隊頁文件 => https://vitepress.dev/zh/reference/default-theme-team-page -->
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Chris Chiang',
    title: 'UIUX',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' },
      { icon: 'discord', link: 'https://twitter.com/youyuxi' },
      { icon: 'instagram', link: 'https://twitter.com/youyuxi' },
      { icon: 'facebook', link: 'https://twitter.com/youyuxi' },
      { icon: 'threads', link: 'https://twitter.com/youyuxi' },
      { icon: 'linkedin', link: 'https://twitter.com/youyuxi' },
    ]
  },
  // {...} other members
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Hsiuan Chen',
    title: 'UIUX',
    links: [
      { icon: 'github', link: 'https://github.com/adam5096' },
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Toro',
    title: 'Web frontend',
    links: [
      { icon: 'github', link: 'https://github.com/adam5096' },
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Adam Chou',
    title: 'Web frontend',
    links: [
      { icon: 'github', link: 'https://github.com/adam5096' },
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Lainieeeee',
    title: 'Web frontend',
    links: [
      { icon: 'github', link: 'https://github.com/adam5096' },
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Anita Yun',
    title: 'Web frontend',
    links: [
      { icon: 'github', link: 'https://github.com/adam5096' },
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Wei Shao',
    title: 'Web backend',
    links: [
      { icon: 'github', link: 'https://github.com/adam5096' },
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Kelly Chiang',
    title: 'Web backend',
    links: [
      { icon: 'github', link: 'https://github.com/adam5096' },
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: '蕭宇宏',
    title: 'Web backend',
    links: [
      { icon: 'github', link: 'https://github.com/adam5096' },
    ]
  },
]
</script>

<!-- team member template -->
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>