<template>
  <div class="flex flex-col bg-stone-800 h-full p-3 select-auto">
    <div class="flex w-full h-full justify-center place-items-center text-lime-200 text-6xl">
      <article class="prose prose-stone">
        {{markdown}}
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const markdown = "# Hello World"
</script>

<style scoped>

</style>