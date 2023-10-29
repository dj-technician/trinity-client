<template>
  <div class="w-[inherit] flex-row">
    <div class="header-menu w-[inherit] fixed z-[100]">
      <HeaderMenuLayout/>
    </div>
    <div class="header relative">
      <HeaderLayout/>
    </div>
    <div class="body">
      <div class="flex w-full py-1 min-h-[inherit]">
        <div class="flex-initial w-full">
          <slot/>
        </div>
      </div>
    </div>
    <div class="footer">
      <FooterLayout/>
    </div>
  </div>
</template>

<script setup lang="ts">

import HeaderMenuLayout from "~/components/layout/default/HeaderMenuLayout.vue";
import FooterLayout from "~/components/layout/default/FooterLayout.vue";
import HeaderLayout from "~/components/layout/default/HeaderLayout.vue";
</script>

<style scoped>
.header-menu {
  height: 40px;
}

.header-short {
  top: 40px;
  height: 40px;
  padding-top: 0.0rem;
}

.header {
//height: 200px; margin-top: 40px;
}

.body {
  min-height: calc(100vh - 280px);
}

.footer {
  height: 40px;
}
</style>