<script lang="ts" setup>
// Import icons from Heroicons
import {InboxIcon, PaperAirplaneIcon, PhoneIcon, UserCircleIcon} from "@heroicons/vue/24/solid";

definePageMeta({
  title: "Home",
});

// create a form object dynamically
const form = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
});

// create a function to send the form
async function sendForm() {
  await useFetch("/api/sendEmail", {
    method: "POST",
    body: form.value,
  });
  form.value = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
}
</script>

<template>
  <div class="flex flex-col h-screen justify-between mt-28">
    <div class="flex flex-center flex-col justify-center h-screen w-screen items-start">
      <div class="w-full bg-color-background z-0">
        <div class="bg-color-text/20 blur-3xl w-96 h-60 rounded-full absolute left-[36%] bottom-[30%]"></div>
        <div class="flex flex-col items-center w-full h-full justify-end">
          <h2 class="montserrat text-5xl text-color-text/50 pb-12">
            Subscribe to my newsletter
          </h2>
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
      <div class="w-full bg-color-background z-10 px-24">
        <div>
          <h2 class="montserrat text-5xl text-color-text/50 p-5 text-center">Contact me</h2>
        </div>
        <form class="w-full flex flex-col justify-center items-center mt-5" @submit.prevent="sendForm()">
          <div class="relative w-full flex flex-col justify-center items-center">
            <input
                type="text"
                required
                placeholder="full name"
                v-model="form.name"
                class="relative my-1 w-1/2 p-2 pl-10 m-4 input-ui"
            />
            <span class="w-1/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
            <component :is="UserCircleIcon" class="w-5 h-5 text-color-text/50" />
          </span>
          </div>
          <div class="relative w-full flex flex-col justify-center items-center">
            <input
                type="email"
                required
                placeholder="your email"
                v-model="form.email"
                class="relative my-1 w-1/2 p-2 pl-10 m-4 input-ui"
            />
            <span class="w-1/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
            <component :is="InboxIcon" class="w-5 h-5 text-color-text/50" />
          </span>
          </div>
          <div class="relative w-full flex flex-col justify-center items-center">
            <input
                type="tel"
                placeholder="your phone number"
                v-model="form.phone"
                class="relative my-1 w-1/2 p-2 pl-10 m-4 input-ui"
            />
            <span class="w-1/2 absolute inset-y-0 start-50 flex items-center pointer-events-none px-2.5">
            <component :is="PhoneIcon" class="w-5 h-5 text-color-text/50" />
          </span>
          </div>
          <div class="relative w-full flex flex-col justify-center items-center">
            <textarea
                type="text"
                required
                placeholder="your message"
                v-model="form.message"
                class="relative my-1 w-1/2 p-2 pl-5 m-4 input-ui min-h-24"
            />
          </div>
          <div class="relative w-full flex flex-col justify-center items-center">
            <button
                type="submit"
                class="relative transition-all duration-300 my-1 w-1/2 p-2 rounded-lg bg-color-text/50 hover:bg-color-text/40 text-color-background hover:text-color-text/50 font-bold hover:bg-primary-color/50 focus:outline-none focus:bg-primary-color flex items-center justify-center"
            >
              <component :is="PaperAirplaneIcon" class="w-5 h-5 mr-2" />
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>