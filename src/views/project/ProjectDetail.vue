<script setup lang="ts">
import type { ProjectDetail } from '@/types/projectDetail/projectDetail';
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const projectDetail = ref<ProjectDetail[]>([]);
/** 取得頁面細節（介紹專案內容） */
const getProjectDetail = async () => {
  try {
    const res = await axios({
      url: '/jsonData/projectDemo/projectIntroduce.json',
      method: 'get',
    });
    projectDetail.value = res.data;
  } catch (err) {
    console.log(err);
  }
};

const filterCurrentProjectDetail = computed(() => {
  const currentInfo = projectDetail.value.find((item) => item.id === route.params.id);

  return currentInfo ?? ({} as ProjectDetail);
});

onMounted(async () => {
  await getProjectDetail();
});

// 匯入所有圖片和視頻檔案
const images = import.meta.glob(`../../assets/images/profolio/**/*`, {
  eager: true,
  query: '?url',
  import: 'default',
});

const showDynamicImage = (imageFileName: string, image: string): string | undefined => {
  if (!image) return '';
  const path = `../../assets/images/profolio/${imageFileName}/${image}`;
  const url = images[path];

  return url as string | undefined;
};

const showDynamicVideo = (imageFileName: string, video: string): string | undefined => {
  if (!video) return '';
  const path = `../../assets/images/profolio/${imageFileName}/${video}`;
  const url = images[path];

  return url as string | undefined;
};
</script>
<template>
  <div class="container mx-auto min-h-screen px-4 py-20">
    <h2 class="mb-8 text-center text-2xl">{{ filterCurrentProjectDetail.title }}</h2>

    <div v-for="item in filterCurrentProjectDetail.content" :key="item.subtitle" class="mb-8">
      <h3 class="text-lg">{{ item.subtitle }}</h3>
      <p class="mb-1">{{ item.description }}</p>

      <div>
        <video
          v-if="item.video"
          :src="showDynamicVideo(item.imageFileName, item.video)"
          autoplay
          loop
          muted
          class="mb-4 w-full rounded-lg"
          :aria-label="`${item.subtitle} 相關視頻`"
        >
          <track kind="descriptions" :label="item.subtitle" />
          您的瀏覽器不支援視頻播放。
        </video>
      </div>

      <!-- 圖片顯示 -->
      <img
        v-if="item.image"
        :src="showDynamicImage(item.imageFileName, item.image)"
        :alt="item.subtitle"
        class="rounded-lg"
      />
    </div>
  </div>
</template>
