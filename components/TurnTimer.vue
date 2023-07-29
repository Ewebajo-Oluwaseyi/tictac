<script lang="ts" setup>
import { useIntervalFn } from "@vueuse/core";
import dayjs from "dayjs";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useGameStore } from "../store/index";

const store = useGameStore();
const { game } = storeToRefs(store);

const goPercentage = ref(0);
useIntervalFn(() => {
  if (!game.value.currentGoEnd || !game.value.currentGoStart) {
    return;
  }

  const originalDuration = Math.abs(
    dayjs(game.value.currentGoStart).diff(
      dayjs(game.value.currentGoEnd),
      "milliseconds"
    )
  );

  const timeLeft = Math.max(
    0,
    dayjs(game.value.currentGoEnd).diff(dayjs(), "milliseconds")
  );

  goPercentage.value = 1 - timeLeft / originalDuration;
}, 50);

const playerColour = computed(() => {
  const colourMap = {
    1: "#02FFFF",
    2: "#FF7615",
  };

  return colourMap[game.value.currentPlayer];
});
</script>

<template>
  <div>
    <svg
      class="-mt-2"
      viewBox="0 0 370 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="turn-timer" filter="url(#filter0_d_107_88)">
        <rect
          id="outer"
          x="18"
          y="19"
          width="334"
          height="25"
          :stroke="playerColour"
          stroke-width="4"
        />
        <rect
          id="progress-bg"
          x="17"
          y="26"
          width="335"
          height="10"
          :fill="playerColour"
          fill-opacity="0.25"
        />
        <rect
          id="progress"
          x="17"
          y="26"
          :width="goPercentage * 335"
          height="10"
          :fill="playerColour"
          fill-opacity="0.72"
        />
      </g>
      <defs>
        <filter
          v-if="game.currentPlayer === 1"
          id="filter0_d_107_88"
          x="0"
          y="0.916107"
          width="370"
          height="61.0839"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.00784314 0 0 0 0 1 0 0 0 0 1 0 0 0 0.71 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_107_88"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_107_88"
            result="shape"
          />
        </filter>

        <filter
          v-if="game.currentPlayer === 2"
          id="filter0_d_107_88"
          x="0"
          y="0.916107"
          width="370"
          height="61.0839"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.462745 0 0 0 0 0.0823529 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_107_88"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_107_88"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped>
.jiggle {
  transform-origin: center;
  animation-name: jiggle;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 80ms;
  animation-fill-mode: both;
}

@keyframes jiggle {
  from {
    transform: rotate(-1deg);
  }
  to {
    transform: rotate(1deg);
  }
}
</style>
