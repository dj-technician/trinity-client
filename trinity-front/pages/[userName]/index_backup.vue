<template>
  <div class="w-[inherit] flex-row">
    <div class="header-menu w-[inherit] fixed z-[100]">
      <HeaderMenuLayout/>
    </div>
    <div class="header-short w-[inherit] fixed z-[100] animate-[fade-in_350ms_ease-in-out]"
         :class="{'hidden': !showHeaderShort}">
      <HeaderShortLayout :blog-info="blogInfo"/>
    </div>
    <div class="header relative">
      <HeaderLayout :blog-info="blogInfo"/>
    </div>
    <div class="body">
      <div class="flex w-full py-1 min-h-[inherit]">
        <div class="flex-initial w-3/4">
          <BodyMain/>
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
import FooterLayout from "~/components/layout/FooterLayout.vue";
import HeaderLayout from "~/components/layout/HeaderLayout.vue";
import HeaderShortLayout from "~/components/layout/HeaderShortLayout.vue";
import HeaderMenuLayout from "~/components/layout/HeaderMenuLayout.vue";
import {LeetcodeModule} from "~/model/Modules";
import {BlogInfo, Header} from "~/model/BlogInfo";
import BodyMain from "~/components/layout/BodyMain.vue";
import SideBar from "~/components/layout/SideBar.vue";

const route = useRoute()

console.log(route.params.name);

const showHeaderShort = ref(false);
const blogInfo: BlogInfo = reactive(new BlogInfo(
    new Header(
        "DEVJK",
        "Software Engineer",
        "Backend Developer",
        "kakao",
        "Bundang, Korea",
        "<ul class=\"list-disc list-inside\">\n" +
        "              Welcome to DEVJK's development journal.\n" +
        "              <li class=\"text-sm ml-4\">\n" +
        "                I started studying in 2018 and began my career in 2020.\n" +
        "              </li>\n" +
        "              <li class=\"text-sm ml-4\">\n" +
        "                You can find my github here: <a class=\"text-lime-200 after:content-['_↗']\"\n" +
        "                                                href=\"https://github.com/kakao-leo-jung\"\n" +
        "                                                target=\"_blank\">https://github.com/kakao-leo-jung</a>\n" +
        "              </li>\n" +
        "            </ul>",
        new LeetcodeModule(
            103,
            11,
            80,
            12,
            711,
            1502,
            624,
            33.3,
            82.4,
            67.4
        )
    )
));

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  const scrollTop = window.scrollY;
  if (showHeaderShort.value) {
    showHeaderShort.value = scrollTop > 40;
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
  padding-top: 0.1rem;
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