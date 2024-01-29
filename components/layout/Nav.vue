<script setup lang="ts">
import { HomeIcon, NewspaperIcon, PaperAirplaneIcon} from "@heroicons/vue/24/solid";

const items = [
  {
    name: "Archive",
    path: "/archive",
    icon: NewspaperIcon,
  },
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: PaperAirplaneIcon,
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
