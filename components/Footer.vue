<template>
  <footer :class="['footer', {'footer--solid': isSolid}]">
    <div class="footer__inner">
      <span class="footer__info__item">{{copyright}}</span>
      <div class="footer__info__links">
        <iconLinked link="https://www.linkedin.com/in/rouzannadanielian/"/>
        <iconMail link="mailto:info@thedatacubes.com"/>
      </div>
      <!-- <NuxtLink to="/" class="footer__info__item">Privacy Policy</NuxtLink> -->
    </div>
  </footer>
</template>

<script setup>
const route = useRoute();
const isSolid = computed(() => {
  var { name } = route;
  return name === "index";
});

const copyright = computed(() => {
  var date = new Date();
  return `© ${date.getFullYear()} TheDataCubes, Inc.`;
});
</script>

<style>
.footer {
    z-index: 10;
    position: static;
    display: flex;
    place-content: center;
    background-color: var(--darkPurple);
}
.footer span, footer a {
    color: white;
    font-size: 18px;
}
.footer__inner {
    display: flex;
    gap: 40px;
    place-items: center;
    max-width: var(--maxWidth);
    width: 100%;
    padding: 20px 40px;
}
.footer__info__links {
    display: flex;
    gap: 12px;
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
