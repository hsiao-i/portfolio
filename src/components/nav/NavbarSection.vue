<script setup lang="ts">
const nav = [
  {
    title: '履歷',
  },
  {
    title: '作品',
  },
  {
    title: '技術筆記',
  },
  {
    title: '聯繫',
  },
];
</script>
<template>
  <header class="fixed top-0 z-20 px-4 py-3">
    <nav class="flex rounded-full bg-gray-300/90 px-4 py-3 text-gray-500">
      <ul class="flex gap-4">
        <li v-for="item in nav" :key="item.title" class="px-2 text-center">
          <a href="" class="group relative px-1 py-3 font-bold">
            <span
              class="absolute bottom-0.5 left-0 inline-block h-1 w-0 rounded-full bg-amber-500 transition-all duration-400 group-hover:right-0 group-hover:w-full"
            ></span>
            {{ item.title }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
