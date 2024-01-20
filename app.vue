<template>
  <Header :isWhite="headerWhite" />
  <main class="pageLayout">
    <NuxtPage />
  </main>
  <Footer />
  <Background />
  <DynamicButton
    v-if="isButton"
    link="/get-consultation"
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

const isButton = computed(() => {
  var { name } = route;
  return name !== "login" && name !== "get-consultation";
});

const setAppWidth = throttle(({ target }) => appWidth.value = target.innerWidth, 200);
const handleScroll = throttle(() => scroll.value = window.scrollY, 200);

provide('appWidth', appWidth);
provide("scroll", scroll);
provide("changeHeader", (val) => {
  if (val != headerWhite.value) headerWhite.value = val;
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
    --darkPurple: #210076;
    --mainYellow: #ffc107;
    --errorRed: #770000;
    --maxWidth: 1660px;
}
html {
    scroll-behavior: smooth;
    scroll-padding-top: 200px;
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
h1 {
    font-size: 80px;
}
h2 {
    font-weight: 500;
    font-size: 60px;
}
h3 {
    font-weight: 400;
    font-size: 32px;
}
p, a, span {
    font-weight: 300;
    font-size: 24px;
}
p {
    line-height: 1.5;
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
    h1 {
        font-size: 64px;
    }
    h2 {
        font-size: 42px;
    }
    h3 {
        font-size: 28px;
    }
    p, a, span {
        font-size: 22px;
    }
}
@media (max-width: 1439.99px) {
    h1 {
        font-size: 56px;
    }
    h2 {
        font-size: 38px;
    }
    h3 {
        font-size: 26px;
    }
    p, a, span {
        font-size: 20px;
    }
}
@media (max-width: 1279.99px) {
    h1 {
        font-size: 48px;
    }
    h2 {
        font-size: 32px;
    }
    h3 {
        font-size: 24px;
    }
    p, a, span {
        font-size: 18px;
    }
}
</style>
