<template>
  <section class="mediaCards">
    <div class="mediaCards__inner">
      <div class="mediaCards__videoWrap">
        <video
          autoplay
          loop
          playsinline
          muted
          src="/videos/cubes.mp4"
          type="video/mp4"
          class="mainServices__video"
        />
        <CommonLogo :noLines="true" class="mainServices__logo" />
      </div>
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
    text: "<ul style='display: flex; flex-direction: column; gap: 8px;'><li>Fractional Chief Data Officer (CDO)</li><li>Personalized Education & Literacy</li><li>AI & Data Strategy</li><li>Assessment & Screening of Data professionals</li></ul>",
    link: { name: "Read more", path: "/services/executive-services" }
  },
  {
    title: "AI and Data Management Strategy Consulting",
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
    width: 100%;
    animation: bgTransition 16s linear infinite;
}
.mediaCards__inner {
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    width: fit-content;
    gap: 40px;
    height: 100%;
    margin: 100px auto;
}
.mainServices__video {
    flex-shrink: 1;
    max-width: 600px;
    width: 100%;
    box-shadow: 0px 0px 14px 6px #09feff57;
    border-radius: 12px;
    height: v-bind(cardHeight);
    object-fit: cover;
}
.mediaCards__videoWrap {
   position: relative;
   height: fit-content;
}
.mainServices__logo {
    pointer-events: none;
    position: absolute;
    width: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.mediaCards__cardsWrap {
    max-width: var(--maxCardWidth);
    display: flex;
    gap: 20px;
    font-size: v-bind(cardHeight);
    height: calc(1em + (1em * 0.16));
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
@keyframes bgTransition {
  0% {
      background:
        linear-gradient(to bottom, #074567, #042f54, #03284f, #042141);
  }
  25% {
      background:
        linear-gradient(to bottom, #073c60, #053056, #052b52, #05254c)
  }
  50% {
      background:
        linear-gradient(to bottom, #043659, #042f54, #03284f, #03254c)
  }
  75% {
      background:
        linear-gradient(to bottom, #083b62, #042f54, #04284f, #04284f)
  }
  100% {
      background:
        linear-gradient(to bottom, #05375d, #062d53, #042851, #042448)
  }
}
@media (max-width: 1659.99px) {
    .mediaCards__cardsWrap {
        max-width: calc(var(--maxCardWidth) - 60px);
    }
    .mainServices__video {
        max-width: 500px;
    }
}
@media (max-width: 1439.99px) {
    .mediaCards__cardsWrap {
        flex-direction: column;
        row-gap: 20px;
        height: fit-content;
        max-width: 480px;
    }
    .mediaCards__card {
        max-width: 100%;
        transform: initial !important;
    }
    .mainServices__video {
        max-width: 480px;
        height: 380px;
    }
    .mediaCards__videoWrap {
        place-self: center;
    }
}
@media (max-width: 1023.99px) {
    .mediaCards__inner {
        flex-direction: column-reverse;
        margin: 40px auto;
    }
}
@media (max-width: 767.99px) {
    .mainServices__video {
        height: 260px;
    }
    .mediaCards__inner {
        padding: 0 20px;
    }
}
</style>
