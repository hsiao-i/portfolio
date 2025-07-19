<template>
  <div class="container mx-auto px-4 py-20 text-xl">
    <div class="border-primary-500 border-x border-t px-4">
      <div class="border-primary-500 text-primary-500 px-4 py-3 font-mono text-8xl">Skill</div>
      <!-- <div class="border-primary-500 col-span-2"></div> -->
    </div>
    <div class="border-primary-500 grid grid-cols-2 border">
      <div class="border-r">
        <p class="border-primary-500 mb-2 border-b p-4 pb-3 text-2xl tracking-wide">網頁前端開發</p>
        <ul class="flex flex-col gap-3 px-8 py-3 text-xl">
          <li>Vue.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Git</li>
          <li>HTML、CSS</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="w-3/4">
          <p class="mb-8">
            獨立開發小型後臺系統，從 0 到 1 建立完整專案。涵蓋需求釐清、API
            規格設計、前端架構規劃、共用元件開發、邏輯模組抽離，以及技術文件撰寫，皆由我全權負責，完整掌握開發流程與系統架構。
          </p>
          <p class="text-base">
            Independently developed a admin dashboard from scratch, focusing on API design, frontend
            architecture, and reusable components. Managed the entire process from planning to
            deployment.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="border-primary-500 border-x border-b px-4">
        <!-- <div class="border-primary-500 border-r"></div> -->
        <div
          class="border-primary-500 text-primary-500 col-span-2 px-4 py-3 text-right font-mono text-8xl"
        >
          Education
        </div>
      </div>
      <div class="border-primary-500 grid grid-cols-2 border-x border-b p-4 text-base">
        <div>
          <p>研究所</p>
          <p>國立臺灣藝術大學 圖文傳播藝術學系</p>
          <span class="mt-1 inline-block text-gray-400">就學期間 2017.09 － 2019.07</span>
        </div>
        <div>
          <p>語言能力</p>
          <div class="text-gray-400">
            <p>中文 母語</p>
            <p>英文 TOEIC 550 分</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
