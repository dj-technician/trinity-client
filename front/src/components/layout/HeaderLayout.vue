<template>
  <div class="inline-flex border-2 w-full h-full">
    <div class="test flex-initial w-3/4">
      <div class="inline-flex w-full h-full">
        <div class="flex-initial w-1/5 bg-cover m-3"
             style="background-image: url(src/assets/profile.jpeg)"/>
        <div class="flex-initial w-4/5 m-3">
          <div class="flex-row w-full h-1/3">
            <div class="flex space-x-3">
              <div class="tracking-wide font-extrabold subpixel-antialiased text-3xl text-stone-50">
                >
              </div>
              <div class="tracking-wide font-medium subpixel-antialiased text-3xl text-stone-50">
                DEVJK
              </div>
              <div
                  class="tracking-wide font-extralight subpixel-antialiased text-3xl text-stone-50">
                [
              </div>
              <div
                  class="tracking-wide font-extralight subpixel-antialiased text-3xl text-stone-50">
                Software Engineer
              </div>
              <div
                  class="tracking-wide font-extralight subpixel-antialiased text-3xl text-stone-50">
                ]
              </div>
            </div>
            <div class="flex space-x-3">
              <div
                  class="half_background_grey tracking-wide font-extralight subpixel-antialiased text-sm text-stone-300">
                Backend Developer
              </div>
              <div
                  class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-100">
                //
              </div>
              <div
                  class="half_background_yellow tracking-wide font-extralight subpixel-antialiased text-sm text-stone-300">
                kakao
              </div>
              <div
                  class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-100">
                //
              </div>
              <div
                  class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-300">
                Bundang, Korea
              </div>
            </div>
          </div>
          <div class="flex flex-row w-full h-2/3 items-center text-stone-400 text-base">
            <ul class="list-disc list-inside">
              Welcome to DEVJK's development journal.
              <li class="text-sm ml-4">
                I started studying in 2018 and began my career in 2020.
              </li>
              <li class="text-sm ml-4">
                You can find my github here: <a class="text-cyan-100 after:content-['_↗']"
                                                href="https://github.com/kakao-leo-jung"
                                                target="_blank">https://github.com/kakao-leo-jung</a>
              </li>
            </ul>
          </div>
          <!--          <div class="flex flex-row w-full h-2/3 items-center text-stone-400 text-base">-->
          <!--            <ul class="list-disc list-inside">-->
          <!--              Studied computer science since 2018, kicked off my developer journey in 2020.-->
          <!--              <li class="text-sm ml-4">-->
          <!--                Specialized in Java/Spring web development,-->
          <!--              </li>-->
          <!--              <li class="text-sm ml-4">-->
          <!--                With experience in payment platform, mydata, banking systems.-->
          <!--              </li>-->
          <!--            </ul>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
    <div class="flex-initial w-1/4 m-3">
      <div class="flex flex-col w-full h-full">
        <div class="text-stone-300 text-xl mb-1">
          Status :: Leetcode
        </div>
        <div class="flex flex-initial bg-stone-900 h-full w-full p-1">
          <div class="m-1">
            <div class="shrink-1 relative max-h-[120px] max-w-[120px] z-base">
              <svg class="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
                <circle fill="none" cx="50px" cy="50px" r="46" stroke-width="3"
                        stroke-linecap="round" stroke="currentColor"
                        class="w-[100px] text-stone-300 "></circle>
                <circle fill="none" cx="50px" cy="50px" r="46" stroke-width="5"
                        stroke-linecap="round" stroke="currentColor"
                        class="cursor-pointer text-lime-400 drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                        stroke-dasharray="10.497084621091988 278.529439509169" stroke-dashoffset="0"
                        data-difficulty="ALL"></circle>
              </svg>
              <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                <div>
                  <div class="text-2xl font-bold text-lime-400">103</div>
                  <div class="text-xs font-light text-stone-200">solved</div>
                </div>
              </div>
            </div>
          </div>
          <div class="m-1 w-full text-cyan-200">
            <div class="bar bg-stone-300">
              <div class="progress w-3/4 " />
            </div>
          </div>

        </div>
      </div>
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
.half_background_grey {
  background: linear-gradient(to top, darkslategrey 20%, transparent 40%);
}

.half_background_yellow {
  background: linear-gradient(to top, darkkhaki 20%, transparent 40%);
}

.half_background_red {
  background: linear-gradient(to top, darkred 20%, transparent 40%);
}

.bar {
  height: 3px;
}

.progress {
  height: 3px;
  background: #e03f97;
  background: -webkit-linear-gradient(to right, #f47c34, #e03f97);
  background: -o-linear-gradient(to right, #f47c34, #e03f97);
  background: -moz-linear-gradient(to right, #f47c34, #e03f97);
  background: -ms-linear-gradient(to right, #f47c34, #e03f97);
  background: linear-gradient(to right, #f47c34, #e03f97);
  -webkit-transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
  -moz-transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
  -o-transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
  -ms-transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
  transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
}
</style>