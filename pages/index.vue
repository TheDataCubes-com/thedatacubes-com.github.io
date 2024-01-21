<template>
  <section class="main banner">
    <h1 ref="textSlide" class="main__title">
      <img :src="currentSlide" :alt="`mainSlide_${slideIndex}`">
    </h1>
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
        <img v-if="!index" src="/images/people-picture.jpg" alt="whyUs-picture" />
      </div>
    </div>
  </section>
  <!-- <section class="ourClients">
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
  </section> -->
</template>

<script setup>
const slides = ([ "/svg/keep-it-simple.svg", "/svg/about-time.svg" ]);

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
const slideIndex = ref(1);
const textSlide = ref(null);
const swiper = ref(null);

const changeHeader = inject("changeHeader");
const scroll = inject("scroll");
const appWidth = inject("appWidth");

const currentSlide = computed(() => slides[slideIndex.value]);

const changeSlide = () => {
  var className = "textTransition";
  textSlide.value.classList.add(className);
  slideIndex.value ^= 1;
  setTimeout(() => textSlide.value.classList.remove(className), 500);
};

onMounted(() => {
  var anchor = document.getElementById("why-us");
  var { y } = anchor.getBoundingClientRect();
  headerSwitchPosition.value = y;
  swiper.value = setInterval(changeSlide, 10000);
});
onBeforeUnmount(() => swiper.value && clearInterval(swiper.value));

watch([scroll, appWidth], value => {
  changeHeader(value[0] + 148 >= headerSwitchPosition.value);
});
</script>

<style>
.banner {
    height: calc(100vh - 149px);
    position: relative;
}
.main__title {
    position: absolute;
    width: 70%;
    left: calc(100px);
    opacity: 1;
    transition: left 1s ease, opacity 1s ease;
}
.main__title img {
    width: 100%;
}
.textTransition {
    left: calc(100vh * 2);
    opacity: 0;
    transition: inital;
}
.banner__text {
    position: absolute;
    top: calc(100vh * 0.4);
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
    position: relative;
}
.whyUs__points > img {
    position: absolute;
    top: 50%;
    left: calc(100% * 1.5);
    transform: translate(calc(-100%), -50%);
    height: 125%;
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
@media (max-height: 960px) {
    .banner__text {
        gap: 20px;
    }
    .banner__text > p {
        font-size: 20px;
    }
    .main__title {
        width: 45%;
    }
}
@media (max-width: 1659.99px) {
    .main__title {
        width: 60%;
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
    .whyUs__points > img {
        left: calc(100% * 1.35);
    }
}
@media (max-width: 1439.99px) {
    .main__title {
        width: 50%;
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
}

</style>
