<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/16/solid';
</script>

<template>
  <footer class="fixed bottom-0 w-full rounded-t-lg bg-gray-100">
    <div class="container mx-auto px-4 py-1">
      <ul class="text-primary-500 flex gap-4 text-sm">
        <li>
          <a
            href="https://medium.com/@hsiao-i/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC%E7%AD%86%E8%A8%98-17d8a1abb0cd"
            target="_blank"
            class="flex gap-1 hover:text-gray-600"
          >
            <img src="@/assets/images/home/icon/medium.svg" alt="medium icon" />
            Medium</a
          >
        </li>
        <li>
          <a
            href="https://github.com/hsiao-i"
            target="_blank"
            class="flex gap-1 hover:text-gray-600"
          >
            <img src="@/assets/images/home/icon/github.svg" alt="github icon" />
            GitHub</a
          >
        </li>
        <li class="flex items-center gap-1 text-sm">
          <EnvelopeIcon class="size-4" />
          <span>eva090029@gmail.com</span>
        </li>
      </ul>
    </div>
  </footer>
</template>
