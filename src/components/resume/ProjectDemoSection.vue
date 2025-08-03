<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import yesterdayOperationImg from '@/assets/images/profolio/incineration/yesterdayOperation-1.jpg';
import envImpactImg from '@/assets/images/profolio/envImpact/login.jpg';
import incinerationPublicImg from '@/assets/images/profolio/incinerationPublic/incinerationPublicHome.png';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const props = defineProps<{
  parentGsap?: gsap.core.Tween | null;
}>();

// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

const router = useRouter();

const project = [
  {
    id: '1',
    title: '多種焚化廠視覺化資訊',
    date: '2023-2024',
    description: '以儀表板方式呈現全臺各焚化廠貯坑存量、營運概況、異常狀況等。',
    image: yesterdayOperationImg,
    imageFileName: 'incineration',
    positionCss: '',
  },
  {
    id: '2',
    title: '環評監測數據整合平臺',
    date: '2024.07-2024.12',
    description:
      '含權限控制、會員系統，處理 API 規格設計、前端架構設計、元件共用邏輯到技術文件撰寫。',
    image: envImpactImg,
    imageFileName: 'envImpact',
    positionCss: 'content-end',
  },
  {
    id: '3',
    title: '效能調校、網站改版',
    date: '2024.10-2024.12、2025.03-2025.05',
    description: '透過 Lighthouse 處理效能調校，網站畫面改版，提升使用者體驗。',
    image: incinerationPublicImg,
    imageFileName: 'incinerationPublic',
    positionCss: '',
  },
];

const goToPage = (id: string, imageFileName: string) => {
  router.push({ path: `/project/${id}`, query: { imageFileName } });
};
const ctx = ref<gsap.Context | null>(null);
// 初始化 ScrollTrigger 動畫
const initProjectAnimations = () => {
  // 使用 gsap.context 管理動畫
  ctx.value = gsap.context(() => {
    gsap.from('.gsap-project', {
      scrollTrigger: {
        trigger: '.gsap-project',
        containerAnimation: props.parentGsap ?? undefined,
        start: 'left right',
        toggleActions: 'restart none none reverse',
        scrub: 1,
      },
      opacity: 0,
      x: -40,
      duration: 1.2,
      ease: 'power3.out',
      delay: (i) => i * 0.2,
      stagger: 0.3, // stagger 讓每個項目依序出現
    });
  });
};

onMounted(() => {
  initProjectAnimations();
  console.log('🔢 創建後 ScrollTrigger 數量:', ScrollTrigger.getAll().length);
});

onUnmounted(() => {
  if (ctx.value) {
    ctx.value.revert(); // 清除 GSAP 動畫上下文
  }
});
</script>
<template>
  <div class="container mx-auto h-full px-4 py-20">
    <div class="grid h-full grid-cols-1 gap-8 md:grid-cols-3">
      <div v-for="item in project" :key="item.id" :class="item.positionCss" class="gsap-project">
        <button type="button" @click="goToPage(item.id, item.imageFileName)" class="w-full">
          <div class="mb-4">
            <h2
              class="text-primary-500 border-primary-500 border-b pb-1 text-left text-2xl tracking-wide"
            >
              {{ item.title }}
            </h2>
            <p class="text-primary-500 mt-1 text-right text-xs">{{ item.date }}</p>
          </div>
          <div class="rounded-lg">
            <img
              :src="item.image"
              alt="焚化廠 demo"
              class="h-60 w-full rounded-lg object-cover transition-all duration-400 hover:scale-95"
            />
            <p class="mt-3 text-left text-gray-500">
              {{ item.description }}
            </p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
