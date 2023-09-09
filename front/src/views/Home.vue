<template>
  <div class="home flex-row">
    <div class="header-menu w-[inherit] fixed z-[100]">
      <HeaderMenuLayout/>
    </div>
    <div class="header-short w-[inherit] fixed z-[100] animate-[fade-in_350ms_ease-in-out]"
         :class="{'hidden': !showHeaderShort}">
      <HeaderShortLayout/>
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
import HeaderShortLayout from "@/components/layout/HeaderShortLayout.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {HeaderShortLayout, FooterLayout, HeaderMenuLayout, BodyLayout, HeaderLayout},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      // for view
      showHeaderShort: false,

      // for data
      blogInfo: {},
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      if (this.showHeaderShort) {
        this.showHeaderShort = scrollTop > 40;
        return;
      }
      this.showHeaderShort = scrollTop > 200;
    },
  }
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

.header-short {
  top: 40px;
  height: 60px;
  padding-top: 0.25rem;
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