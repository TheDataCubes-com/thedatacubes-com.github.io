<template>
  <header @mouseleave="handleHeaderLeave" class="header">
    <div class="header__inner">
      <Logo @mouseover="handleHeaderLeave" class="header__logo"/>
      <ul class="header__nav">
        <li
          v-for="{name, children} in links"
          @mouseover="handleMouseOver($event, children)"
          class="header__item header__link"
        >{{name}}</li>
      </ul>
      <NuxtLink
        to="/login"
        @mouseover="handleHeaderLeave"
        class="header__item header__link"
      >Login</NuxtLink>
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
    <div class="header__backgroundBlend"/>
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
    transition: background-color 0.3s ease;
}
.header__backgroundBlend {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    opacity: 0.05;
    z-index: -1;
}
.header:hover {
    background-color: white;
}
.header:hover .header__item {
    color: black;
}
.header:hover .logo__path2 {
    fill: black;
}
.header:hover stop {
    stop-color: black;
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
.header__log:hover .header__item {
    color: var(--mainPurple);
}
.header__logo:hover .logo__path2 {
    fill: var(--mainPurple);
}
.header__logo:hover stop {
    stop-color: var(--mainPurple);
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
    transition: color 0.3s ease, text-decoration 0.3s ease;
    cursor: pointer;
    position: relative;
}
.header__item:hover {
    color: var(--mainPurple) !important;
}
.header__item:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, var(--mainPurple), transparent);
    transition: width 0.3s ease;
}
.header__item:hover:before {
    width: 100%;
}
.header__dropDown {
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    max-height: 0px;
    height: 100vh;
    transform: translateY(100%);
    overflow: hidden;
    background-color: white;
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
