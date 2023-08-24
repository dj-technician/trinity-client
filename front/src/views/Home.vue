<template>
  <div
      class="w-full max-w-screen-xl min-h-screen justify-center relative items-center bg-white">
    <div class="grid grid-cols-3 grid-rows-5 gap-3 w-full min-h-screen">
      <div class="bg-blue-200 col-start-1 col-span-2 row-span-1">
        <p class="text-xl font-mono text-pink-200">Hello world01</p>
      </div>
      <div class="bg-red-200 col-start-3 col-span-1 row-span-1">
        <p class="text-xl font-mono text-pink-200">Hello world02</p>
      </div>
      <div class="bg-yellow-200 col-start-1 col-span-2 row-span-4">
        <p class="text-xl font-mono text-pink-200">Hello world03</p>
      </div>
      <div class="bg-green-200 col-start-3 col-span-1 row-span-4">
        <p class="text-xl font-mono text-pink-200">Hello world04</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
})
</script>

<style scoped>
</style>