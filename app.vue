<template>
  <Header :isWhite="headerWhite" />
  <main class="pageLayout"><NuxtPage /></main>
  <Footer />
  <ClientOnly><Background /></ClientOnly>
  <CommonIcons />
</template>

<script setup>
import throttle from 'lodash/throttle';

const route = useRoute();

const appWidth = ref(1440);
const scroll = ref(0);
const headerWhite = ref(false);

const setAppWidth = throttle(({ target }) => appWidth.value = target.innerWidth, 200);
const handleScroll = throttle(() => scroll.value = window.scrollY, 200);

provide('appWidth', appWidth);
provide("scroll", scroll);
provide("changeHeader", (val) => headerWhite.value = val);

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
@font-face {
  font-family: "franklinRegular";
  src: url('/fonts/LibreFranklin-Regular.ttf') format('truetype');
  /* src: url('/fonts/EBGaramond-Regular.ttf') format('truetype'); */
}
:root {
    --mainPurple: rgb(98, 0, 155);
    --softPink: #f7eefc;
    --darkPurple: #210076;
    --mainYellow: #ffc107;
    --errorRed: #770000;
    --maxWidth: 1660px;
    --maxContentWidth: 1420px;
    --maxCardWidth: 900px;
}
html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
    overflow-x: hidden;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: franklinRegular, sans-serif;
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
h3, h4 {
    font-weight: 600;
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
}
@media (max-width: 574.99px) {
    h2, h1 {
        font-size: 32px;
    }
}
</style>
