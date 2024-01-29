<script setup lang="ts">
import { defineProps, type PropType } from "vue";

defineProps({
  item: {
    type: Object as PropType<{
      name: string;
      path: string;
      icon: any;
    }>,
    required: true,
  },
});
</script>

<template>
  <div>
    <NuxtLink
      :to="item.path"
      class="flex items-center justify-center cursor-pointer montserrat"
      :class="[
        $route.path === item.path
          ? 'bg-color-text/90 backdrop-blur-md text-color-background font-bold pt-3 pb-3 pl-4 pr-4 rounded-full card'
          : 'bg-color-text/50 text-color-background font-medium p-3 rounded-full',
      ]"
      :aria-label="'Go to ' + item.path + ' profile'"
    >
      <component
        :is="item.icon"
        class="w-5 h-5 transition-all duration-300 text-neutral-color"
        :fontControlled="false"
        :alt="item.path + ' logo'"
        :aria-label="item.path + ' logo'"
        :class="[
        $route.path === item.path
          ? 'mr-1'
          : '',
      ]
      "
      />
      <span v-if="$route.path === item.path">{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
