<script lang="ts" setup>
import Footer from "~/components/layout/Footer.vue";
import { MagnifyingGlassIcon} from "@heroicons/vue/24/solid";

definePageMeta({
  title: "Home",

});

</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <div class="flex flex-center flex-col justify-center h-screen w-screen items-start">
      <div class="w-full h-2/4 bg-color-background z-0">
        <div class="bg-color-text/20 blur-3xl w-96 h-60 rounded-full absolute left-[36%] bottom-[40%]"></div>
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

      <div class="w-full h-2/4 bg-color-background z-10 px-32">
        <div class="w-full h-16 flex items-center justify-between">
          <div class=" h-full flex items-center justify-center">
            <div class="w-60 h-1/2 flex items-center justify-center">
              <input type="text" class="w-full h-full rounded-sm border-2 border-color-text/20 focus:outline-none focus:border-color-text/50 px-5 montserrat" placeholder="recherche ..." />
            </div>
            <div class="w-10 h-1/2 pl-2 flex items-center justify-center">
              <button
                  class="w-full h-full rounded-sm bg-color-text/50 text-color-text font-bold hover:bg-color-text/10 transition-all duration-300 focus:outline-none focus:bg-color-text/10 montserrat flex items-center justify-center"
              >
                <component
                    :is="MagnifyingGlassIcon"
                    class="w-5 h-5 transition-all duration-300 text-neutral-color"
                    :fontControlled="false"
                />
              </button>
            </div>
          </div>

          <div class="h-full flex items-center justify-center">
            <select class="w-60 h-1/2 rounded-sm border-2 border-color-text/20 focus:outline-none focus:border-color-text/50 px-5 montserrat cursor-pointer">
              <option value="aucun">Aucun</option>
              <option value="date">Par date</option>
            </select>
          </div>

        </div>

        <div>
          <h2 class="montserrat text-xl text-center text-color-text">
            Nos dernières Newsletters
          </h2>
        </div>

        <div class="w-full h-auto flex flex-row items-center justify-between mt-10 mb-10">

          <div class="w-[40%] h-36 rounded-lg bg-color-text"></div>
          <div class="w-[40%] h-36 rounded-lg bg-color-text"></div>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>