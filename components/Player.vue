<script lang="ts" setup>
defineProps<{
  name: string;
  player: 1 | 2;
  orientation: "left" | "right";
}>();
</script>

<template>
  <div
    class="flex items-center"
    :class="{ 'flex-row-reverse': orientation === 'right' }"
  >
    <IconIcon0 v-if="player === 1" class="h-14 w-14" />
    <IconX v-if="player === 2" class="h-14 w-14" />
    <div :class="{ 'text-right': orientation === 'right' }">
      <p class="uppercase font-medium text-gray-400 text-xs">
        Player {{ player }}
      </p>
      <h4 class="uppercase font-medium text-white tracking-[0.25em]">
        {{ name }}
      </h4>
    </div>
  </div>
</template>
