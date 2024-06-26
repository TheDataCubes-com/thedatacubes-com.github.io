<template>
  <section class="partners__content">
    <div v-if="!cardSwiper" class="partners__points">
      <div class="partners__pointWrap">
        <div
          @click="() => setActive(0)"
          :class="['partners__text', {'text--selected': active === 0}]"
        >
          <svg class="partners__icon"><use xlink:href="#grow" /></svg>
          <h3>For Your Existing MDM Clients and Prospects</h3>
          <svg class="partners__arrow"><use xlink:href="#arrow" /></svg>
        </div>
      </div>
      <div class="partners__pointWrap">
        <div
          @click="() => setActive(1)"
          :class="['partners__text', {'text--selected': active === 1}]"
        >
          <svg class="partners__icon"><use xlink:href="#cloud" /></svg>
          <h3>Generating New Leads</h3>
          <svg class="partners__arrow"><use xlink:href="#arrow" /></svg>
        </div>
      </div>
      <div class="partners__pointWrap">
        <div
          @click="() => setActive(2)"
          :class="['partners__text', {'text--selected': active === 2}]"
        >
          <svg class="partners__icon"><use xlink:href="#shift-data" /></svg>
          <h3>Support for MDM Product Management</h3>
          <svg class="partners__arrow"><use xlink:href="#arrow" /></svg>
        </div>
      </div>
      <div class="partners__pointWrap">
        <div
          @click="() => setActive(3)"
          :class="['partners__text', {'text--selected': active === 3}]"
        >
          <svg class="partners__icon"><use xlink:href="#person" /></svg>
          <h3>Support for MDM Platform Technology</h3>
          <svg class="partners__arrow"><use xlink:href="#arrow" /></svg>
        </div>
      </div>
      <div class="partners__pointWrap">
        <div
          @click="() => setActive(4)"
          :class="['partners__text', {'text--selected': active === 4}]"
        >
          <svg class="partners__icon"><use xlink:href="#grid" /></svg>
          <h3>Our Products</h3>
          <svg class="partners__arrow"><use xlink:href="#arrow" /></svg>
        </div>
      </div>
    </div>
    <CommonCustomSwiper
      v-else
      swiperId="cards"
      :items="pageText"
      :navigation="true"
      :noCap="true"
      :breakPoints="{
        0: {
          spaceBetween: 20,
          slidesPerView: 1,
          speed: 2000,
        },
      }"
      @slideChange="(i) => setActive(i, pageText[i].bullets)"
      class="partners__cardSwiper"
    >
      <template #item="itemProps">
        <div class="partners__text">
          <svg class="partners__icon">
            <use :xlink:href="itemProps.slide.icon" />
          </svg>
          <h3>{{itemProps.slide.text}}</h3>
        </div>
      </template>
    </CommonCustomSwiper>
    <article class="partners__bullets">
      <div v-for="({title, text}, index) in placeText" :key="index">
        <h4 class="bullet__title">{{title}}</h4>
        <div v-html="text" class="bullet__text"/>
      </div>
      <CommonDynamicButton
        link="/contact/form"
        text="talk to us"
        :isIcon="true"
        class="partners__button"
      />
    </article>
  </section>
</template>

<script setup>
const pageText = ref([
  {
    text: "For Your Existing MDM Clients and Prospects",
    bullets: [
      { title: 'FinServ Advisory Services ("Hot lead to close")', text: "As an independent specialist team specializing in the Financial services sector, we step in when sales team needs help closing promising leads. Our deep expertise in financial services makes us more relatable and effective than a vendor’s sales team. We offer evaluations of customer use cases, any MDM product concerns, and solution gaps, aiding MDM Leads to close deals with confidence." },
      { title: 'Enhancing Client Retention and Cross-Selling ("Stickiness")', text: "We conduct thorough evaluations of existing customers' business needs to offer tailored MDM modeling solutions (e.g., custom solutions for mortgage clients). This approach supports new business use cases, combining deep business domain knowledge with MDM expertise. Our optimization billing aids customers in justifying funding / license renewals." },
      { title: "Optimizing MDM Implementation (Streamlining Costs while Ensuring Success)", text: "We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights significantly reduce implementation costs and preparation time, particularly beneficial when SIs are involved. We offer a well-thought-out, designed playbook that enables clients to conduct much of the preparatory work in-house, avoiding the higher fees typically charged by SIs.<br/><br/>Our approach is built on proven in-house MDM implementation strategies and our deep expertise, allowing us to proactively address potential issues before they arise. For example, our methodology has been instrumental in safeguarding implementations from failure in situations where top-tier SIs have encountered obstacles for various reasons, ultimately preventing completion due to budget constraints." },
    ],
    icon: "#grow"
  },
  {
    text: "Generating New Leads",
    bullets: [
      { title: "Target new trending Use Cases related to Generative AI", text: "Tap into entirely new use cases for the MDM market, related to the adoption of Generative AI by customers."},
      { title: "Leveraging Our Deep Understanding of FinServ", text: "Our extensive expertise in the Financial Services industry is a valuable asset in generating new leads. This profound knowledge enables us to identify potential clients who stand to gain significantly from MDM implementation." },
      { title: "Collaboration with Technology Partners", text: "We also collaborate with non-MDM technology partners to enhance client understanding by complementing, contrasting, and determining the best combination of products such as CDP, Customer Master, Identity Resolution, C360, MDM, and ER, to identify the most effective solution." },
      { title: 'Leveraging our "AI & Data Management Strategy Consulting" service', text: 'Our "AI & Data Management Strategy Consulting" service acts as a key source of new leads for our vendor partners. Gained from our deep understanding of use cases through close collaboration with businesses, we uncover client needs and opportunities that align with our partners` offerings.' },
      { title: "Targeting Companies with On-Premise MDM Solutions", text: "There is an opportunity in engaging with companies currently using on-premise solutions and seeking to migrate to the cloud. We can help to address their needs by offering more advanced, cloud-based solutions that enhance their data management capabilities." },
    ],
    icon: "#cloud"
  },
  {
    text: "Support for MDM Product Management",
    bullets: [
      { title: "Expanding New Domains", text: "We offer a curated solution kit (including a model, business use case, and POC that was used to validate the interest) specifically created to assist the Financial Services sector, with an emphasis on the Venture Capital industry." },
      { title: "Client Engagement and Feedback Translation", text: "Regular meetings with MDM clients are vital in understanding their unique challenges and needs. Our team, equipped with both technical expertise and financial services domain knowledge, acts as a bridge. We translate client feedback and challenges into actionable insights for the Product Management team, ensuring that the MDM product roadmap aligns closely with client requirements and industry trends." },
    ],
    icon: "#shift-data"
  },
  {
    text: "Support for MDM Platform Technology",
    bullets: [
      { title: "Features Feasibility Analysis", text: "Leveraging our deep expertise in MDM implementation within the Financial Services sector, we provide critical insights into the feasibility of specific features, including discussions on adoption such as industry standard models, invoking AI as an intelligent advisor, and more."},
      { title: "Data Products service for MDM Solution Providers", text: "Specializing in the FinServ sector, we offer an expert service focused on the strategic development and utilization of Data Products. Unlike traditional approaches that primarily involve exporting all of data into Data Warehouses or Data Lakes, our service concentrates on aligning data with the specific operational needs and usage scenarios of our clients in the financial industry.<br/><br/>We understand that in the FinServ sector, the effective use of data products goes beyond mere data storage and access; it involves a nuanced understanding of how data can drive decision-making and operational efficiency. Our expertise lies in identifying and defining these Data Products in a way that they directly support the business objectives and processes of our clients."},
    ],
    icon: "#person"
  },
  {
    text: "Our Products",
    bullets: [
      {
        title: "Accelerators and MDM Advisory Services",
        text: 'Our custom-built frameworks, like MCMS, MDM Gateway, assist new customers in kickstarting their MDM implementations. <br/><br/>"Where to start?" "How to succeed with implementation delivery?" We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights also help in reducing costs and preparation time, especially when client plans an in-house MDM implementation.<br/><br/>We focus on practical purpose built reusable application - how Data Products will be used - rather than exporting all data in DW / DL.'
      }
    ],
    icon: "#grid"
  },
]);
const active = ref(0);
const cardSwiper = computed(() => appWidth.value < 930);
const placeText = computed(() => pageText.value[active.value].bullets);

const appWidth = inject("appWidth");
const setActive = (index) => {active.value = index};
</script>

<style>
.partners__content {
    padding: 60px 80px 0;
    width: fit-content;
    background-color: white;
    transform: translateY(-200px);
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0 10px 15px var(--darkPurple);
}
.partners__text {
    height: 100%;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    flex-grow: 1;
    box-shadow: 0 4px 8px var(--darkPurple);
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
.partners__text > h3 {
    transition: color 0.3s ease;
    text-align: center;
    display: flex;
    place-items: center;
    gap: 12px;
    align-self: flex-start;
    width: fit-content;
    place-self: center;
    font-size: 16px;
    color: var(--darkPurple);
}
.partners__points {
    max-width: var(--maxCardWidth);
    place-self: center;
    display: flex;
    width: 100%;
}
.partners__pointWrap {
    padding: 12px;
    width: 20%;
    flex-grow: 1;
}
.text--selected {
    box-shadow: none;
    pointer-events: none;
    background-color: var(--darkPurple);
}
.text--selected > h3 {
    color: white;
}
.text--selected .partners__icon {
    fill: white;
}
.text--selected .partners__arrow {
    rotate: 90deg;
    background-color: white;
    border-color: white;
}
.partners__icon {
    place-self: center;
    width: 60px;
    height: 60px;
    fill: var(--darkPurple);
    transition: fill 0.3s ease;
}
.partners__arrow {
    border-radius: 20px;
    width: 24px;
    height: 24px;
    border: 1px solid var(--darkPurple);
    flex-shrink: 0;
    place-self: flex-end;
    margin-top: auto;
    stroke-width: 2;
    stroke: var(--darkPurple);
    transition: 0.3s ease;
}
.partners__cardSwiper {
    place-self: center;
    max-width: 320px;
}
.partners__cardSwiper .customSlide {
    padding: 0 16px;
    height: fit-content;
    min-height: 160px;
}
.partners__bullets {
    max-width: var(--maxCardWidth);
    background-color: white;
    border-radius: 20px;
    padding: 40px 20px 20px;
    display: flex;
    place-self: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    margin-bottom: 40px;
    transition: max-height 0.3s ease;
}
.bullet__title {
    margin-bottom: 12px;
}
.bullet__text {
    font-size: 18px !important;
}
.partners__button {
    margin-top: 40px;
    font-weight: 400;
    gap: 0;
    background-color: var(--mainYellow);
    place-self: center;
    text-transform: uppercase;
    font-size: 14px;
    padding: 4px 16px;
}
.partners__button > svg {
    fill: none;
}
.partners__button > svg > path{
    stroke: var(--darkPurple);
}
@media (hover:hover) {
    .partners__button:hover {
        background-color: var(--darkPurple);
        color: white;
    }
    .partners__cardSwiper .partners__text:hover {
        transform: translateY(0);
        box-shadow: 0 4px 8px var(--darkPurple);
    }
}
@media (max-width: 1659.99px) {
    .partners__title, .partners__titleSlide {
       font-size: 52px;
    }
    .partners__bannerSlider {
        height: 63px;
    }
    .partners__banner {
        height: calc(100vh - 113px);
        padding: 80px 40px;
    }
    .partners__bannerText {
        font-size: 18px;
    }
}
@media (max-width: 1439.99px) {
    .partners__bannerButton {
        padding: 2px 12px;
        font-size: 16px;
    }
    .partners__banner {
        height: calc(100vh - 103px);
    }
    .partners__content {
        padding: 60px 60px 0;
    }
    .partners__bannerText {
        font-size: 16px;
    }
}
@media (max-width: 1279.99px) {
    .partners__banner {
        height: calc(100vh - 89px);
    }
    .partners__content {
        padding: 40px 40px 0;
    }
    .partners__bannerSlider {
        height: 49px;
    }
    .partners__titleSlide {
        font-size: 40px;
    }
    .partners__title {
        font-size: 40px;
        max-width: 50%;
    }
    .partners__icon {
        width: 48px;
        height: 48px;
    }
}
@media (max-width: 1023.99px) {
    .partners__bannerSlider {
        height: 39px;
    }
    .partners__titleSlide {
        font-size: 32px;
    }
    .partners__title {
        position: static;
        text-align: left;
        max-width: 100%;
        display: inline-block;
        margin-bottom: 20px;
        font-size: 32px;
    }
    .partners__bannerText {
        max-width: 100%;
    }
    .partners__diagram {
        position: relative;
        top: initial;
        right: initial;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    .partners__bannerButton {
        margin-top: 20px;
    }
    .partners__content {
        padding: 28px 20px 0;
    }
}
@media (max-height: 960px) {
    .partners__title {
        margin-bottom: 60px;
        font-size: 52px;
    }
    .partners__titleSlide {
        font-size: 52px;
    }
    .partners__bannerSlider {
        height: 63px;
    }
    .partners__bannerButton {
        margin-top: 20px;
    }
}
@media (max-height: 740px) {
    .partners__title {
        margin-bottom: 40px;
        font-size: 40px;
    }
    .partners__bannerSlider {
        height: 49px;
    }
    .partners__titleSlide {
        font-size: 40px;
    }
    .partners__banner {
        padding: 40px;
    }
}
@media (max-height: 570px) {
   .partners__diagram  {
     display: none;
   }
}
@media (max-width: 767.99px) {
    .partners__banner {
        padding: 40px;
    }
    .partners__bannerSlider {
        height: 34px;
    }
    .partners__title, .partners__titleSlide {
        font-size: 28px;
        text-align: center;
    }
    .partners__diagram {
        margin: 0 auto 20px;
    }
    .partners__bannerButton {
        display: inline-block;
        margin-top: 0;
        padding: 0px 8px;
        font-weight: 300;
    }
   .partners__bullets {
       padding: 0;
       padding-top: 40px;
   }
   .partners__pointWrap {
       padding: 8px;
   }
   .partners__icon {
       width: 40px;
       height: 40px;
   }
   .partners__button {
       margin-top: 20px;
       font-size: 12px;
   }
   .partners__button > svg {
       width: 24px;
       height: 24px;
   }
}
@media (max-width: 574.99px) {
    .partners__banner {
       padding: 40px 20px;
    }
    .partners__button {
        margin-top: 0px;
    }
    .partners__content {
        padding: 28px 12px;
    }
    .partners__pointWrap {
        padding: 0;
    }
}
@media (max-width: 374.99px) {
    .partners__banner {
       padding: 20px;
    }
    .partners__cardSwiper {
        max-width: 260px;
    }
    .partners__bannerSlider {
        height: 29px;
    }
    .partners__title, .partners__titleSlide {
        font-size: 24px;
    }
    .partners__diagram {
        font-size: 14px;
    }
}
</style>
