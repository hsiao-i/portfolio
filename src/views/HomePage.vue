<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ResumeSection from '@/components/resume/ResumeSection.vue';
import SkillSection from '@/components/resume/SkillSection.vue';
import ProjectDemoSection from '@/components/resume/ProjectDemoSection.vue';

gsap.registerPlugin(ScrollTrigger);

const horizontal = ref<HTMLElement | null>(null);

const portrait = ref<HTMLElement | null>(null);

onMounted(() => {
  gsap.fromTo(
    portrait.value,
    {
      opacity: 0.5,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
  );
  gsap.fromTo(
    '.title-animate',
    {
      scale: 0.8,
    },
    {
      scale: 1,
      duration: 0.8,
    },
  );
  // 橫向捲動
  const contents = gsap.utils.toArray('.content');

  gsap.to(contents, {
    xPercent: -100 * (contents.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.horizontal',
      pin: true,
      scrub: 0.1,
      end: '+=3000',
    },
  });
});
</script>

<template>
  <main class="overflow-hidden">
    <section
      class="relative container mx-auto flex h-screen w-full items-center justify-center overflow-hidden px-4"
    >
      <h1
        class="knewave-regular text-primary-500 absolute z-10 flex w-3/4 flex-col p-4 text-9xl text-shadow-lg"
      >
        <p class="title-animate">
          <span class="block text-left">Frontend</span>
          <span class="block text-right">Developer</span>
        </p>
      </h1>
      <div
        ref="portrait"
        class="absolute h-full w-2/3 bg-[url(@/assets/images/home/portrait.png)] bg-cover bg-center brightness-10"
      ></div>
    </section>
    <section ref="horizontal" id="horizontal" class="horizontal flex flex-nowrap">
      <div class="content mx-auto h-screen w-screen flex-shrink-0 px-4">
        <ResumeSection />
      </div>
      <div class="content h-screen w-screen flex-shrink-0">
        <SkillSection />
      </div>
      <div class="content h-screen w-screen flex-shrink-0">
        <ProjectDemoSection />
      </div>
    </section>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Knewave&family=Kosugi+Maru&display=swap');
</style>
