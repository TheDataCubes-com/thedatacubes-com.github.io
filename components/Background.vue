<template>
  <div
    v-if="!partnersPage"
    :style="!isMain ? 'height:100%;' : ''"
    :class="[
      'background__item',
      'background',
      {'background--static': !isMain},
    ]"
  >
    <div class="background__item background__lines"/>
    <BgCircleTop v-if="isMain" class="background__circle circle--top"/>
    <BgCircleBot v-if="isMain" class="background__circle circle--bot"/>
    <BgDotsBot class="background__dotsBot"/>
    <BgDotsSide class="backgorund__dotsSide" />
    <BgCurveLineToLeft v-if="isMain" class="background__curveLineLeft" />
    <BgCurveLineToRight
      v-if="!consultPage && !partnersPage"
      :style="position.line"
      class="backgound__curveLineRight"
    />
    <BgDotsLine
      v-if="!partnersPage"
      :style="position.dots"
      class="dotsLine--1"
    />
    <BgDotsLine v-if="!partnersPage" class="dotsLine--2"/>
    <BgAngles class="background__angles" />
  </div>
</template>

<script setup>
const route = useRoute();

const isMain = computed(() => {
  var { name } = route;
  return name === "index"
});
const partnersPage = computed(() => {
  var { name } = route;
  return name === "mdm-partners";
});
const consultPage = computed(() => {
  var { name } = route;
  return name === "free-consultation";
});
const position = computed(() => {
  var margin = isMain.value
    ? 0
    : (document.querySelector("footer")?.offsetHeight || 0);
  return {
    line: `top: calc(100vh - 13% - ${margin}px);`,
    dots: `top: calc(100vh - 5% - ${margin}px);`
  }
});
</script>

<style>
.background__item {
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
.background {
    overflow: hidden;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-image: url("/svg/background.svg");
    background-size: cover;
    z-index: 0;
}
.background--static {
    background-color: #170247;
    background-image: none;
}
.background__lines {
    width: 100%;
    height: 100%;
    background-image: url("/svg/vertical-lines.svg");
    background-size: cover;
    opacity: 0.2;
    z-index: 1;
    top: 0;
    left: 0;
}
.background__circle {
    position: absolute;
    width: 55%;
    height: 100vh;
}
.circle--top {
    left: 0;
}
.circle--bot {
    right: 0;
}
.background__dotsBot {
    position: absolute;
    width: 673px;
    height: 406px;
    left: calc(50% - (673px / 2));
    top: calc(100vh - 16%);
}
.backgorund__dotsSide {
    position: absolute;
    height: 673px;
    width: 406px;
    top: calc(50% - (673px / 2));
    left: calc(0px - 246px);
}
.background__curveLineLeft {
    position: absolute;
    right: -24px;
    top: calc(100vh - 65%);
    width: 54%;
}
.backgound__curveLineRight {
    position: absolute;
    left: 0;
    width: 49%;
}
.dotsLine--1 {
    position: absolute;
    width: 7vw;
    left: 78px;
}
.dotsLine--2 {
    position: absolute;
    width: 7vw;
    right: 46px;
    top: calc(100vh * 0.25);
}
.background__angles {
    position: absolute;
    width: 41%;
    top: 45%;
    left: 50%;
    opacity: 0.2;
}
@media (max-height: 639.99px) {
    .background__curveLineLeft {
        display: none;
    }
}
@media (max-width: 1279.99px) {
    .background__dotsBot {
        width: 50%;
        left: 25%;
        bottom: -203px;
    }
    .backgorund__dotsSide {
        height: 50%;
        top: 25%;
    }
}
@media (max-width: 1023.99px) {
    .background__curveLineLeft {
        top: calc(100vh * 0.30);
    }
    .dotsLine--2 {
        width: 10vw;
    }
}
@media (max-width: 767.99px) {
    .background__curveLineLeft, .dotsLine--1,
    .dotsLine--2, .backgound__curveLineRight {
        display: none;
    }
    .background__circle {
        width: 75%;
    }
    .circle--top {
        top: 10%;
    }
    .circle--bot {
        bottom: -10%;
    }
}
</style>
