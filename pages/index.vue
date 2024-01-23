<script lang="ts" setup>
import Footer from "~/components/layout/Footer.vue";

definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="flex flex-center flex-col justify-center h-screen w-screen items-start">
      <div class="w-full h-2/4 bg-color-background z-0">
        <div class="bg-color-text/20 blur-3xl w-96 h-60 rounded-full absolute left-[36%] top-80"></div>
        <div class="flex flex-col items-center w-full h-full justify-end">
          <InputInscription />
          <div class="w-80 h-auto flex items-center justify-center mt-10 mb-10">
            <p class="montserrat text-m text-color-text/50 text-center">
              Minim in excepteur ipsum deserunt irure. Reprehenderit duis magna amet tempor aliqua duis non incididunt amet. Qui laborum eu cupidatat .
            </p>
          </div>
        </div>
      </div>
      <div class="relative h-px w-full bg-gray-800 z-20">
        <div class="absolute inset-0 h-full w-20 animate-movex bg-gradient-to-l from-white opacity-0 shadow-[-10px_0_18px_4px_var(--tw-shadow-color)] shadow-color-text/50"></div>
      </div>

      <div class="w-full h-2/4 bg-color-background z-10">

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>