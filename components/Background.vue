<template>
  <div class="background__item background">
    <div class="background__item background__lines"/>
    <bgCircleTop class="background__circle circle--top"/>
    <bgCircleBot class="background__circle circle--bot"/>
    <bgDotsBot class="background__dotsBot"/>
    <bgDotsSide class="backgorund__dotsSide" />
    <bgCurveLineToLeft v-if="!noTopElements" class="background__curveLineLeft" />
    <bgCurveLineToRight class="backgound__curveLineRight"/>
    <bgDotsLine class="dotsLine--1"/>
    <bgDotsLine class="dotsLine--2"/>
    <bgAngles
      :class="[
        'background__angles',
        {'angles--darker': darkAgnles}
      ]"
    />

  </div>
</template>

<script setup>
const route = useRoute();
const appWidth = inject("appWidth");

const isMain = computed(() => {
  var { name } = route;
  return name !== "index";
});
const darkAgnles = computed(() => isMain.value || appWidth.value < 1660);
const noTopElements = computed(() => isMain.value);
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
    background-image: url("assets/svg/background.svg");
    background-size: cover;
    z-index: 0;
}
.background__lines {
    width: 100%;
    height: 100%;
    background-image: url("assets/svg/vertical-lines.svg");
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
    top: calc(100vh - 13%);
    width: 49%;
}
.dotsLine--1 {
    position: absolute;
    width: 130px;
    left: 78px;
    top: calc(100vh - 5%);
}
.dotsLine--2 {
    position: absolute;
    width: 130px;
    right: 46px;
    top: 237px;
}
.background__angles {
    position: absolute;
    width: 41%;
    top: 45%;
    left: 50%;
    opacity: 0.4;
}
.angles--darker {
    opacity: 0.1;
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
    .background__angles {
        width: 70%;
    }
}
@media (max-width: 1023.99px) {
    .dotsLine--2, .background__curveLineLeft {
        display: none;
    }
}
</style>
