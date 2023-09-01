<template>
  <div class="inline-flex w-full h-full">
    <div class="flex-initial w-3/4 ml-3 border">
      Hello world
    </div>
    <div class="flex-initial w-1/4 mx-3 border">
      <SideBar/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SideBar from "@/components/layout/SideBar.vue";

export default defineComponent({
  name: "BodyLayout",
  components: {SideBar}
})

</script>
<style scoped>

</style>