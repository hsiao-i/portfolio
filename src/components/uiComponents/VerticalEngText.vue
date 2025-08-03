<template>
  <h2 class="lh-base text-primary-400 write-sideway-lr transform font-mono text-base/40">
    <slot />
  </h2>
</template>
<style scoped>
.write-sideway-lr {
  writing-mode: sideways-lr;
}
</style>
