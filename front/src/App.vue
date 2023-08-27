<template>
  <div class="relative">
    <div class="bg-center bg-no-repeat bg-cover bg-fixed h-screen" style="background-image: url(src/assets/background.jpeg)" >
    </div>
    <div class="absolute inset-0 flex justify-center select-none">
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

</style>