<script setup lang="ts">
import "@fontsource/orbitron";
</script>

<template>
  <div class="h-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
}
#__nuxt {
  height: 100%;
}

body {
  font-family: "Orbitron", sans-serif;
  background-color: theme("colors.black");
  background-image: url("./assets/bg-pattern.png");
  background-position: center center;
  background-repeat: repeat;
  color: theme("colors.white");
}
</style>
