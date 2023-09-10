<template>
  <div class="flex w-full h-full bg-stone-900 space-x-4 place-items-center bg-opacity-90 justify-center">
    <div class="flex flex-row place-items-center space-x-2 px-4">
      <div class="bg-cover w-8 h-8"
           style="background-image: url(profile.jpeg)"/>
      <div class="text-xl text-stone-50 cursor-pointer">DEVJK</div>
    </div>
    <div class="text-stone-600 hover:text-stone-300 cursor-pointer">about</div>
    <div class="text-stone-600 hover:text-stone-300 cursor-pointer">post</div>
    <div class="text-stone-600 hover:text-stone-300 cursor-pointer">project</div>
    <div class="text-stone-600 hover:text-stone-300 cursor-pointer">contact</div>
  </div>
</template>

<script setup lang="ts">
import {BlogInfo} from "~/model/BlogInfo";

const props = defineProps({
  blogInfo: BlogInfo
});
</script>

<style scoped>

</style>