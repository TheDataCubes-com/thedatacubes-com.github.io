<template>
  <Banner class="partners__banner">
    <template v-slot:slot--title>
      <span class="partners__title">We help MDM solution providers win in the market</span>
      <img src="/images/d1.png" alt="dc-diagram" class="partners__diagram">
    </template>
    <template v-slot:slot--secondary>
      <p class="partners__bannerText">
        We translate complex business problems into successful technical solutions.
        <CommonDynamicButton
          link="/free-consultation"
          text="Work With Us"
          :isIcon="true"
          class="partners__bannerButton"
        />
      </p>
    </template>
  </Banner>
  <div class="bg--pink">
    <CommonCustomSwiper :items="trustedBy" :maxPerView="6">
      <template #item="itemProps">
        <div
          :style="`background-image: url(${itemProps.slide});`"
          class="partner__slide"
        />
      </template>
    </CommonCustomSwiper>
    <h2 class="partners__subTitle">Services</h2>
    <section class="partners__content">
      <div class="partners__points">
        <div
          v-for="({text, bullets, icon}, index) in pageText"
          :key="index"
          class="partners__pointWrap"
        >
          <div
            @click="() => setActive(index, bullets)"
            :class="['partners__text', {'text--selected': index === active}]"
          >
            <svg class="partners__icon">
              <use :xlink:href="icon" />
            </svg>
            <h3>{{text}}</h3>
            <svg class="partners__arrow">
              <use xlink:href="#arrow" />
            </svg>
          </div>
        </div>
      </div>
      <ul v-if="placeText" :class="['partners__bullets', {'expand': placeText}]">
        <li
          v-for="({title, text}, index) in placeText"
          :key="index"
          class="bullet__item"
        >
          <h4>{{title}}</h4>
          <p v-html="text"/>
        </li>
        <CommonDynamicButton
          link="/free-consultation"
          text="talk to us"
          :isIcon="true"
          class="partners__button"
        />
      </ul>
    </section>
  </div>
</template>

<script setup>
const trustedBy = ref([
  "/images/boa-logo.png",
  "/images/sonos-logo.png",
  "/images/bm-logo.png",
  "/images/pm-logo.svg",
  "/images/mattel-logo.png",
  "/images/svb-logo.png",
]);
const pageText = ref([
  {
    text: "For your existing MDM clients and prospects",
    bullets: [
      { title: 'FinServ Advisory Services ("Hot lead to close")', text: "As an independent specialist team specializing in the Financial services sector, we step in when sales team needs help closing promising leads. Our deep expertise in financial services makes us more relatable and effective than a vendor’s sales team. We offer evaluations of customer use cases, any MDM product concerns, and solution gaps, aiding MDM Leads to close deals with confidence." },
      { title: 'Enhancing Client Retention and Cross-Selling ("Stickiness")', text: "We conduct thorough evaluations of existing customers' business needs to offer tailored MDM modeling solutions (e.g., custom solutions for mortgage clients). This approach supports new business use cases, combining deep business domain knowledge with MDM expertise. Our optimization billing aids in justifying funding / license renewals." },
      { title: 'Navigating Implementation and Strategy Challenges ("Budget and Learning curve")', text: "We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights help in reducing costs and preparation time, especially when engaging with System Integrators (SIs). Our expertise is particularly valuable in scenarios where top-tier SI have previously stalled due to budget constraints, offering an effective alternative with proven in-house MDM implementation strategies." },
    ],
    icon: "#grow"
  },
  {
    text: "Generating New Leads",
    bullets: [
      { title: "Target new trending Use Cases related to Generative AI", text: "Tap into entirely new use cases for the MDM market, related to the adoption of Generative AI by customers."},
      { title: "Leveraging Our Deep Understanding of FinServ", text: "Our extensive expertise in the Financial Services industry is a valuable asset in generating new leads. This profound knowledge enables us to identify potential clients who stand to gain significantly from MDM implementation."},
      { title: "Collaboration with Technology Partners", text: "We also collaborate with non MDM technology partners to enhance client understanding by complementing, contrasting, and determining the best combination of products such as CDP, Customer Master, Identity Resolution, C360, MDM, and ER, to identify the most effective solution."},
      { title: 'Leveraging our "Data Management Strategy Consulting" service', text: "Our Data Management Strategy Consulting service acts as a key source of new leads for our vendor partners. Gained from our deep understanding of use cases through close collaboration with businesses, we uncover client needs and opportunities that align with our partners' offerings."},
      { title: "Targeting Companies with On-Premise MDM Solutions", text: "There is an opportunity in engaging with companies currently using on-premise solutions and seeking to migrate to the cloud. We can help to address their needs by offering more advanced, cloud-based solutions that enhance their data management capabilities."},
    ],
    icon: "#cloud"
  },
  {
    text: "Support for MDM Product Management",
    bullets: [
      { title: "Expanding New Domains", text: "We offer a specialized package (model, business use case, POC to test the interest) tailored to aid the Financial Services sector, with a specific emphasis on the Venture Capital industry, designed to accelerate the implementation process."},
      { title: "Client Engagement and Feedback Translation", text: "Regular meetings with MDM clients are vital in understanding their unique challenges and needs. Our team, equipped with both technical expertise and financial services domain knowledge, acts as a bridge. We translate client feedback and challenges into actionable insights for the Product Management team, ensuring that the MDM product roadmap aligns closely with client requirements and industry trends."},
    ],
    icon: "#shift-data"
  },
  {
    text: "Support for MDM Platform Technology",
    bullets: [
      { title: "Features Feasibility Analysis", text: "Leveraging our deep expertise in MDM implementation within the Financial Services sector, we provide critical insights into the feasibility of specific features, including discussions on adoption such as industry standard models, invoking AI as an intelligent advisor, and more."},
      { title: "Data Products service for MDM Solution Providers", text: "Specializing in the FinServ sector, we offer an expert service focused on the strategic development and utilization of Data Products. Unlike traditional approaches that primarily involve exporting all of data into Data Warehouses or Data Lakes, our service concentrates on aligning data with the specific operational needs and usage scenarios of our clients in the financial industry.<br/>We understand that in the FinServ sector, the effective use of data products goes beyond mere data storage and access; it involves a nuanced understanding of how data can drive decision-making and operational efficiency. Our expertise lies in identifying and defining these Data Products in a way that they directly support the business objectives and processes of our clients."},
    ],
    icon: "#person"
  },
  {
    text: "Our Products",
    bullets: [
      { title: "Accelerators and MDM Advisory Services", text: 'Our custom-built frameworks, like MCMS, MDM Gateway, assist new customers in kickstarting their MDM implementations. <br/><br/>"Where to start?" "How to succeed with implementation delivery?" We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights also help in reducing costs and preparation time, especially when client plans an in-house MDM implementation.<br/><br/>We focus on practical purpose built reusable application - how Data Products will be used - rather than exporting all data in DW / DL.' }
    ],
    icon: "#grid"
  },
]);
const active = ref(0);
const placeText = ref(pageText.value[0].bullets);

const setActive = (index, bullets) => {
  if (active.value === index) {
    active.value = null;
    placeText.value = null;
  }
  else {
    active.value = index;
    placeText.value = bullets;
  }
};
</script>

<style>
.bg--pink {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    place-items: center;
}
.partners__banner > .banner__secondary {
   top: calc(100vh * 0.5);
}
.partners__diagram {
    position: absolute;
    top: 6vh;
    max-width: 420px;
    right: 12%;
}
.partners__title {
    position: absolute;
    max-width: 55%;
    text-align: left;
    font-weight: 700;
    top: 16vh;
    left: 0;
    font-size: 60px;
    color: white;
}
.partners__bannerText {
    width: 100%;
    font-size: 24px;
    line-height: 1.7;
    font-weight: 300;
    color: white;
}
.partners__bannerButton {
    line-height: 1;
    margin-top: 40px;
    font-size: 18px;
    padding: 6px 16px;
}
.partners__bannerButton > svg {
   width: 20px;
   height: 20px;
}
.partners__subTitle {
    font-size: 44px;
    font-weight: 600;
    color: var(--darkPurple);
    place-self: center;
    background-color: #eedcf9;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 260px;
}
.partners__content {
    padding: 60px 80px 0;
    width: fit-content;
    background-color: white;
    transform: translateY(-20%);
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0 10px 15px var(--darkPurple);
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
.partners__icon {
    place-self: center;
    width: 60px;
    height: 60px;
    fill: var(--darkPurple);
    transition: fill 0.3s ease;
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
.partners__text h3 {
    transition: color 0.3s ease;
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
    max-height: 0;
    overflow: hidden;
    margin-bottom: 40px;
    transition: max-height 0.3s ease;
}
.partners__text h3 {
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
.expand {
    max-height: 100vh;
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
.bullet__item > h4 {
    font-size: 20px;
    font-weight: 600;
    color: #3D3D3D;
    margin-bottom: 4px;
}
.bullet__item > p {
    font-weight: 300;
    font-size: 18px;
    color: #666666;
}
.text--selected {
    box-shadow: none;
    pointer-events: none;
    background-color: var(--darkPurple);
}
.text--selected h3 {
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
.partner__slide {
    place-self: center;
    width: 200px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
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
    .partners__text:hover {
        transform: translateY(-15px);
        box-shadow: 0 10px 14px var(--darkPurple);
    }
}
@media (max-height: 960px) {
    .partners__bannerText {
        font-size: 20px;
    }
}
@media (max-width: 1659.99px) {
    .partners__bannerText {
        font-size: 18px;
    }
}
@media (max-width: 1439.99px) {
    .partners__bannerText {
        font-size: 16px;
    }
}
@media (max-width: 574.99px) {
    .partners__bannerText {
        font-size: 14px;
    }
}
</style>
