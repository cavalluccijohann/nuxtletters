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
      <div class="w-100 h-2/4 bg-color-background z-0">
        <div class="bg-color-text/20 blur-3xl w-96 h-60 rounded-full absolute left-[38%] top-80"></div>
        <div>

        </div>
      </div>
      <div class="w-full h-2/4 bg-color-background z-50">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>