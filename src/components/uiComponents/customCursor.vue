<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';

const cursorFollowerRef = ref<HTMLElement | null>(null);

const handleMouseMove = (e: MouseEvent) => {
  const { target, clientX, clientY } = e;

  // 通常如果要讓滑鼠跟隨的話，會取 clientX 和 clientY，這也是用 viewport 去看的座標 （如果用 pageX、pageY，則是會多包涵滾動軸距離）
  const element = target as Element;

  // 是否為可點擊的元素
  const isClickableElement = element?.closest('a') || element?.closest('button');

  gsap.to(cursorFollowerRef.value, {
    x: clientX - 12,
    y: clientY - 12,
    duration: 0.5,
    // ease: 'power4.in',
    opacity: isClickableElement ? 0.3 : 0.6,
    transform: `scale(${isClickableElement ? 3.5 : 1})`,
  });
};

const handleMouseLeave = () => {
  gsap.to(cursorFollowerRef.value, {
    duration: 0.7, // 0.7 秒 = 700 毫秒
    opacity: 0,
  });
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
});
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>
<template>
  <div
    ref="cursorFollowerRef"
    class="pointer-events-none fixed top-0 left-0 z-9999 size-3 -translate-0.5 rounded-full bg-amber-400"
  ></div>
</template>
