/*

This component supports up to three images, intended to be used in flow of an article

*/

<script setup lang="ts">

</script>

<template>
  <form class="max-w-sm">
    <div class="form-element">
      <label for="name">Name:</label>
      <input id="name" type="text" name="name" required>
    </div>

    <div class="form-element">
      <label for="email">Email:</label>
      <input id="email" type="email" name="email" required>
    </div>

    <div class="form-element">
      <label for="message">Message:</label>
      <textarea id="message" name="message" required />
    </div>

    <button type="submit">
      Send Message
    </button>
  </form>
</template>

<style scoped>
.form-element {
  @apply mb-4;
}

.form-element input,
.form-element textarea {
  @apply text-lg w-full rounded block text-black bg-slate-50 p-2;
}

button {
  @apply bg-indigo-700 hover:bg-indigo-600 rounded font-bold p-4 transition-colors duration-200;
}
</style>
