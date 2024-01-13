<template>
  <header @mouseleave="handleHeaderLeave" class="header">
    <div class="header__inner">
      <Logo @mouseover="handleHeaderLeave" class="header__logo"/>
      <ul class="header__nav">
        <li
          v-for="{name, link, children, disabled} in links"
          @mouseover="handleMouseOver($event, children, link)"
        >
          <span
            v-if="disabled"
            style="cursor: default"
            class="header__item header__link link--disabled"
          >{{name}}</span>
          <NuxtLink
            v-else
            :to="link"
            class="header__item header__link"
          >{{name}}</NuxtLink>
        </li>
      </ul>
      <div class="header__nav">
        <NuxtLink
          to="/login"
          @mouseover="handleHeaderLeave"
          class="header__item header__link"
        >Login</NuxtLink>
        <DynamicButton
          text="Get a Free Consult"
          link="/get-consultation"
          :isInline="true"
          class="header__button"
        />
      </div>
    </div>
    <nav
      :style="`left: ${subMenuPos}px`"
      :class="[
        'header__dropDown__nav',
        {'dropDown__nav--active': subMenu}
      ]"
    >
      <ul>
        <li v-for="{name, link} in subMenu">
          <NuxtLink :to="subMenuParentLink + link" class="header__item">{{name}}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="header__backgroundBlend"/>
  </header>
</template>

<script setup>
import links from "data/header";

const subMenu = ref(null);
const subMenuPos = ref(0);
const subMenuParentLink = ref("");

const handleMouseOver = (event, menu, parentLink) => {
  if (!menu) {
    handleHeaderLeave();
    return;
  }
  subMenu.value = menu;
  subMenuPos.value = event.target.offsetLeft;
  subMenuParentLink.value = parentLink;
};

const handleHeaderLeave = () => {
  subMenu.value = null;
  subMenuPos.value = 0;
  subMenuParentLink.value = "";
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
    transition: color 0.3s ease, text-decoration 0.3s ease;
    cursor: pointer;
    position: relative;
}
.header__item:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #ffc107, transparent);
    transition: width 0.3s ease;
}
.header__dropDown__nav {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: fit-content;
    max-height: 0px;
    height: fit-content;
    transform: translateY(100%);
    overflow: hidden;
    background-color: var(--darkPurple);
    border-radius: 20px;
    border-top-left-radius: 0px;
}
.dropDown__nav--active {
    opacity: 1;
    transition: opacity 1s ease;
    max-height: 100vh;
    transition: max-height 0.3s ease;
}
.header__dropDown__nav>ul {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.link--disabled {
    cursor: default;
    user-select: none;
}
@media (hover:hover) {
    .header__item:hover:before {
        width: 100%;
    }
    .header__item:hover {
        color: #ffc107 !important;
    }
}
</style>
