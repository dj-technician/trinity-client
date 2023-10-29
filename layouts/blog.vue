<template>
  <div class="w-[inherit] flex-row">
    <div class="header-menu w-[inherit] fixed z-[100]">
      <HeaderMenuLayout/>
    </div>
    <div class="header relative">
      <HeaderLayout :blog-info="blogInfo"/>
    </div>
    <div v-if="!showHeaderShort" class="header-short w-[inherit] z-[100]">
      <HeaderShortLayout :blog-info="blogInfo" :show-logo="false"/>
    </div>
    <div v-if="showHeaderShort" class="header-short w-[inherit] z-[100]">
    </div>
    <div v-if="showHeaderShort" class="header-short w-[inherit] z-[100] fixed">
      <HeaderShortLayout :blog-info="blogInfo" :show-logo="true"/>
    </div>
    <div class="body">
      <div class="flex w-full py-1 min-h-[inherit]">
        <div class="flex-initial w-3/4">
          <slot/>
        </div>
        <div class="flex-initial w-1/4">
          <SideBar/>
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
import HeaderShortLayout from "~/components/layout/blog/HeaderShortLayout.vue";
import HeaderLayout from "~/components/layout/blog/HeaderLayout.vue";
import SideBar from "~/components/layout/blog/SideBar.vue";
import FooterLayout from "~/components/layout/default/FooterLayout.vue";
import {BlogInfo} from "~/model/BlogInfo";
import {PropType} from "@vue/runtime-core";

const showHeaderShort = ref(false);
const props = defineProps({
  blogInfo: {
    type: Object as PropType<BlogInfo>,
    required: true
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  const scrollTop = window.scrollY;
  if (showHeaderShort.value) {
    showHeaderShort.value = scrollTop > 200;
    return;
  }
  showHeaderShort.value = scrollTop > 200;
}
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
  height: 200px;
  margin-top: 40px;
}

.body {
  min-height: calc(100vh - 320px);
}

.footer {
  height: 40px;
}
</style>