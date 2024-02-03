<template>
  <section class="mainServices">
    <div class="mainServices__inner">
      <h2>Services</h2>
      <p>ABC connect MDM and Data Management</p>
      <div class="mainServices__cardWrapper">
        <div
          v-for="({ text, link, title}, index) in cards"
          :key="index"
          class="mainServices__card"
        ><CommonCard :title="title" :text="text" :link="link" /></div>
      </div>
    </div>
    <CommonQuote
      quote="Data that sit unused are no different from data that were never collected in the first place."
      sign="Doug Fisher"
    />
  </section>
</template>

<script setup>
const cards = ref([
  {
    title: "Master Data Management and Entity Resolution Consulting",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    link: { name: "Read more", path: "/services/mdm" }
  },
  {
    title: "AI and Data Management Strategy Consulting",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    link: { name: "Read more", path: "/services/data-management" }
  },
  {
    title: "Executive Services",
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    link: { name: "Read more", path: "/services/executive-services" }
  },
]);
</script>

<style>
.mainServices {
    border-top: 1px solid;
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.mainServices__inner {
    max-width: var(--maxWidth);
    width: 100%;
    place-self: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px 80px;
}
.mainServices__inner > h2 {
    margin-bottom: 20px;
    place-self: center;
}
.mainServices__cardWrapper {
    margin: -12px;
    display: flex;
    flex-wrap: wrap;
}
.mainServices__card {
    width: 33%;
    padding: 12px;
}
@media (max-width: 1439.99px) {
    .mainServices__inner {
        gap: 20px;
    }
}
</style>
