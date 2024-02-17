<template>
  <section class="mediaCards">
    <!-- <video
      autoplay
      loop
      playsinline
      muted
      src="/videos/cubes.mp4"
      type="video/mp4"
      class="mainServices__video"
    /> -->
    <div class="mediaCards__cardsWrap">
      <CommonCard
        v-for="({ text, link, title}, index) in cards"
        :key="index"
        :title="title"
        :text="text"
        :link="link"
        class="mediaCards__card"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  cards: {type: Array, default: []}
});
const cards = ref([
  {
    title: "Executive Services",
    text: "<ul style='display: flex; flex-direction: column; gap: 8px;'><li>Fractional Chief Data Officer (CDO)</li><li>Personalized Education & Literacy</li><li>Advisory & Mentorship</li><li>Assessment & Screening of data professionals</li></ul>",
    link: { name: "Read more", path: "/services/executive-services" }
  },
  {
    title: "Data Management and AI Strategy Consulting",
    text: "<p>We assess your data needs from a Business perspective and create a data strategy to enable practical, self-service data-driven solutions to various business challenges.</p>",
    link: { name: "Read more", path: "/services/data-management" }
  },
  {
    title: "Master Data Management and Entity Resolution Consulting",
    text: "<p>We help your Business to make better decisions faster about getting Customer 360 views, and more.<br/><br/>We offer MDM product evaluations that best fit your use case, along with strategy and implementation recommendations.</p>",
    link: { name: "Read more", path: "/services/mdm" }
  },
]);

const cardHeight = ref("440px");
</script>

<style>
.mediaCards {
    background-color: #07233f;
    width: 100%;
    display: flex;
}
.mediaCards__cardsWrap {
    max-width: var(--maxCardWidth);
    display: flex;
    gap: 20px;
    font-size: v-bind(cardHeight);
    height: calc(1em + (1em * 0.16));
    margin: 20px 0;
}
.mediaCards__card {
    background-color: white;
    max-width: 33%;
    max-height: v-bind(cardHeight);
    height: 100%;
    width: 100%;
}
.mediaCards__card:nth-of-type(2) {
  transform: translateY(+8%);
}
.mediaCards__card:nth-of-type(3) {
  transform: translateY(+16%);
}
</style>
