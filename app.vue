<template>
  <Header :isWhite="!isMain || headerWhite" />
  <main class="pageLayout"><NuxtPage /></main>
  <Footer />
  <Background v-if="isMain" />
  <CommonDynamicButton
    v-if="isMain"
    link="/free-consultation"
    text="Set up a Free Consultation"
    :isIcon="true"
    class="consultButton"
  />
</template>

<script setup>
import pkg from 'lodash';
const { throttle } = pkg;

const route = useRoute();

const appWidth = ref(1440);
const scroll = ref(0);
const headerWhite = ref(false);

const isMain = computed(() => {
  var { name } = route;
  return name === "index";
});

const setAppWidth = throttle(({ target }) => appWidth.value = target.innerWidth, 200);
const handleScroll = throttle(() => scroll.value = window.scrollY, 200);

provide('appWidth', appWidth);
provide("scroll", scroll);
provide("changeHeader", (val) => {
  if (val !== headerWhite.value) headerWhite.value = val;
});

onMounted(() => {
  appWidth.value = window.innerWidth;
  scroll.value = window.scrollY;
  window.addEventListener('resize', setAppWidth);
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', setAppWidth);
  window.removeEventListener("scroll", handleScroll);
});

watch(() => route.fullPath, () => headerWhite.value = false);
</script>

<style>
:root {
    --mainPurple: rgb(98, 0, 155);
    --softPink: #f7eefc;
    --darkPurple: #210076;
    --mainYellow: #ffc107;
    --errorRed: #770000;
    --maxWidth: 1660px;
    --maxContentWidth: 1420px;
}
html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
    color: black;
}
a {
    text-decoration: none;
}
ul {
    list-style: none;
}
h2, h1 {
    font-weight: 500;
    font-size: 60px;
    color: #3D3D3D;
    text-align: center;
}
h3 {
    font-weight: 500;
    font-size: 20px;
    color: #3D3D3D;
}
p, a, span, button, li {
    font-weight: 300;
    font-size: 18px;
    color: #666666;
}
p {
    line-height: 1.5;
}
b {
    font-size: 24px;
    color: #666666;
}
#__nuxt {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
    width: 100%;
}
.main {
    place-self: center;
    max-width: var(--maxWidth);
    width: 100%;
    padding: 86px 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}
.pageLayout {
    flex-grow: 1;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.consultButton {
    position: absolute;
    top: calc(100vh * 0.76);
    right: 80px;
    z-index: 20;
}
@media (max-width: 1659.99px) {
    h2, h1 {
        font-size: 52px;
    }
    .main {
        padding: 56px 80px;
    }
}
@media (max-width: 1439.99px) {
    .main {
        padding: 46px 60px;
    }
    h2, h1 {
        font-size: 48px;
    }
}
@media (max-width: 1279.99px) {
    h2, h1 {
        font-size: 44px;
    }
}
@media (max-width: 1179.99px) {
    .consultButton {
        top: calc(100vh * 0.88);
    }
}
@media (max-width: 1023.99px) {
    h2, h1 {
        font-size: 40px;
    }
    .main {
        padding: 40px;
    }
}
@media (max-width: 767.99px) {
    h2, h1 {
        font-size: 36px;
    }
    h3 {
        font-size: 20px;
    }
    p, a, span, li, b {
        font-size: 16px;
    }
    .consultButton {
        width: calc(100vw - 40px * 2);
        top: calc(100vh - 80px);
        right: 50%;
        transform: translateX(50%);
    }
}
@media (max-width: 574.99px) {
    h2, h1 {
        font-size: 32px;
    }
    h3 {
        font-size: 18px;
    }
    p, a, span, li, b {
        font-size: 14px;
    }
}
</style>
