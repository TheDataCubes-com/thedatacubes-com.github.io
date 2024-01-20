<template>
  <footer :class="['footer', {'footer--solid': isSolid}]">
    <span class="footer__info__item">© 2024 TheDataCubes.</span>
    <NuxtLink to="/" class="footer__info__item">Privacy Policy</NuxtLink>
  </footer>
</template>

<script setup>
const route = useRoute();
const isSolid = computed(() => {
  var { name } = route;
  return name === "index";
});
</script>

<style>
.footer {
    position: absolute;
    z-index: 10;
    bottom: 12px;
    left: 64px;
    display: flex;
    gap: 60px;
}
.footer span, footer a {
    color: white;
    font-size: 18px;
}
.footer--solid {
    position: static;
    background-color: var(--darkPurple);
}
.footer--solid * {
    padding: 20px;
}
@media (max-width: 1659.99px) {
    .footer span, footer a {
        font-size: 16px;
    }
}
@media (max-width: 1439.99px) {
    .footer span, footer a {
        font-size: 14px;
    }
}
@media (max-width: 1279.99px) {
    .footer span, footer a {
        font-size: 12px;
    }
}
</style>
