<script setup lang="ts">
import type { TechNote } from '@/types/projectDetail/projectDetail';
import axios from 'axios';
import { onMounted, onUnmounted, ref } from 'vue';
import { useJsonData } from '@/composables/useJsonData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 註冊 GSAP 插件
gsap.registerPlugin(ScrollTrigger);

const { getJsonDataPath } = useJsonData();
const noteList = ref<TechNote[]>([]);
const isMdAndUp = ref(false);
const ctx = ref<gsap.Context | null>(null);

const getNoteList = async () => {
  try {
    const res = await axios({
      url: getJsonDataPath('projectDemo/techNote.json'),
      method: 'get',
    });
    noteList.value = res.data;
  } catch (err) {
    console.log(err);
  }
};

// 檢查螢幕尺寸
const checkScreenSize = () => {
  isMdAndUp.value = window.innerWidth >= 768;
};

// 初始化動畫
const initAnimations = () => {
  ctx.value = gsap.context(() => {
    // 為每個技術筆記項目創建動畫
    gsap.utils.toArray<HTMLElement>('.gsap-tech-note').forEach((element, index) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        delay: index * 0.15, // 每個項目延遲 0.15 秒，讓它們依序出現
      });
    });
  });
};

onMounted(async () => {
  await getNoteList();

  // 初始檢查螢幕尺寸
  checkScreenSize();

  // 監聽螢幕尺寸變化
  window.addEventListener('resize', checkScreenSize);

  // 等待 DOM 更新後初始化動畫
  setTimeout(() => {
    initAnimations();
  }, 100);
});

onUnmounted(() => {
  // 清除事件監聽器
  window.removeEventListener('resize', checkScreenSize);

  // 清除 GSAP 動畫上下文
  if (ctx.value) {
    ctx.value.revert();
  }
});

const listStyle = (index: number) => {
  // 只在 md (768px) 以上才套用 margin
  return {
    marginLeft: isMdAndUp.value ? `${index * 16}px` : '0px',
    marginRight: isMdAndUp.value ? `${index * -16}px` : '0px',
  };
};
</script>
<template>
  <div class="container mx-auto flex h-full flex-col items-center px-4 py-20 md:flex-row">
    <p class="md:writing-vertical-rl md:text-upright text-primary-400 text-3xl md:text-[8rem]">
      技術筆記
    </p>

    <ul class="grid w-auto grid-cols-1 md:w-[80%] md:grid-cols-2">
      <li
        v-for="(article, index) in noteList"
        :key="article.id"
        class="gsap-tech-note border-b border-gray-400 py-4"
        :style="listStyle(index)"
      >
        <a :href="article.url" target="_blank" class="block rounded-lg p-4 hover:bg-gray-50/50">
          <h2 class="text-primary-500 mb-2 text-lg md:text-2xl">{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
