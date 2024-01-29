<script setup lang="ts">
import { ref } from 'vue';
const email = ref("");
function fetchEmail() {
  useFetch("/api/audience", {
    method: "POST",
    body: {
      email: email,
    },
  });
}

/**
 * Send Mail User
 */
function sendMailUser() {
  // Simple regex for email validation
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (emailRegex.test(email.value)) {
    fetchEmail();
  }
  email.value = "";
}

</script>

<template>
  <div>

    <div class="w-full h-12 flex items-center justify-center">
      <div class="w-80 h-full">
        <input
            v-model="email"
            type="text"
            class="w-full h-full rounded-lg border-2 border-color-text/20 focus:outline-none focus:border-color-text/50 px-5 montserrat"
            placeholder="mail@example.com"
        />
      </div>
      <div class="w-32 h-full pl-2">
        <button
            @click="sendMailUser()"
            class="w-full h-full rounded-lg bg-color-text/50 text-color-background hover:text-color-text/50 font-bold hover:bg-color-text/10 transition-all duration-300 focus:outline-none focus:bg-color-text/10 montserrat"
        >
          <p class="">
            Subscribe
          </p>

        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>