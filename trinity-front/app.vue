<template>
  <div class="relative bg-fixed background">
    <div class="home inset-0 flex justify-center select-none overflow-x-auto">
      <Home/>
    </div>
  </div>
</template>
<script setup lang="ts">
import "tw-elements/dist/css/tw-elements.min.css";
import Home from "~/components/home/Home.vue";
</script>

<style scoped>
.home {
  width: 1280px;
  margin: 0 auto;
  font-family: Chakra Petch, Proxima Nova, system-ui, sans-serif
}

.background {
  background-image: url(public/background.jpeg);
  background-position: center;
  animation: zoom 30s infinite;
}

@keyframes zoom {
  0% {
    background-size: 100%;
  }
  100% {
    background-size: 120%;
  }
}
</style>