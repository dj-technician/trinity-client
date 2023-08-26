<template>
  <div class="inline-flex border-2 w-full h-full">
    <div class="test flex-initial w-3/4 border-2">
      <div class="inline-flex w-full h-full">
        <div class="flex-initial w-1/5 bg-cover m-3"
             style="background-image: url(src/assets/profile.jpeg)"/>
        <div class="flex-initial w-4/5 m-3">
          <div class="flex-row w-full h-1/3">
            <div class="flex space-x-3">
              <div class="tracking-wide font-extrabold subpixel-antialiased text-3xl text-stone-50">!></div>
              <div class="tracking-wide font-medium subpixel-antialiased text-3xl text-stone-50">DEVJK</div>
              <div class="tracking-wide font-extralight subpixel-antialiased text-3xl text-stone-50">[</div>
              <div class="tracking-wide font-extralight subpixel-antialiased text-3xl text-stone-50">Software Engineer</div>
              <div class="tracking-wide font-extralight subpixel-antialiased text-3xl text-stone-50">]</div>
            </div>
            <div class="flex space-x-3">
              <div class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-400">Backend Developer</div>
              <div class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-100">//</div>
              <div class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-400">kakao</div>
              <div class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-100">//</div>
              <div class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-400">Bundang, Korea</div>
            </div>
          </div>
          <div class="flex-row w-full h-2/3 bg-amber-700">

          </div>
        </div>
      </div>
    </div>
    <div class="flex-initial w-1/4 border-2">

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TitleBanner from "@/components/home/TitleBanner.vue";
import Profile from "@/components/home/Profile.vue";

export default defineComponent({
  name: "HeaderLayout",
  components: {Profile, TitleBanner}
})
</script>

<style scoped>

</style>