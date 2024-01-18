<template>
  <nav :class="['mobileNav', {'mobileNav--white': isWhite}]">
    <ul class="mobileNav__list">
      <li v-for="({name, link, children, disabled}, index) in props.links" :key="index">
        <div
          v-if="disabled"
          :class="[
            'mobileNav__withSubList',
            {'subList--open': subMenuIndex === index}
          ]"
        >
          <button
            type="buttin"
            @click="toggleSubMenu(children, link, index)"
            class="mobileNav__item"
          >{{name}}</button>
          <ul v-if="subMenuIndex === index" class="mobileNav__subList">
            <li v-for="{name, link} in subMenu">
              <NuxtLink :to="subMenuParentLink + link" class="mobileNav__item">{{name}}</NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink v-else :to="link" class="mobileNav__item">{{name}}</NuxtLink>
      </li>
    </ul>
    <NuxtLink to="/login" class="mobileNav__item">Login</NuxtLink>
    <DynamicButton
      text="Get a Free Consult"
      link="/get-consultation"
      :isInline="true"
      class="mobileNav__button"
    />
  </nav>
</template>

<script setup>
const props = defineProps({
  links: { type: Array, default: [] },
  isWhite: { type: Boolean, default: false},
})

const subMenu = ref(null);
const subMenuIndex = ref(null);
const subMenuParentLink = ref("");

const toggleSubMenu = (menu, parentLink, menuIndex) => {
  subMenu.value = subMenu.value ? null : menu;
  subMenuIndex.value = subMenuIndex.value ? null : menuIndex;
  subMenuParentLink.value = subMenuParentLink.value ? null : parentLink;
}
</script>

<style>
.mobileNav {
    background-color: var(--darkPurple);
    height: calc(100vh - 100%);
    padding: 20px 32px;
    max-width: 500px;
    width: 100%;
    transition: 0.3s ease;
}
.mobileNav__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;
}
.mobileNav__item {
    font-size: 16px;
    display: inline-block;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease, text-decoration 0.3s ease;
    border: none;
    background-color: unset;
}
.mobileNav__item:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, var(--mainYellow), transparent);
    transition: width 0.3s ease;
}
.mobileNav__withSubList {
    display: flex;
    flex-direction: column;
    max-height: 20px;
    place-items: flex-start;
    height: fit-content;
    overflow: hidden;
    transition: max-height 0.5s ease;
}
.subList--open {
    max-height: 1000px;
}
.mobileNav__subList {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 0 20px 16px;
}
.mobileNav__button {
    display: none;
}
.mobileNav--white {
    background-color: white;
}
@media (hover:hover) {
    .mobileNav__item:hover:before {
        width: 100%;
    }
    .mobileNav__item:hover {
        color: var(--mainYellow) !important;
    }
}
@media (max-width: 374.99px) {
    .mobileNav__button {
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 20px;
    }
}
</style>
