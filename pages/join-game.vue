<script lang="ts" setup>
import { useForm } from "vee-validate";
import { object, string } from "yup";
import { useGameStore } from "~~/store";

const { joinGame } = useGameStore();

const validationSchema = object({
  name: string()
    .required("Player name is required")
    .max(20, "Player name must be less than 20 characters"),
  code: string().required("Game code is required"),
});

const { errors, values, handleSubmit } = useForm({
  validationSchema,
});
const join = handleSubmit(() => {
  console.log(values.name, values.code);
  joinGame(values.name, values.code);
});
</script>

<template>
  <div>
    <form class="h-full" @submit="join">
      <div class="py-12 px-6 flex flex-col justify-between h-full">
        <Heading class="text-center">Join game</Heading>

        <div class="space-y-4 mt-10">
          <InputText name="name" label="Enter player name:" />
          <InputText name="code" label="Enter game code:" />
        </div>

        <div class="flex justify-between mt-10">
          <Button as="router-link" to="/" theme="secondary"
            ><IconChevron class="h-5 rotate-180 mr-2" /> Back</Button
          >
          <Button
            :disabled="
              !values.name || !values.code || !!Object.keys(errors).length
            "
            type="submit"
            >Next <IconChevron class="h-5 ml-2"
          /></Button>
        </div>
      </div>
    </form>
  </div>
</template>
