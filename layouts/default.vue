<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <div class="h-screen flex flex-col justify-between">
    <LayoutNav />
    <slot />
    <Footer />
  </div>
</template>
