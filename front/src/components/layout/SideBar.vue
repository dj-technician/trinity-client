<template>
  <div class="flex-col">
    <div class="bg-stone-900 p-2">
      <div class="text-xs text-stone-300">Current Mode</div>
      <div class="text-xl text-lime-300">Intensively Engaged</div>
      <div class="text-xs text-stone-400 mb-2">truly passionate and hardworking state at coding.
      </div>
      <div class="flex flex-col bg-stone-700 text-stone-400 mb-2 p-2">
        <div class="text-base text-stone-200">Last Activities</div>
        <div class="flex flex-row text-sm justify-between">
          <div>blog :: post</div>
          <div>23-03-11 11:00</div>
        </div>
        <div class="flex flex-row text-sm justify-between">
          <div>blog :: activity</div>
          <div>23-03-11 11:00</div>
        </div>
        <div class="flex flex-row text-sm justify-between">
          <div>git :: commit</div>
          <div>23-01-11 11:28</div>
        </div>
        <div class="flex flex-row text-sm justify-between">
          <div>p/s :: leetcode</div>
          <div>23-03-29 13:21</div>
        </div>
        <div class="flex flex-row-reverse text-xs text-stone-500">
          <a href="javascript:alert('Coming soon')" class="">+ add modules</a>
        </div>
      </div>
      <div class="flex flex-col bg-stone-700 text-stone-400 mb-2 p-2">
        <div class="text-base text-stone-200">Recent Trending Post</div>
        <div class="flex text-sm text-stone-400 pl-1">
          <li class="truncate">About ShardingSphere jdbc, this is test truncate text</li>
        </div>
        <div class="flex text-sm text-stone-400 pl-1">
          <li class="truncate">CI/CD with local unit testing, this is truncate text</li>
        </div>
        <div class="flex text-sm text-stone-400 pl-1">
          <li class="truncate">My blog [trinity] how it works? this is truncate text</li>
        </div>
      </div>
      <div class="flex flex-col bg-stone-700 text-stone-400 mb-2 p-2">
        <div class="text-base text-stone-200">Statistics</div>
        <div class="flex flex-row text-sm justify-between">
          <div>total visited</div>
          <div>10,029</div>
        </div>
        <div class="flex flex-row text-sm justify-between">
          <div>today</div>
          <div>23</div>
        </div>
        <div class="flex flex-row text-sm justify-between">
          <div>yesterday</div>
          <div>17</div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SideBar"
})
</script>

<style scoped>

</style>