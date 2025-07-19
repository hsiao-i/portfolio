<script setup lang="ts">
const eriResume = [
  {
    id: 1,
    description:
      '負責 Vue.js 專案開發與前端架構設計，涵蓋小型後臺系統、資料視覺化儀表板等多項開發任務。',
  },
  {
    id: 2,
    description: '主導專案開發標準規範，包含資料夾結構設計、命名規範與 Git 流程制定。',
  },
  {
    id: 3,
    description:
      '主動設計 API 規格並釐清專案需求，提前與後端協調開發介面，有效降低開發期中來回溝通時間。',
  },
  {
    id: 4,
    description:
      '負責既有系統的技術升級與重構，從 Vue 2 升級至 Vue 3，導入 Composition API 與 Pinia，提升系統可讀性與擴展性。',
  },
  {
    id: 5,
    description:
      '執行網站效能優化（Lighthouse 桌機版效能分數提升 40 分），並提升整體使用者操作流暢度。',
  },
  {
    id: 6,
    description: '開發中注意無障礙準則，優化頁面語意與互動體驗，提升系統整體可用性。',
  },
];

const assistantResume = [
  {
    id: 1,
    description: 'HTML、CSS 製作教師形象網站，負責版型設計與內容呈現。',
  },
  {
    id: 2,
    description: '控管一年期專案進度，規劃活動時程與經費配置，確保專案如期執行。',
  },
];
</script>
<template>
  <div class="container mx-auto flex justify-center gap-18 px-4 py-20">
    <h2
      class="lh-base text-primary-500 write-sideway-lr transform font-mono text-base/40 text-[11rem]"
    >
      RESUME
    </h2>
    <div>
      <h2 class="knewave-regular text-primary-500 mb-16 text-4xl">
        Hello, I'm Eva Lo.
        <br />
        I'm a Frontend Developer.
      </h2>

      <div>
        <div>
          <div class="flex justify-between">
            <h3 class="mb-4 text-xl font-bold text-amber-800">前端工程師</h3>
            <p class="text-amber-900">2022.7 - 至今</p>
          </div>
          <ul class="flex list-decimal flex-col gap-3 pl-10 text-lg">
            <li v-for="item in eriResume" :key="item.id">
              {{ item.description }}
            </li>
          </ul>
        </div>

        <hr class="my-10" />

        <div>
          <div class="flex justify-between">
            <h3 class="mb-4 text-xl font-bold text-amber-800">研究助理</h3>
            <p class="text-amber-900">2019.7 － 2022.7</p>
          </div>
          <ul class="flex list-decimal flex-col gap-3 pl-10 text-lg">
            <li v-for="item in assistantResume" :key="item.id">
              {{ item.description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.write-sideway-lr {
  writing-mode: sideways-lr;
}
</style>
