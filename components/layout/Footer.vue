<script setup lang="ts">
import IconGithub from '/assets/logo/github.svg'
import IconInstagram from '/assets/logo/instagram.svg'
import IconInformation from '/assets/logo/info.svg'

</script>

<template>
  <div class="w-full z-20">
    <div class="w-full h-[0.5px] bg-color-text flex items-center justify-center">
      <div class="w-8 h-8 bg-color-background rounded-full flex items-center justify-center">
        <img src="/assets/logo/nuxt.png" alt="logo" class="w-7/12 h-7/12" />
      </div>
    </div>
    <div class="p-5">
      <div class="flex justify-between items-center">
        <p class="text-sm text-gray-500 dark:text-gray-400 montserrat">
          ©2024 Nuxt Starter - MIT License
        </p>
        <div class="w-auto h-4 flex justify-between items-center">
          <a class="w-4 h-4 mr-3" href="https://github.com/cavalluccijohann" target="_blanck">
            <IconGithub class="w-full h-full text-gray-500 dark:text-gray-400" />
          </a>
          <a class="w-4 h-4 mr-3" href="https://www.instagram.com/johann.cvl" target="_blanck">
            <IconInstagram class="w-full h-full text-gray-500 dark:text-gray-400" />
          </a>
          <a class="w-4 h-4" href="https://bento.me/johanncvl" target="_blanck">
            <IconInformation class="w-full h-full " />
          </a>
          <div class="w-[0.5px] h-4 bg-color-primary mx-3"></div>
          <ThemeSelector />
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>