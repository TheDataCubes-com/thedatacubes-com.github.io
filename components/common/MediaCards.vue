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
          class="mediaCards__video"
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

const appWidth = inject("appWidth");

const cardHeight = computed(() => {
  switch (true) {
    case appWidth.value < 768: return "380px";
    case appWidth.value < 1440: return "500px";
    default: return "440px";
  }
});
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
.mediaCards__videoWrap {
   position: relative;
   place-self: center;
   height: fit-content;
   max-width: 600px;
}
.mediaCards__video {
    max-height: 100%;
    flex-shrink: 1;
    width: 100%;
    box-shadow: 0px 0px 14px 6px #09feff57;
    border-radius: 12px;
    height: v-bind(cardHeight);
    object-fit: cover;
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
    .mediaCards__videoWrap {
        max-width: 500px;
    }
}
@media (max-width: 1439.99px) {
    .mediaCards__inner  {
        gap: 20px;
    }
    .mediaCards__cardsWrap {
        gap: 12px;
        max-width: calc(var(--maxCardWidth) - 160px);
    }
    .mediaCards__videoWrap {
        max-width: 420px;
        height: 320px;
    }
}
@media (max-width: 1239.99px) {
    .mediaCards__videoWrap {
        max-width: 300px;
        height: 240px;
    }
}
@media (max-width: 1079.99px) {
    .mediaCards__inner {
        width: 100%;
        margin: 0px 0 60px;
        flex-direction: column;
        gap: 40px;
    }
    .mediaCards__videoWrap {
        max-width: 100%;
        width: 100%;
        max-height: 200px;
    }
    .mediaCards__video {
        border-radius: 0;
        box-shadow: 0px 4px 8px 0px #09feff57;
    }
    .mediaCards__cardsWrap {
        place-self: center;
    }
}
@media (max-width: 767.99px) {
    .mediaCards__cardsWrap {
        flex-direction: column;
        height: fit-content;
    }
    .mediaCards__card  {
        max-width: 280px;
        transform: initial !important;
        height: v-bind(cardHeight);
    }
}
</style>
