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
        <h2 class="text-center text-lg font-bold">TicTac</h2>
        <!-- <Logo :animate-in="animateLogo" class="mt-4" /> -->
        <main class="h-full relative">
          <slot />
        </main>
        <footer
          v-if="showFooter"
          class="text-center uppercase mb-3 flex items-center gap-2 justify-center"
        >
          <p class="text-white text-xs">Built by -</p>
          <a
            class="text-blue drop-shadow-blue"
            href="https://twitter.com/sheifunmi_"
            target="_blank"
            >Seyi</a
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
