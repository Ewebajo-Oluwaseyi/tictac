<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useGameStore } from "~~/store";

const router = useRouter();
const store = useGameStore();
const { game } = storeToRefs(store);
</script>

<template>
  <div class="px-6 flex flex-col h-full">
    <GridGame class="mx-auto" />
    <Players />
    <Score />
    <!-- <TurnTimer /> -->
  </div>
  <ModalsModalInstructions v-if="game.state === 'instructions'" />
  <ModalsModalCountdown v-else-if="game.state === 'countdown'" />
  <ModalsModalRoundWinner v-if="game.state === 'round-winner'" />
  <ModalsModalRoundGameWinner v-else-if="game.state == 'game-winner'" />
  <ModalsModalDisconnect v-else-if="game.state === 'disconnected'" />
</template>
