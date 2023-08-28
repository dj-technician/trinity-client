<template>
  <div class="inline-flex border-2 w-full h-full">
    <div class="test flex-initial w-3/4">
      <div class="inline-flex w-full h-full">
        <div class="flex-initial w-1/5 bg-cover m-3"
             style="background-image: url(src/assets/profile.jpeg)"/>
        <div class="flex-initial w-4/5 m-3">
          <div class="flex-row w-full h-1/3">
            <div class="flex space-x-3">
              <div class="tracking-wide font-extrabold subpixel-antialiased text-3xl text-stone-50">
                >
              </div>
              <div class="flex flex-row space-x-6">
                <div
                    class="tracking-wide font-medium subpixel-antialiased text-3xl text-stone-50 hero glitch layers"
                    data-text="DEVJK">
                  DEVJK
                </div>
                <div
                    class="tracking-wide font-extralight subpixel-antialiased text-3xl text-stone-50">
                  [ Software Engineer ]
                </div>
              </div>
            </div>
            <div class="flex space-x-3">
              <div
                  class="half_background_grey tracking-wide font-extralight subpixel-antialiased text-sm text-stone-300">
                Backend Developer
              </div>
              <div
                  class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-100">
                //
              </div>
              <div
                  class="half_background_yellow tracking-wide font-extralight subpixel-antialiased text-sm text-stone-300">
                kakao
              </div>
              <div
                  class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-100">
                //
              </div>
              <div
                  class="tracking-wide font-extralight subpixel-antialiased text-sm text-stone-300">
                Bundang, Korea
              </div>
            </div>
          </div>
          <div class="flex flex-row w-full h-2/3 items-center text-stone-400 text-base">
            <ul class="list-disc list-inside">
              Welcome to DEVJK's development journal.
              <li class="text-sm ml-4">
                I started studying in 2018 and began my career in 2020.
              </li>
              <li class="text-sm ml-4">
                You can find my github here: <a class="text-cyan-100 after:content-['_↗']"
                                                href="https://github.com/kakao-leo-jung"
                                                target="_blank">https://github.com/kakao-leo-jung</a>
              </li>
            </ul>
          </div>
          <!--          <div class="flex flex-row w-full h-2/3 items-center text-stone-400 text-base">-->
          <!--            <ul class="list-disc list-inside">-->
          <!--              Studied computer science since 2018, kicked off my developer journey in 2020.-->
          <!--              <li class="text-sm ml-4">-->
          <!--                Specialized in Java/Spring web development,-->
          <!--              </li>-->
          <!--              <li class="text-sm ml-4">-->
          <!--                With experience in payment platform, mydata, banking systems.-->
          <!--              </li>-->
          <!--            </ul>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
    <div class="flex-initial w-1/4 m-3">
      <div class="flex flex-col w-full h-full">
        <div class="text-stone-300 text-xl mb-1">
          Status :: Leetcode
        </div>
        <div class="flex flex-initial bg-stone-900 h-full w-full p-1 items-center justify-center">
          <div class="m-1 ">
            <div class="shrink-1 relative max-h-[120px] max-w-[120px] z-base">
              <svg class="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
                <circle fill="none" cx="50px" cy="50px" r="46" stroke-width="3"
                        stroke-linecap="round" stroke="currentColor"
                        class="w-[100px] text-stone-300 "></circle>
                <circle fill="none" cx="50px" cy="50px" r="46" stroke-width="5"
                        stroke-linecap="round" stroke="currentColor"
                        class="cursor-pointer text-orange-400 drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                        stroke-dasharray="10.497084621091988 278.529439509169"
                        stroke-dashoffset="0"
                        data-difficulty="ALL"></circle>
              </svg>
              <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                <div>
                  <div class="text-2xl font-bold text-orange-400">103</div>
                  <div class="text-xs font-light text-stone-200">solved</div>
                </div>
              </div>
            </div>
          </div>
          <div class="m-1 w-full">
            <div class="my-2">
              <div class="flex text-xs justify-between text-lime-300">
                <div>EASY</div>
                <div>11/711</div>
                <div>BEATS 33.3%</div>
              </div>
              <div class="bar bg-stone-300">
                <div class="progress w-3/4 "/>
              </div>
            </div>
            <div class="my-2">
              <div class="flex text-xs justify-between text-orange-300">
                <div>MEDIUM</div>
                <div>80/1502</div>
                <div>BEATS 82.4%</div>
              </div>
              <div class="bar bg-stone-300">
                <div class="progress w-3/4 "/>
              </div>
            </div>
            <div class="my-2">
              <div class="flex text-xs justify-between text-red-300">
                <div>HARD</div>
                <div>12/624</div>
                <div>BEATS 67.4%</div>
              </div>
              <div class="bar bg-stone-300">
                <div class="progress w-3/4 "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import TitleBanner from "@/components/home/TitleBanner.vue";
import Profile from "@/components/home/Profile.vue";

export default defineComponent({
  name: "HeaderLayout",
  components: {Profile, TitleBanner}
})
</script>

<style scoped>

.half_background_grey {
  background: linear-gradient(to top, darkslategrey 20%, transparent 40%);
}

.half_background_yellow {
  background: linear-gradient(to top, darkkhaki 20%, transparent 40%);
}

.half_background_red {
  background: linear-gradient(to top, darkred 20%, transparent 40%);
}

.bar {
  height: 3px;
}

.progress {
  height: 3px;
  background: #e03f97;
  background: -webkit-linear-gradient(to right, #f47c34, #e03f97);
  background: -o-linear-gradient(to right, #f47c34, #e03f97);
  background: -moz-linear-gradient(to right, #f47c34, #e03f97);
  background: -ms-linear-gradient(to right, #f47c34, #e03f97);
  background: linear-gradient(to right, #f47c34, #e03f97);
  -webkit-transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
  -moz-transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
  -o-transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
  -ms-transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
  transition: 600ms cubic-bezier(0.6, 0, 0.38, 1);
}

.hero {
  line-height: 1;
  z-index: 2;
  letter-spacing: 10px;

  /* Bright things in dark environments usually cast that light, giving off a glow */
}

.layers {
  position: relative;
}

.layers::before,
.layers::after {
  content: attr(data-text);
  position: absolute;
  width: 110%;
  z-index: -1;
}

.layers::before {
  top: 10px;
  left: 15px;
  color: #e0287d;
}

.layers::after {
  top: 5px;
  left: -10px;
  color: #1bc7fb;
}

.single-path {
  clip-path: polygon(
      0% 12%,
      53% 12%,
      53% 26%,
      25% 26%,
      25% 86%,
      31% 86%,
      31% 0%,
      53% 0%,
      53% 84%,
      92% 84%,
      92% 82%,
      70% 82%,
      70% 29%,
      78% 29%,
      78% 65%,
      69% 65%,
      69% 66%,
      77% 66%,
      77% 45%,
      85% 45%,
      85% 26%,
      97% 26%,
      97% 28%,
      84% 28%,
      84% 34%,
      54% 34%,
      54% 89%,
      30% 89%,
      30% 58%,
      83% 58%,
      83% 5%,
      68% 5%,
      68% 36%,
      62% 36%,
      62% 1%,
      12% 1%,
      12% 34%,
      60% 34%,
      60% 57%,
      98% 57%,
      98% 83%,
      1% 83%,
      1% 53%,
      91% 53%,
      91% 84%,
      8% 84%,
      8% 83%,
      4% 83%
  );
}

.paths {
  animation: paths 5s step-end infinite;
}

@keyframes paths {
  0% {
    clip-path: polygon(
        0% 43%,
        83% 43%,
        83% 22%,
        23% 22%,
        23% 24%,
        91% 24%,
        91% 26%,
        18% 26%,
        18% 83%,
        29% 83%,
        29% 17%,
        41% 17%,
        41% 39%,
        18% 39%,
        18% 82%,
        54% 82%,
        54% 88%,
        19% 88%,
        19% 4%,
        39% 4%,
        39% 14%,
        76% 14%,
        76% 52%,
        23% 52%,
        23% 35%,
        19% 35%,
        19% 8%,
        36% 8%,
        36% 31%,
        73% 31%,
        73% 16%,
        1% 16%,
        1% 56%,
        50% 56%,
        50% 8%
    );
  }

  5% {
    clip-path: polygon(
        0% 29%,
        44% 29%,
        44% 83%,
        94% 83%,
        94% 56%,
        11% 56%,
        11% 64%,
        94% 64%,
        94% 70%,
        88% 70%,
        88% 32%,
        18% 32%,
        18% 96%,
        10% 96%,
        10% 62%,
        9% 62%,
        9% 84%,
        68% 84%,
        68% 50%,
        52% 50%,
        52% 55%,
        35% 55%,
        35% 87%,
        25% 87%,
        25% 39%,
        15% 39%,
        15% 88%,
        52% 88%
    );
  }

  30% {
    clip-path: polygon(
        0% 53%,
        93% 53%,
        93% 62%,
        68% 62%,
        68% 37%,
        97% 37%,
        97% 89%,
        13% 89%,
        13% 45%,
        51% 45%,
        51% 88%,
        17% 88%,
        17% 54%,
        81% 54%,
        81% 75%,
        79% 75%,
        79% 76%,
        38% 76%,
        38% 28%,
        61% 28%,
        61% 12%,
        55% 12%,
        55% 62%,
        68% 62%,
        68% 51%,
        0% 51%,
        0% 92%,
        63% 92%,
        63% 4%,
        65% 4%
    );
  }

  45% {
    clip-path: polygon(
        0% 33%,
        2% 33%,
        2% 69%,
        58% 69%,
        58% 94%,
        55% 94%,
        55% 25%,
        33% 25%,
        33% 85%,
        16% 85%,
        16% 19%,
        5% 19%,
        5% 20%,
        79% 20%,
        79% 96%,
        93% 96%,
        93% 50%,
        5% 50%,
        5% 74%,
        55% 74%,
        55% 57%,
        96% 57%,
        96% 59%,
        87% 59%,
        87% 65%,
        82% 65%,
        82% 39%,
        63% 39%,
        63% 92%,
        4% 92%,
        4% 36%,
        24% 36%,
        24% 70%,
        1% 70%,
        1% 43%,
        15% 43%,
        15% 28%,
        23% 28%,
        23% 71%,
        90% 71%,
        90% 86%,
        97% 86%,
        97% 1%,
        60% 1%,
        60% 67%,
        71% 67%,
        71% 91%,
        17% 91%,
        17% 14%,
        39% 14%,
        39% 30%,
        58% 30%,
        58% 11%,
        52% 11%,
        52% 83%,
        68% 83%
    );
  }

  76% {
    clip-path: polygon(
        0% 26%,
        15% 26%,
        15% 73%,
        72% 73%,
        72% 70%,
        77% 70%,
        77% 75%,
        8% 75%,
        8% 42%,
        4% 42%,
        4% 61%,
        17% 61%,
        17% 12%,
        26% 12%,
        26% 63%,
        73% 63%,
        73% 43%,
        90% 43%,
        90% 67%,
        50% 67%,
        50% 41%,
        42% 41%,
        42% 46%,
        50% 46%,
        50% 84%,
        96% 84%,
        96% 78%,
        49% 78%,
        49% 25%,
        63% 25%,
        63% 14%
    );
  }

  90% {
    clip-path: polygon(
        0% 41%,
        13% 41%,
        13% 6%,
        87% 6%,
        87% 93%,
        10% 93%,
        10% 13%,
        89% 13%,
        89% 6%,
        3% 6%,
        3% 8%,
        16% 8%,
        16% 79%,
        0% 79%,
        0% 99%,
        92% 99%,
        92% 90%,
        5% 90%,
        5% 60%,
        0% 60%,
        0% 48%,
        89% 48%,
        89% 13%,
        80% 13%,
        80% 43%,
        95% 43%,
        95% 19%,
        80% 19%,
        80% 85%,
        38% 85%,
        38% 62%
    );
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    clip-path: none;
  }
}

.movement {
  /* Normally this position would be absolute & on the layers, set to relative here so we can see it on the div */
  position: relative;
  animation: movement 8s step-end infinite;
}

@keyframes movement {
  0% {
    top: 0px;
    left: -20px;
  }

  15% {
    top: 10px;
    left: 10px;
  }

  60% {
    top: 5px;
    left: -10px;
  }

  75% {
    top: -5px;
    left: 20px;
  }

  100% {
    top: 10px;
    left: 5px;
  }
}

.opacity {
  animation: opacity 5s step-end infinite;
}

@keyframes opacity {
  0% {
    opacity: 0.1;
  }

  5% {
    opacity: 0.7;
  }

  30% {
    opacity: 0.4;
  }

  45% {
    opacity: 0.6;
  }

  76% {
    opacity: 0.4;
  }

  90% {
    opacity: 0.8;
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    opacity: 0;
  }
}

.font {
  animation: font 7s step-end infinite;
}

@keyframes font {
  0% {
    font-weight: 100;
    color: #e0287d;
    filter: blur(3px);
  }

  20% {
    font-weight: 500;
    color: #fff;
    filter: blur(0);
  }

  50% {
    font-weight: 300;
    color: #1bc7fb;
    filter: blur(2px);
  }

  60% {
    font-weight: 700;
    color: #fff;
    filter: blur(0);
  }

  90% {
    font-weight: 500;
    color: #e0287d;
    filter: blur(6px);
  }
}

.glitch span {
  animation: paths 5s step-end infinite;
}

.glitch::before {
  animation: paths 5s step-end infinite, opacity 5s step-end infinite,
  font 8s step-end infinite, movement 10s step-end infinite;
}

.glitch::after {
  animation: paths 5s step-end infinite, opacity 5s step-end infinite,
  font 7s step-end infinite, movement 8s step-end infinite;
}
</style>