<script setup lang="ts">
import NavbarSection from '@/components/nav/NavbarSection.vue';
</script>

<template>
  <div class="bg-[#f0e7de]">
    <NavbarSection />
    <div class="kosugi-maru-regular text-gray-700">
      <RouterView />
    </div>
  </div>
</template>
