<script setup lang="ts">
import yesterdayOperationImg from '@/assets/images/profolio/incineration/yesterdayOperation-1.jpg';
import envImpactImg from '@/assets/images/profolio/envImpact/login.jpg';
import incinerationPublicImg from '@/assets/images/profolio/incineration/yesterdayOperation-1.jpg';

const project = [
  {
    id: 1,
    title: '多種焚化廠視覺化資訊',
    description: '2023-2024',
    image: yesterdayOperationImg,
  },
  {
    id: 2,
    title: '環評監測數據整合平臺',
    description: '2024.07-2024.12',
    image: envImpactImg,
  },
  {
    id: 3,
    title: '效能調校、網站改版',
    description: '2024.10-2024.12、2025.03-2025.05',
    image: incinerationPublicImg,
  },
];
</script>
<template>
  <div class="kosugi-maru-regular container mx-auto px-4 py-20 text-gray-700">
    <div class="grid grid-cols-3 gap-8">
      <button type="button" class="">
        <div class="mb-4">
          <h2
            class="text-primary-500 border-primary-500 border-b pb-1 text-left text-2xl tracking-wide"
          >
            多種焚化廠視覺化資訊
          </h2>
          <p class="text-primary-500 mt-1 text-right text-xs">2023-2024</p>
        </div>
        <div class="rounded-lg">
          <img
            src="@/assets/images/profolio/incineration/yesterdayOperation-1.jpg"
            alt="焚化廠 demo"
            class="h-50 w-full rounded-lg object-cover transition-all duration-400 hover:scale-98"
          />
          <p class="mt-3 text-left text-gray-500">
            以儀表板方式呈現全臺各焚化廠貯坑存量、營運概況、異常狀況等。
          </p>
        </div>
      </button>
      <button type="button" class="mt-10">
        <div class="mb-4">
          <h2
            class="text-primary-500 border-primary-500 border-b pb-1 text-left text-2xl tracking-wide"
          >
            環評監測數據整合平臺
          </h2>
          <p class="text-primary-500 mt-1 text-right text-xs">2024.07-2024.12</p>
        </div>
        <div>
          <img
            src="@/assets/images/profolio/envImpact/login.jpg"
            alt="環評監測系統登入畫面"
            width="400"
            class="h-50 w-full rounded-lg object-cover transition-all duration-400 hover:scale-98"
          />
          <p class="mt-3 text-left text-gray-500">
            以儀表板方式呈現全臺各焚化廠貯坑存量、營運概況、異常狀況等。
          </p>
        </div>
      </button>
    </div>
  </div>
</template>
