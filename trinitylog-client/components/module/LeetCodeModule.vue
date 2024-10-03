<template>
  <div class="flex flex-col w-full h-full">
    <div class="text-stone-300 text-xl mb-1">
      Status :: {{ module.name }}
    </div>
    <div
        class="flex flex-initial bg-stone-900 h-full w-full p-1 items-center justify-center bg-opacity-60">
      <div class="m-1 ">
        <div class="shrink-1 relative max-h-[120px] max-w-[120px] z-base">
          <svg class="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
            <circle fill="none" cx="50px" cy="50px" r="46" stroke-width="3"
                    stroke-linecap="round" stroke="currentColor"
                    class="w-[100px] text-stone-300 "></circle>
            <circle fill="none" cx="50px" cy="50px" r="46" stroke-width="5"
                    stroke-linecap="round" stroke="currentColor"
                    class="cursor-pointer text-orange-400 drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                    stroke-dasharray="10.497084621091988 278.529439509169"
                    stroke-dashoffset="0"
                    data-difficulty="ALL"></circle>
          </svg>
          <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
            <div>
              <div class="text-2xl font-bold text-orange-400">{{ module.totalSolved }}</div>
              <div class="text-xs font-light text-stone-200">solved</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-1 w-full">
        <div class="my-2">
          <div class="flex text-xs justify-between text-lime-300">
            <div>EASY</div>
            <div>{{ module.easySolved }}/{{ module.easyTotal }}</div>
            <div>BEATS {{ module.easyBeats }}%</div>
          </div>
          <div class="bar bg-stone-300">
            <div class="progress" :style="'width:' + module?.easyBeats + '%'"/>
          </div>
        </div>
        <div class="my-2">
          <div class="flex text-xs justify-between text-orange-300">
            <div>MEDIUM</div>
            <div>{{ module.mediumSolved }}/{{ module.mediumTotal }}</div>
            <div>BEATS {{ module.mediumBeats }}%</div>
          </div>
          <div class="bar bg-stone-300">
            <div class="progress" :style="'width:' + module?.mediumBeats + '%'"/>
          </div>
        </div>
        <div class="my-2">
          <div class="flex text-xs justify-between text-red-300">
            <div>HARD</div>
            <div>{{ module.hardSolved }}/{{ module.hardTotal }}</div>
            <div>BEATS {{ module.hardBeats }}%</div>
          </div>
          <div class="bar bg-stone-300">
            <div class="progress" :style="'width:' + module?.hardBeats + '%'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {LeetcodeModule} from "~/model/Modules";

const props = defineProps({
  module: LeetcodeModule
});
</script>

<style scoped>
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