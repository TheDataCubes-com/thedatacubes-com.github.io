<template>
  <header
    @mouseleave="handleHeaderLeave"
    :class="['header', {'header--blur': isBlur}]"
  >
    <nav class="header__inner">
      <Logo @mouseover="handleHeaderLeave" class="header__logo"/>
      <ul v-if="!isMobile" class="header__nav">
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
          v-if="!isMobile"
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
        <div
          v-if="isMobile"
          @click="toggleBurger"
          :class="[
            'header__burger',
            {'burger--active': burgerActive}
          ]"
        >
          <div class="header__burger__item"/>
          <div class="header__burger__item"/>
          <div class="header__burger__item"/>
        </div>
      </div>
    </nav>
    <nav
      v-if="!isMobile"
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
    <MobileMenu
      v-else
      :class="[
        'header__mobileMenu',
        {'mobileMenu--open': burgerActive}
      ]"
    />
    <div class="header__backgroundBlend"/>
  </header>
</template>

<script setup>
import links from "data/header";

const subMenu = ref(null);
const subMenuPos = ref(0);
const subMenuParentLink = ref("");
const burgerActive = ref(false);

const appWidth = inject("appWidth");
const scroll = inject("scroll");

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
const toggleBurger = () => burgerActive.value = !burgerActive.value;

const isMobile = computed(() => appWidth.value < 860);
const isBlur = computed(() => scroll.value > 80);

const route = useRoute();

watch(route, _ => burgerActive.value = false);
watch(isMobile, (value) => {
  value ? handleHeaderLeave() : burgerActive.value = false;
});
</script>

<style>
.header {
    display: flex;
    place-content: center;
    padding: 20px 0;
    z-index: 11;
    top: 0px;
    position: sticky;
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}
.header--blur {
    backdrop-filter: blur(10px);
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
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease, text-decoration 0.3s ease;
}
.header__item:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, var(--mainYellow), transparent);
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
.header__burger {
    display: flex;
    width: 40px;
    height: 40px;
    place-content: center;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
    transition: gap 0.3s ease;
}
.header__burger__item {
  flex-shrink: 0;
  border-radius: 4px;
  width: 100%;
  height: 5px;
  background-color: white;
  transition: transform 0.3s ease, opacity 0.2s ease, background-color 0.3s ease;
}
.burger--active .header__burger__item:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}
.burger--active .header__burger__item:nth-child(2) {
    opacity: 0;
}
.burger--active .header__burger__item:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}
.header__mobileMenu {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(100%, 100%);
}
.mobileMenu--open {
    transform: translate(0%, 100%);
}
@media (hover:hover) {
    .header__item:hover:before {
        width: 100%;
    }
    .header__item:hover {
        color: var(--mainYellow) !important;
    }
    .header__burger:hover > .header__burger__item {
        background-color: var(--mainYellow);
    }
}
@media (max-width: 1279.99px) {
    .header__link {
        font-size: 20px;
    }
    .header__logo {
        max-width: 125px;
    }
}
@media (max-width: 1023.99px) {
    .header__link {
        font-size: 18px;
    }
    .header__logo {
        max-width: 110px;
    }
    .header__nav  {
        gap: 0;
    }
}
@media (max-width: 859.99px) {
    .header__nav {
        gap: 20px;
    }
}
</style>
