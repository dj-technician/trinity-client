<template>
  <div class="flex w-full h-full mt-1">
    <div class="flex-initial w-3/4">
      <BodyMain />
    </div>
    <div class="flex-initial w-1/4">
      <SideBar/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SideBar from "@/components/layout/SideBar.vue";
import BodyMain from "@/components/layout/BodyMain.vue";

export default defineComponent({
  name: "BodyLayout",
  components: {BodyMain, SideBar}
})

</script>
<style scoped>

</style>