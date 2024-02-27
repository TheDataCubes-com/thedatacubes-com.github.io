<template>
  <section id="why-us" class="whyUs">
    <div style="max-width: 100%;" class="whyUs__separator"/>
    <CommonTitleLine
      heading="h2"
      :title="whyUs.title"
      :padBottom="40"
      :noBg="true"
    />
    <CommonQuote
      quote="We translate complex business problems into successful technical solutions"
      :phrase="true"
      class="whyUs__quote"
    />
    <section class="whyUs__cardsWrap">
      <div
        v-for="({title, text, image}, index) in whyUs.points"
        :key="index"
        :class="[
          'whyUs__point',
          {'point--first': !index},
          {'point--even': index % 2}
        ]"
        >
          <div>
            <h3>{{title}}</h3>
            <p>{{text}}</p>
          </div>
          <div v-if="image" class="whyUs__image">
            <img :src="image" alt="whyUs-picture" />
          </div>
      </div>
    </section>
    <div class="whyUs__buttonWrap">
      <CommonDynamicButton
        link="/contact-form"
        text="Discuss How We Can Help Address Your Data Needs"
        :isInline="true"
        class="whyUs__button"
      />
    </div>
    <div class="whyUs__separator"/>
  </section>
</template>

<script setup>
const whyUs = ref({
  title: "Strategic Data Consulting",
  points: [
    {
      title: "Big Picture Approach",
      text: "We take a high-level view of your Business strategy and assess how your data assets align with it. From this strategic vantage point, we design, develop, and implement a comprehensive, full-stack Data and AI strategy from data sourcing to analytics solutions. Our approach is not only strategic but also cost-effective, ensuring that you get the most value from your investment."
    },
    {
      title: "Vendor-Independent Consulting",
      text: "Our vendor-independent consulting services offer unbiased solutions in Master Data Management / ER, Cloud, and Enterprise Data Management & Analytics. This approach ensures the best fit for your business needs, free from the limitations of vendor affiliations.",
      image: "/images/whyus-1.jpg"
    },
    {
      title: "Decades of Experience and Custom Solutions",
      text: "Leveraging decades of experience, our frameworks and accelerators include industry-specific use cases and custom models. Our expertise in Data Management, AI and MDM accelerators is geared towards breaking down traditional data silos, modeling your business in data, and fully integrating your data into your business strategy.",
      image: "/images/whyus-2.jpg"
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
    display: flex;
    flex-direction: column;
}
.whyUs__separator {
   height: 1px;
   place-self: center;
   max-width: 1060px;
   width: 100%;
   background-color: var(--darkPurple);
   margin-bottom: 40px;
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
.whyUs__quote {
    margin-bottom: 40px;
}
.whyUs__cardsWrap {
    max-width: 1260px;
    width: 100%;
    place-self: center;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 100px 40px;
}
.whyUs__point {
    display:flex;
    width: 100%;
    position: relative;
    gap: 40px;
    border-radius: 20px;
    place-items: center;
}
.whyUs__point > div:first-of-type {
    display:flex;
    flex-direction: column;
    max-width: 50%;
    width: 100%;
    gap: 12px;
}
.whyUs__image > img {
    place-self: center;
    max-width: 320px;
    align-self: center;
    width: 100%;
}
.whyUs__buttonWrap {
    place-self: center;
}
.whyUs__button {
    margin: 12px 0 40px;
    position: relative;
    background-color: #eedcf9;
    border: 2px solid #eedcf9;
    color: var(--darkPurple);
    width: fit-content;
    padding: 8px 12px;
    text-align: center;
}
.point--first > div:first-of-type {
   max-width: 100%;
}
.point--even {
    flex-direction: row-reverse;
}
@media (max-width: 1023.99px) {
    .whyUs__point {
      flex-direction: column;
    }
    .whyUs__image {
      place-self: center;
      max-width: fit-content;
    }
    .whyUs__point > div:first-of-type {
        max-width: 100%;
    }
    .whyUs__separator {
        margin-bottom: 0;
    }
}
@media (max-width: 767.99px) {
    .whyUs__cardsWrap {
        padding: 0 20px 40px;
    }
    .whyUs__buttonWrap {
        padding: 0 20px;
    }
}
</style>
