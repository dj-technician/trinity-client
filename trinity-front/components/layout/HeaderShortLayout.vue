<template>
  <div
      class="flex w-full h-full bg-stone-900 space-x-4 place-items-center bg-opacity-90 justify-center">
    <div v-if="showLogo"
         class="flex flex-row place-items-center space-x-2 px-4 animate-[fade-in_0.3s_both]">
      <div class="bg-cover w-8 h-8"
           style="background-image: url(/profile.jpeg)"/>
      <div class="text-xl text-stone-50 cursor-pointer">{{ blogInfo.header.name }}</div>
    </div>
    <div class="text-stone-600 hover:text-stone-300 cursor-pointer">
      <NuxtLink :to="'/' + blogInfo.meta.userName">home</NuxtLink>
    </div>
    <div class="text-stone-600 hover:text-stone-300 cursor-pointer">
      <NuxtLink :to="'/' + blogInfo.meta.userName + '/about'">about</NuxtLink>
    </div>
    <div class="text-stone-600 hover:text-stone-300 cursor-pointer">
      <NuxtLink :to="'/' + blogInfo.meta.userName + '/post'">post</NuxtLink>
    </div>
    <div class="text-stone-600 hover:text-stone-300 cursor-pointer">
      <NuxtLink :to="'/' + blogInfo.meta.userName + '/project'">project</NuxtLink>
    </div>
    <div class="text-stone-600 hover:text-stone-300 cursor-pointer">
      <NuxtLink :to="'/' + blogInfo.meta.userName + '/contact'">contact</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {BlogInfo} from "~/model/BlogInfo";
import {PropType} from "@vue/runtime-core";

const props = defineProps({
  blogInfo: {
    type: Object as PropType<BlogInfo>,
    required: true
  },
  showLogo: Boolean
});
</script>

<style scoped>

</style>