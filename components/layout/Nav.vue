<script setup lang="ts">
import { HomeIcon, BriefcaseIcon, UserIcon } from "@heroicons/vue/24/solid";

const items = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/",
  },
  {
    name: "About",
    path: "/",
  },
];
</script>

<template>
  <div class="absolute z-20 w-full flex items-center justify-center">
    <div class="sticky flex items-center justify-center gap-6 sm:gap-10 my-7 z-10 rounded-full p-2 bg-slate-50/0">
      <ItemNavBar v-for="item in items" :key="item.name" :item="item" />
    </div>
    <div>

    </div>
  </div>
</template>

<style scoped></style>
