<template>
  <NuxtLayout>
    <div class="flex bg-stone-800 h-full p-28 select-auto bg-opacity-50 backdrop-blur">

<!--      <div class="flex w-full">-->
        <div v-html="markdown" class="intro prose prose-lg prose-invert"></div>
<!--      </div>-->

      <!--        <div v-html="markdown" class="flex flex-col w-full prose prose-lg prose-invert">-->
      <!--        </div>-->
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import * as marked from "marked";

let markdown = "# Hello World"
markdown = marked.parse(`

# Welcome to Trinity: Where Coding and Innovation Unite

Hey, I'm DEVJK, and I'm thrilled to have you here on by blog service, "Trinity"!.

--------------

**About Me:**

I'm a passionate developer with a love for coding, technology, and all things web development related. I'm currently working on a few projects, including a blog, a portfolio, and a few other things.
My journey in the world of programming has been nothing short of exciting, and I'm here to share that with you.
`);

definePageMeta({
  layout: 'index'
})
</script>

<style scoped>
.intro {
  max-width: 100%;
}
</style>