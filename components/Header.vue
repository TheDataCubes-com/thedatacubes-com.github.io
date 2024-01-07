<template>
  <header @mouseleave="handleHeaderLeave" class="header">
    <div class="header__inner">
      <NuxtLink to="/">
        <img src="/datacubes-logo.svg" alt="dataCubes-logo" class="header__logo"/>
      </NuxtLink>
      <ul class="header__nav">
        <li
          v-for="{name, children} in links"
          @mouseover="handleMouseOver($event, children)"
          class="header__item header__link"
        >{{name}}</li>
      </ul>
      <div class="header__nav">
        <NuxtLink to="/" class="header__item header__link">Login</NuxtLink>
      </div>
    </div>
    <div :class="[
      'header__dropDown',
      {'dropDown--active': subMenu}
    ]">
      <nav
        :style="`left: ${subMenuPos}px`"
        :class="[
          'header__dropDown__nav',
          {'dropDown__nav--active': subMenu}
        ]"
      >
        <ul>
          <li v-for="{name, link} in subMenu">
            <NuxtLink :to="link" class="header__item">{{name}}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import links from "data/header";

const subMenu = ref(null);
const subMenuPos = ref(0);

const handleMouseOver = (event, menu) => {
  subMenu.value = menu;
  subMenuPos.value = event.target.offsetLeft;
};

const handleHeaderLeave = () => {
  subMenu.value = null;
  subMenuPos.value = 0;
};
</script>

<style>
.header {
    display: flex;
    place-content: center;
    padding: 20px 0;
    z-index: 11;
    position: relative;
    box-shadow: rgba(97, 0, 155, 0.35) 0px -60px 100px -28px inset;
    transition: background-color 0.3s ease;
}
.header:hover {
    background-color: white;
}
.header:hover .header__item {
    color: black;
}
.header__inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: var(--maxWidth);
    padding: 0 40px;
    width: 100%;
}
.header__logo {
    max-width: 155px;
    width: 100%;
}
.header__nav {
    display: flex;
    gap: 12px
}
.header__link {
    padding: 12px;
    font-size: 24px;
    display: inline-block;
}
.header__item {
    transition: color 0.3s ease, text-shadow 0.3s ease;
    cursor: pointer;
}
.header__item:hover {
    color: var(--main1) !important;
    text-shadow: 0px 0px 1px #9005e5;
}
.header__dropDown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 0px;
    height: 100vh;
    transform: translateY(100%);
    overflow: hidden;
    background-color: white;
    box-shadow: rgba(97, 0, 155, 0.35) 0px 100px 100px -28px inset;
    transition: max-height 0.3s ease;
}
.dropDown--active {
    max-height: 120px;
}
.header__dropDown__nav {
    position: absolute;
    opacity: 0;
}
.dropDown__nav--active {
    opacity: 1;
    transition: opacity 1s ease;
}
.header__dropDown__nav>ul {
    padding: 12px;
}
</style>
