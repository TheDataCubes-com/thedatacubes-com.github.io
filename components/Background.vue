<template>
  <div
    :style="consultPage ? 'height: 100%' : ''"
    :class="[
      'background__item',
      'background',
      {'background--static': !isMain}
    ]"
  >
    <div class="background__item background__lines"/>
    <bgCircleTop v-if="isMain" class="background__circle circle--top"/>
    <bgCircleBot v-if="isMain" class="background__circle circle--bot"/>
    <bgDotsBot class="background__dotsBot"/>
    <bgDotsSide class="backgorund__dotsSide" />
    <bgCurveLineToLeft v-if="isMain" class="background__curveLineLeft" />
    <bgCurveLineToRight
      v-if="!consultPage"
      :style="`top: calc(100vh - 13% - ${bottomElementsMargin}px);`"
      class="backgound__curveLineRight"
    />
    <bgDotsLine
      :style="`top: calc(100vh - 5% - ${bottomElementsMargin}px);`"
      class="dotsLine--1"
    />
    <bgDotsLine class="dotsLine--2"/>
    <bgAngles class="background__angles" />

  </div>
</template>

<script setup>
const route = useRoute();

const bottomElementsMargin = ref(0);

const isMain = computed(() => {
  var { name } = route;
  return name === "index"
});
const consultPage = computed(() => {
  var { name } = route;
  return name === "get-consultation"
});
const setMargin = () => {
  if (isMain.value) return 0;
  var footer = document.querySelector("footer");
  bottomElementsMargin.value = footer?.offsetHeight || 0;
};

onMounted(() => setMargin());
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
    width: 130px;
    left: 78px;
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
    opacity: 0.2;
}
@media (max-width: 1439.99px) {
    .background__curveLineLeft {
        opacity: 0.2;
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
    .dotsLine--2, .background__curveLineLeft {
        display: none;
    }
}
</style>
