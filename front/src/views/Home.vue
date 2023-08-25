<template>
  <div
      class="w-full max-w-screen-xl min-h-screen justify-center relative items-center bg-white">
    <div class="grid grid-cols-3 grid-rows-5 gap-3 w-full min-h-screen bg-stone-900">
      <div class="col-start-1 col-span-2 row-span-1">
        <TitleBanner/>
      </div>
      <div class="col-start-3 col-span-1 row-span-1">
        <Profile/>
      </div>
      <div class="col-start-1 col-span-2 row-span-4">
        <MainBoard/>
      </div>
      <div class="col-start-3 col-span-1 row-span-4">
        <SideBar/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TitleBanner from "@/components/home/TitleBanner.vue";
import Profile from "@/components/home/Profile.vue";
import SideBar from "@/components/home/SideBar.vue";
import MainBoard from "@/components/home/MainBoard.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {SideBar, MainBoard, Profile, TitleBanner},
})
</script>

<style scoped>
</style>