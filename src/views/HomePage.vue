<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ResumeSection from '@/components/resume/ResumeSection.vue';
import SkillSection from '@/components/resume/SkillSection.vue';
import ProjectDemoSection from '@/components/resume/ProjectDemoSection.vue';
import CustomCursor from '@/components/uiComponents/customCursor.vue';
import TechNote from '@/components/resume/TechNote.vue';

gsap.registerPlugin(ScrollTrigger);

const horizontal = ref<HTMLElement | null>(null);

const portrait = ref<HTMLElement | null>(null);

const horizontalGsap = ref<gsap.MatchMedia | null>(null);

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

  horizontalGsap.value = gsap.matchMedia();

  horizontalGsap.value.add('(min-width: 768px) and (min-height: 768px)', () => {
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

  horizontalGsap.value.add('(max-width: 767px), (max-height: 767px)', () => {
    // 小螢幕時重置為垂直滾動，不使用橫向動畫
    gsap.set(contents, { clearProps: 'all' });
  });
});

onUnmounted(() => {
  horizontalGsap.value?.revert(); // ✅ 清掉 matchMedia 註冊的動畫
});
</script>

<template>
  <main class="overflow-visible md:overflow-hidden">
    <!-- cursor follower -->
    <div class="">
      <CustomCursor />
    </div>
    <section
      class="relative container mx-auto flex h-screen w-full items-center justify-center overflow-hidden px-4"
    >
      <h1
        class="knewave-regular text-primary-500 absolute z-10 flex w-3/4 flex-col p-4 text-6xl text-shadow-lg md:text-9xl"
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
    <section ref="horizontal" id="horizontal" class="horizontal block flex-nowrap md:flex">
      <div id="resume" class="content mx-auto h-auto w-screen flex-shrink-0 px-4 md:h-screen">
        <ResumeSection />
      </div>
      <div id="skills" class="content h-auto w-screen flex-shrink-0 md:h-screen">
        <SkillSection />
      </div>
      <div id="projects" class="content h-auto w-screen flex-shrink-0 md:h-screen">
        <ProjectDemoSection />
      </div>
      <div id="tech-notes" class="content h-auto w-screen flex-shrink-0 md:h-screen">
        <TechNote />
      </div>
    </section>
  </main>
</template>
