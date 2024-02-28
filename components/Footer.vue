<template>
  <footer class="footer">
    <MainOurClients />
    <div class="footer__inner">
      <span v-html="copyright" class="footer__info__item" />
      <div class="footer__info__links">
        <iconLinked link="https://www.linkedin.com/in/rouzannadanielian/"/>
        <iconMail link="mailto:info@thedatacubes.com"/>
      </div>
    </div>
  </footer>
</template>

<script setup>
const copyright = computed(() => {
  var date = new Date();
  return `© ${date.getFullYear()} TheDataCubes, Inc. All&nbspRights&nbspReserved`;
});
</script>

<style>
.footer {
    z-index: 10;
    position: static;
    display: flex;
    flex-direction: column;
    place-items: center;
    background-color: var(--darkPurple);
}
.footer__inner span, footer a {
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
    .footer__inner span, footer a {
        font-size: 16px;
    }
}
@media (max-width: 1439.99px) {
    .footer__inner span, footer a {
        font-size: 14px;
    }
}
@media (max-width: 1279.99px) {
    .footer__inner span, footer a {
        font-size: 12px;
    }
}
</style>
