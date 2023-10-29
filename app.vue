<template>
  <!--  <NuxtLayout>-->
<!--    <div class="relative bg-fixed background">-->
  <video class="fixed w-full h-full object-cover background" autoplay muted loop>
    <source src="/background9.mp4"/>
  </video>
  <div class="z-100 home inset-0 flex justify-center select-none overflow-x-auto">
    <NuxtPage/>
  </div>
<!--    </div>-->
  <!--  </NuxtLayout>-->
</template>
<script setup lang="ts">
import "tw-elements/dist/css/tw-elements.min.css";
</script>

<style scoped>
.home {
  width: 1280px;
  margin: 0 auto;
  font-family: Chakra Petch, Proxima Nova, system-ui, sans-serif
}

.background {
  //background-image: url(/background4.jpg);
  //background-position: center;
  //animation: zoom 30s infinite;
  z-index: -1;
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