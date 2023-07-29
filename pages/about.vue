<script setup lang="ts"></script>

<template>
  <div class="py-12 px-6 flex flex-col h-full">
    <Heading class="text-center">About</Heading>

    <div class="space-y-6 mt-20 justify-center flex flex-col items-center">
      <p>
        Tic Tac is a game created by
        <a
          class="underline text-blue"
          target="_blank"
          href="https://twitter.com/sheifunmi_"
          >Seyi</a
        >
      </p>

      <Button as="router-link" to="/" theme="secondary"
        ><IconChevron class="h-5 rotate-180 mr-2" /> Back</Button
      >
    </div>
  </div>
</template>
