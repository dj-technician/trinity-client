<template>
  <div class="home flex-row">
    <div class="header-menu w-[inherit] fixed z-[100]">
      <HeaderMenuLayout/>
    </div>
    <div class="header relative">
      <HeaderLayout/>
    </div>
    <div class="body">
      <BodyLayout/>
    </div>
    <div class="footer">
      <FooterLayout/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import BodyLayout from "@/components/layout/BodyLayout.vue";
import HeaderMenuLayout from "@/components/layout/HeaderMenuLayout.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {FooterLayout, HeaderMenuLayout, BodyLayout, HeaderLayout},
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
  margin-top: 40px;
}

.body {
  min-height: calc(100vh - 280px);
}

.footer {
  height: 40px;
}
</style>