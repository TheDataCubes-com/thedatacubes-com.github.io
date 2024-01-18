<template>
  <section class="main banner">
    <h1>
      <img
        :src="currentSlide.title.image"
        :alt="currentSlide.title.text"
        class="main__title">
    </h1>
    <h2>
      <img
      :src="currentSlide.subTitle.image"
      :alt="currentSlide.subTitle.text"
      class="main__subTitle">
    </h2>
    <section class="banner__text">
      <p v-for="paragraph in bannerText">{{paragraph}}</p>
    </section>
  </section>
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
      </div>
    </div>
  </section>
  <section class="ourClients">
    <div class="ourClients__inner">
      <h2>What Our Clients Say</h2>
      <div class="ourClients__cardsWrap">
        <div class="ourClients__card">
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <span>Sam Smith</span>
          </div>
        </div>
        <div class="ourClients__card">
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <span>Sam Smith</span>
          </div>
        </div>
        <div class="ourClients__card">
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <span>Sam Smith</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const slides = ([
  {
    title: {
      image: "text/keep-simple.svg",
      text: "keep it simple"
    },
    subTitle: {
      image: "text/through-services.svg",
      text: "through our Data Services"
    },
  },
  {
    title: {
      image: "text/about-time.svg",
      text: "It's about time"
    },
    subTitle: {
      image: "text/to-simplify.svg",
      text: "to simplify your Data"
    },
  },
]);

const bannerText = ([
  "We transform data chaos into profitable insights, organizing and refining messy, siloed data into actionable intelligence that your Business team can easily work with. Our goal is to make you successful by helping you monetize every aspect of your data.",
  "Our comprehensive range of services includes Master Data Management (specializing in the financial sector), Entity Resolution, Customer 360, Enterprise Data Management and Analytics, Data Modeling, and more, each tailored to meet your unique business needs."
]);

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

const headerSwitchPosition = ref(1080);

const changeHeader = inject("changeHeader");
const scroll = inject("scroll");
const appWidth = inject("appWidth");

const slideIndex = ref(0);

const currentSlide = computed(() => slides[slideIndex.value]);

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
.banner {
    height: calc(100vh - 149px);
}
.main__title {
    width: 1152px;
    transform: translateX(100px);
}
.main__subTitle {
    width: 652px;
}
.banner__text {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 990px;
    width: 100%;
}
.banner__text > p {
    width: 100%;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 300;
    color: white;
}
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
}
.points--even {
    place-self: flex-end;
}
.backgorund--section {
    z-index: -1;
    height: 100%;
}
.cards {
    max-width: var(--maxWidth);
    place-self: center;
    padding: 80px 20px 100px;
    width: 100%;
    min-height: 100vh;
}
.cards__wrap {
    display: flex;
    gap: 40px;
    justify-content: space-between;
}
.card__item {
    border: 1px solid white;
    height: 200px;
    width: 200px;
}
.ourClients {
    background-color: #baa0c775;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.ourClients__inner {
    max-width: var(--maxWidth);
    width: 100%;
    place-self: center;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 80px 80px;
}
.ourClients__inner > h2 {
    font-size: 60px;
    place-self: center;
}
.ourClients__cardsWrap {
    display: flex;
    margin: -20px;
    width: 100%;
}
.ourClients__card {
    width: 33%;
    padding: 20px;
}
.ourClients__card>div {
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    gap: 40px;
}
.ourClients__card span {
    font-size: 16px;
    font-weight: 500;
    place-self: flex-end;
}
@media (max-width: 1659.99px) {
    .main__title {
        width: 820px;
    }
    .main__subTitle {
        width: 410px;
    }
    .banner__text {
        max-width: 860px;
        gap: 20px;
        margin: 40px 0;
    }
    .banner__text >p {
        font-size: 18px;
    }
    .whyUs__points {
        max-width: 75%;
    }
}
@media (max-width: 1439.99px) {
    .main__title {
        width: 680px;
    }
    .main__subTitle {
        width: 320px;
    }
    .banner__text {
        max-width: 740px;
        margin: 20px 0;
    }
    .whyUs__inner {
        gap: 20px;
    }
}
@media (max-width: 1279.99px) {
    .main__title {
        width: 560px;
    }
    .main__subTitle {
        width: 320px;
    }
}
</style>
