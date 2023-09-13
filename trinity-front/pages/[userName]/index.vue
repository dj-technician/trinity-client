<template>
  <div class="flex flex-col bg-stone-800 h-full p-3 select-auto">
    <div class="flex w-full h-full justify-center place-items-center">
      <div v-html="markdown" class="prose prose-lg prose-invert justify-center place-items-center">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as marked from "marked";

let markdown = "# Hello World"
markdown = marked.parse(`
![title](/favicon.ico)

# Welcome to Trinity: Where Coding and Innovation Unite

Hey, I'm DEVJK, and I'm thrilled to have you here on by blog service, "Trinity"!.

--------------

**About Me:**

I'm a passionate developer with a love for coding, technology, and all things web development related. I'm currently working on a few projects, including a blog, a portfolio, and a few other things.
My journey in the world of programming has been nothing short of exciting, and I'm here to share that with you.
`);
</script>

<style scoped>
.prose {
  padding-left: 3rem !important;
  padding-right: 3rem !important;
  max-width: none !important;
}
</style>