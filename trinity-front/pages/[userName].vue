<template>
  <NuxtLayout :blogInfo="blogInfo">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {LeetcodeModule} from "~/model/Modules";
import {BlogInfo, Header, Meta} from "~/model/BlogInfo";

const route = useRoute()

console.log(route.params.userName);
const userName: string = route.params.userName.toString();

const blogInfo: BlogInfo = reactive(new BlogInfo(
    new Meta('dfjung4254', userName),
    new Header(
        userName.toUpperCase(),
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
</script>

<style scoped>
</style>