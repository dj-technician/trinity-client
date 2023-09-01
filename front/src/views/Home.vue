<template>
  <div class="home bg-stone-800">
    <div class="header-menu">
      <HeaderMenuLayout/>
    </div>
    <div class="header relative">
      <HeaderLayout/>
    </div>
    <div class="block">
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
import HeaderMenuLayout from "@/components/layout/HeaderMenuLayout.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {HeaderMenuLayout, BodyLayout, HeaderLayout},
})
</script>

<style scoped>
/*
.home {
  width: 1280px;
}
 */


.header-menu {
  height: 40px;
}

.header {
  height: 200px;
}
</style>