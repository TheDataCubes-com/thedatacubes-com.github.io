<template>
<section id="why-us" class="whyUs">
  <div class="whyUs__inner">
    <h2>{{whyUs.title}}</h2>
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
      <img
        v-if="!index"
        src="/images/people-picture.jpg"
        alt="whyUs-picture"
        class="whyUs__image"
      />
      <DynamicButton
        v-if="index === (whyUs.points.length - 1)"
        link="/get-consultation"
        text="Reach Out to Us Today"
        :isInline="true"
        class="whyUs__button"
      />
    </div>
  </div>
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
.whyUs__inner {
    max-width: var(--maxWidth);
    width: 100%;
    place-self: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 80px 80px;
}
.whyUs__inner > h2 {
    font-size: 60px;
    margin-bottom: 20px;
    place-self: center;
}
.whyUs__points {
    display:flex;
    flex-direction: column;
    gap: 12px;
    max-width: 66%;
    width: 100%;
    position: relative;
}
.whyUs__image, .whyUs__button {
    position: absolute;
    top: 50%;
    left: calc(100% * 1.5);
    transform: translate(-100%, -50%);
}
.whyUs__image {
    height: 125%;
}
.whyUs__button {
    background-color: #cc90ff;
    border: 2px solid #cc90ff;
    width: 30%;
    padding: 8px 12px;
}
.points--even {
    place-self: flex-end;
}
@media (max-width: 1659.99px) {
    .whyUs__points {
        max-width: 75%;
    }
    .whyUs__image, .whyUs__button {
        left: calc(100% * 1.35);
    }
}
@media (max-width: 1439.99px) {
    .whyUs__inner {
        gap: 20px;
    }
}
@media (max-width: 1279.99px) {
    .main__title {
        width: 560px;
    }
}
</style>
