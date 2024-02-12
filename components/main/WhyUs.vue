<template>
  <section id="why-us" class="whyUs">
    <h2 class="whyUs__title">{{whyUs.title}}</h2>
    <section class="whyUs__cardsWrap">
      <div
        v-for="({title, text}, index) in whyUs.points"
        :key="index"
        :class="[
          'whyUs__point',
          {'point--even': index % 2}
        ]"
        >
          <div>
            <h3>{{title}}</h3>
            <p>{{text}}</p>
          </div>
          <img
            v-if="index"
            src="/images/t2.png"
            alt="whyUs-picture"
            class="whyUs__image"
          />
      </div>
    </section>
    <CommonDynamicButton
      link="/free-consultation"
      text="Discuss How We Can Help Address Your Data Needs"
      :isInline="true"
      class="whyUs__button"
    />
  </section>
</template>

<script setup>
const whyUs = ref({
  title: "Strategic Data Consulting",
  points: [
    {
      title: "Big Picture Approach",
      text: "We take a high-level view of your Business strategy and assess how your data assets align with it. From this strategic vantage point, we design, develop, and implement a comprehensive, full-stack data strategy from data sourcing to analytics solutions. Our approach is not only strategic but also cost-effective, ensuring that you get the most value from your investment."
    },
    {
      title: "Vendor-Independent Consulting",
      text: "Our vendor-independent consulting services offer unbiased solutions in Master Data Management, Cloud, and Data Management. This approach ensures the best fit for your business needs, free from the limitations of vendor affiliations."
    },
    {
      title: "Decades of Experience and Custom Solutions",
      text: "Leveraging decades of experience, our frameworks and accelerators include industry-specific use cases and custom models. Our expertise in Data Management and MDM accelerators is geared towards breaking down traditional data silos, modeling your business in data, and fully integrating your data into your business strategy."
    },
  ]
});

const changeHeader = inject("changeHeader");
const scroll = inject("scroll");
const appWidth = inject("appWidth");
const headerSwitchPosition = ref(1080);

onMounted(() => {
  var anchor = document.getElementById("why-us");
  var { y } = anchor.getBoundingClientRect();
  headerSwitchPosition.value = y;
});

watch([scroll, appWidth], value => {
  changeHeader(value[0] + 148 >= headerSwitchPosition.value);
});
</script>

<style>
.whyUs {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.whyUs__title {
    max-width: var(--maxWidth);
    color: var(--darkPurple);
    background-color: #eedcf9;
    width: 100%;
    text-align: left;
    font-weight: 600;
    padding: 40px 80px 80px;

    font-size: 32px;
    font-size: 44px;
}
.whyUs__inner {
    max-width: var(--maxWidth);
    width: 100%;
    place-self: center;
    display: flex;
    gap: 40px;
    padding: 40px 80px;
    justify-content: space-between;
}
.whyUs__cardsWrap {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.whyUs__point {
    display:flex;
    width: 100%;
    position: relative;
    background-color: white;
    gap: 40px;
    border-radius: 20px;
}
.whyUs__point > div {
    display:flex;
    flex-direction: column;
    gap: 12px;
}
.whyUs__image {
    place-self: center;
}
.whyUs__button {
    margin: 12px 0 40px;
    position: relative;
    background-color: #c852ea;
    border: 2px solid #c852ea;
    width: fit-content;
    place-self: center;
    padding: 8px 12px;
    text-align: center;
}
.point--even {
    flex-direction: row-reverse;
}
.point--even > div {
    width: 60%;
    flex-shrink: 0;
}
/* @media (max-width: 1659.99px) {
    .whyUs__point {
        max-width: 75%;
    }
    .whyUs__image {
        left: calc(100% * 1.35);
    }
}
@media (max-width: 1439.99px) {
    .whyUs__inner {
        gap: 20px;
        padding: 40px 60px;
    }
}
@media (max-width: 1023.99px) {
    .whyUs__image {
        display: none;
    }
    .whyUs__inner {
        padding: 40px;
    }
    .whyUs__point {
        max-width: 85%;
    }
}
@media (max-width: 573.99px) {
    .whyUs__inner {
        padding: 40px 20px;
    }
    .whyUs__point {
        max-width: 90%;
    }
} */
</style>
