<script setup lang="ts">
withDefaults(
  defineProps<{
    showFooter?: boolean;
    animateLogo?: boolean;
  }>(),
  {
    showFooter: true,
    animateLogo: false,
  }
);
</script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <div class="max-w-sm max-h-[667px] h-full w-full">
      <div class="h-full flex flex-col">
        <!-- <Logo :animate-in="animateLogo" class="mt-4" /> -->
        <main class="h-full relative">
          <slot />
        </main>
        <footer v-if="showFooter" class="text-center uppercase mb-3">
          <p class="text-white text-xs">Built in the future by</p>
          <a
            class="text-blue drop-shadow-blue"
            href="https://pixelhop.io"
            target="_blank"
            >Seyi</a
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
