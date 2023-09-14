<template>
  <div class="flex w-full h-full bg-stone-900 space-x-4 place-items-center bg-opacity-90">
    <div class="flex m-0 pl-4">
      <label for="check">
        <input type="checkbox" id="check"/>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div class="flex">
      <img class="h-8 w-8" src="/favicon.ico" />
    </div>
    <div class="flex text-stone-50 text-2xl">
      <span>TRINITY</span>
    </div>
    <div class="flex flex-row-reverse w-full px-2">
      <img class="h-8 w-8 rounded-full" src="/profile.jpeg" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeaderMenuLayout"
})
</script>

<style scoped>
label {
  display: flex;
  width: 25px;
  flex-direction: column;
  cursor: pointer;
}

label span {
  background: #fff;
  height: 1px;
  margin: 4px 0;
  transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1) {
  width: 50%;
}

span:nth-of-type(2) {
  width: 100%;
}

span:nth-of-type(3) {
  width: 75%;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:checked ~ span:nth-of-type(1) {
  transform-origin: bottom;
  transform: rotatez(45deg) translate(5px, 1px)
}

input[type="checkbox"]:checked ~ span:nth-of-type(2) {
  transform-origin: top;
  transform: rotatez(-45deg)
}

input[type="checkbox"]:checked ~ span:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(11px, -5px) rotatez(45deg);
}
</style>