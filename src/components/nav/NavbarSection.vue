<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const nav = [
  {
    title: '履歷',
    href: '#resume',
  },
  {
    title: '技能',
    href: '#skills',
  },
  {
    title: '作品',
    href: '#projects',
  },
  {
    title: '技術筆記',
    href: '#tech-notes',
  },
];

const scrollToId = (id: string) => {
  const el = document.querySelector(id);
  if (route.name !== 'home') {
    // 如果當前路由不是首頁，則使用 router.push 進行導航
    router.push({ path: '/', hash: id }).then(() => {
      // 等待路由跳轉完成後再滾動
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 100); // 給 DOM 一點時間更新
    });
  } else if (el) {
    // 如果在首頁且元素存在，則直接滾動到指定元素
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }
};
</script>
<template>
  <header class="fixed top-0 z-20 px-4 py-3">
    <nav class="flex rounded-full bg-gray-300/90 px-4 py-3 text-gray-500">
      <ul class="flex gap-4">
        <li v-for="item in nav" :key="item.title" class="px-2 text-center">
          <RouterLink
            :to="item.href"
            class="group relative px-1 py-3 font-bold"
            @click="scrollToId(item.href)"
          >
            <span
              class="absolute bottom-0.5 left-0 inline-block h-1 w-0 rounded-full bg-amber-500 transition-all duration-400 group-hover:right-0 group-hover:w-full"
            ></span>
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
