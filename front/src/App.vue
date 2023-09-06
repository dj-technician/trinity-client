<template>
  <!--    <div class="relative bg-fixed bg-gradient-to-r from-stone-800 via-stone-50 to-stone-800" >-->
  <!--        <div class="relative bg-fixed bg-stone-900" >-->
  <!--      <div class="relative bg-fixed bg-stone-50">-->
  <div class="relative bg-fixed background">
    <div class="home inset-0 flex justify-center select-none overflow-x-auto">
      <Home/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Home from "@/views/Home.vue";

export default defineComponent({
  name: "App",
  components: {Home},
})
</script>

<style scoped>
.home {
  width: 1280px;
  margin: 0 auto;
}

.background {
  background-image: url(src/assets/background.jpeg);
  background-position: center;
  transform: scale(1);
  z-index: -1; /* 배경 이미지가 내용 뒤로 가도록 설정 */
  animation: zoom 30s infinite alternate;
}

@keyframes zoom {
  0% {
    background-size: 100%;
  }
  100% {
    background-size: 110%;
  }
}
</style>