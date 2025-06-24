<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const horizontal = ref<HTMLElement | null>(null);

onMounted(() => {
  const contents = gsap.utils.toArray('.content');
  console.log(contents);

  gsap.to(contents, {
    xPercent: -100 * (contents.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.horizontal',
      pin: true,
      scrub: 0.1,
      end: '+=3000',
      // end: () => '+=' + (contents.length - 1) * window.innerWidth,
    },
  });
});
</script>

<template>
  <main>
    <section ref="horizontal" id="horizontal" class="horizontal flex flex-nowrap">
      <div class="content h-screen w-screen flex-shrink-0 bg-pink-500">123</div>
      <div class="content h-screen w-screen flex-shrink-0 bg-yellow-500">123</div>
    </section>
  </main>
</template>
