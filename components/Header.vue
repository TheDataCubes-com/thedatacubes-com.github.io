<template>
  <header
    @mouseleave="handleHeaderLeave"
    :class="[
      'header',
      {'header--blur': isBlur},
      {'header--white': props.isWhite}
    ]"
  >
    <nav class="header__inner">
      <CommonLogo @mouseover="handleHeaderLeave" :isWhite="props.isWhite" class="header__logo"/>
      <ul v-if="!isMobile" class="header__nav">
        <li
          v-for="({name, link, children, byID}) in links"
          @mouseover="handleMouseOver($event, children, link)"
        >
          <a
            v-if="byID"
            :href="link"
            class="header__item header__link"
          >{{name}}</a>
          <NuxtLink
            v-else-if="link"
            :to="link"
            class="header__item header__link"
          >{{name}}</NuxtLink>
          <span v-else class="header__item header__link">
            {{name}}
          </span>
        </li>
      </ul>
      <div class="header__nav">
        <NuxtLink
          v-if="!isMobile"
          to="/login"
          @mouseover="handleHeaderLeave"
          class="header__item header__link"
        >Login</NuxtLink>
        <CommonDynamicButton
          text="Get a Free Consult"
          link="/contact/form"
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
          <NuxtLink :to="link" class="header__item">{{name}}</NuxtLink>
        </li>
      </ul>
    </nav>
    <MobileMenu
      v-else
      :links="links"
      :isWhite="props.isWhite"
      :class="[
        'header__mobileMenu',
        {'mobileMenu--open': burgerActive}
      ]"
    />
    <div class="header__backgroundBlend"/>
  </header>
</template>

<script setup>
const props = defineProps({
  isWhite: { type: Boolean, default: false }
});

const subMenu = ref(null);
const subMenuPos = ref(0);
const burgerActive = ref(false);
const links = ref([
  {
    name: "Why Us",
    link: "/#why-us",
    byID: true,
  },
  {
    name: "Our Services",
    link: "/#services",
    byID: true,
    children: [
      { name: "Master Data Management and Entity Resolution Consulting", link: "/services/mdm" },
      { name: "AI and Data Management Strategy Consulting", link: "/services/data-management" },
      { name: "Executive Services", link: "/services/executive-services" },
      // { name: "AI and Data Observability" , link: "/ai" },
      // { name: "Business Analysis and Data Modeling" , link: "/analysis-modeling" },
      // { name: "Screening & Assessment of Data Professionals" , link: "/staffing" },
    ],
  },
  {
    name: "How Do I Start",
    link: "/contact/form"
  },
  {
    name: "Partners",
    children: [
      { name: "Technology Partners", link: "/mdm-partners" },
      // { name: "Collaborative Partners", link: "/contact/collaborative" },
    ],
  },
]);

const appWidth = inject("appWidth");
const scroll = inject("scroll");

const route = useRoute();

const handleMouseOver = (event, menu, parentLink) => {
  if (!menu) {
    handleHeaderLeave();
    return;
  }
  subMenu.value = menu;
  subMenuPos.value = event.target.offsetLeft;
};
const handleHeaderLeave = () => {
  subMenu.value = null;
  subMenuPos.value = 0;
};
const toggleBurger = () => burgerActive.value = !burgerActive.value;

const isMobile = computed(() => appWidth.value < 860);
const isBlur = computed(() => scroll.value > 10);

watch(() => route.fullPath, () => burgerActive.value = false);
watch(isMobile, (value) => {
  value ? handleHeaderLeave() : burgerActive.value = false;
});
</script>

<style>
.header {
    display: flex;
    place-content: center;
    padding: 20px 0;
    z-index: 31;
    top: 0px;
    position: sticky;
    transition: backgrop-filter 0.3s ease, background-color 0.3s ease;
}
.header--blur {
    background-color: var(--darkPurple);
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
    display: inline-block;
}
.header__item {
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease, text-decoration 0.3s ease;
    font-weight: 400;
    color: white;
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
    background-color: #240164;
    border-radius: 20px;
    border-top-left-radius: 0px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
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
.header__dropDown__nav a {
    font-size: 18px;
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
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
}
.mobileMenu--open {
    display: block;
}
.header--white {
    box-shadow: 0px 0px 10px 1px var(--darkPurple);
    background-color: white;
}
.header--white .header__item {
    color: #1e1d1d
}
.header--white .header__burger__item {
    background-color: var(--darkPurple);
}
.header--white .header__button {
    border-color: var(--darkPurple);
    color: var(--darkPurple);
}
.header--white .header__dropDown__nav {
    background-color: white;
    box-shadow: 0px 3px 10px 0px var(--darkPurple);
}
.header--white .header__item:before {
    background: linear-gradient(to right, var(--darkPurple), transparent);
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
    .header--white .header__item:hover {
        color: var(--darkPurple) !important;
    }
}
@media (max-width: 1659.99px) {
    .header {
        padding: 12px 0;
    }
    .header__logo {
        max-width: 125px;
    }
    .header__dropDown__nav a {
        font-size: 16px;
    }
}
@media (max-width: 1439.99px) {
    .header__logo {
        max-width: 110px;
    }
    .header__dropDown__nav a {
        font-size: 14px;
    }
    .header__link, .header__button {
        font-size: 16px;
    }
}
@media (max-width: 1279.99px) {
    .header__logo {
        max-width: 90px;;
    }
    .header__nav  {
        gap: 0;
    }
    .header__link, .header__button {
        font-size: 14px;
    }
}
@media (max-width: 859.99px) {
    .header__nav {
        gap: 20px;
    }
    .header__inner {
        place-items: center;
    }
}
@media (max-width: 574.99px) {
   .header__inner {
       padding: 0 20px;
   }
}
@media (max-width: 374.99px) {
    .header__button {
        display: none;
    }
    .header__nav {
        place-self: center;
    }
}
</style>
