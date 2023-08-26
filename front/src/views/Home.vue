<template>
  <div class="home bg-stone-900">
    <div class="header relative">
      <HeaderLayout/>
    </div>
    <div class="container block">
      <BodyLayout/>
    </div>
    <div class="footer block">

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import BodyLayout from "@/components/layout/BodyLayout.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {BodyLayout, HeaderLayout},
})
</script>

<style scoped>
.home {
  width: 1280px;
}

.header {
  height: 200px;
}
</style>