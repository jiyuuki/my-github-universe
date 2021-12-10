<template>
  <section class="bg-white dark:bg-gray-800">
    <div class="max-w-3xl px-6 py-16 mx-auto text-center">
      <h1 class="text-3xl font-semibold text-gray-800 dark:text-gray-100">Lorem ipsum dolor sit amet</h1>
      <p class="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, minus tempora nemo quos</p>

      <div class="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
        <input
          id="username"
          type="text"
          class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          placeholder="Username"
        >
        <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Search
        </button>
      </div>
    </div>
  </section>

</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Search',

  setup() {
    const username = ref('')

    const searchUniverse = () => {
      console.log({ username: username.value })
    }
    return {
      username,
      searchUniverse
    }
  }
}
</script>
