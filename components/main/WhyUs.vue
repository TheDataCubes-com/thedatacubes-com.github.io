<template>
  <section id="why-us" class="whyUs">
    <h2 class="whyUs__title">{{whyUs.title}}</h2>
    <div class="whyUs__inner">
      <section class="whyUs__cardsWrap">
        <div
            v-for="({title, text}, index) in whyUs.points"
            :key="index"
            :class="[
              'whyUs__points',
              {'points--even': index % 2}
            ]"
          >
            <h3>{{title}}</h3>
            <p>{{text}}</p>
          </div>
      </section>
      <img
        src="/images/t2.png"
        alt="whyUs-picture"
        class="whyUs__image"
      />
    </div>
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
    background-color: var(--softPink);
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.whyUs__title {
    max-width: var(--maxWidth);
    width: 100%;
    place-self: center;
    font-size: 32px;
    font-weight: 600;
    text-align: left;
    padding: 80px 80px 0 ;
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
    max-width: 50%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.whyUs__points {
    display:flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    position: relative;
    background-color: white;
    padding: 20px 40px;
    border-radius: 20px;
}
.whyUs__image {
    place-self: center;
    max-width: 39%;
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
.points--even {
    place-self: flex-end;
}
/* @media (max-width: 1659.99px) {
    .whyUs__points {
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
    .whyUs__points {
        max-width: 85%;
    }
}
@media (max-width: 573.99px) {
    .whyUs__inner {
        padding: 40px 20px;
    }
    .whyUs__points {
        max-width: 90%;
    }
} */
</style>
