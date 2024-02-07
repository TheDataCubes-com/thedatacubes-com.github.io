<template>
  <div class="bg--pink">
    <CommonTitleLine
      description='<span class="top--screaming">trusted by</span> Fortune 500 companies and leading startups alike. We translate complex business problems into successful technical solutions.'
      title="We help MDM solution providers win in the market"
      class="partners__title"
    >
      <img src="/images/d1.png" alt="dc-diagram" class="partners__diagram">
    </CommonTitleLine>
      <CommonCustomSwiper :items="trustedBy" :maxPerView="6">
        <template #item="itemProps">
          <div
          :style="`background-image: url(${itemProps.slide});`"
          class="partner__slide"
          />
        </template>
      </CommonCustomSwiper>
      <h2 class="partners__subTitle">Services</h2>
      <section class="partners__points">
        <div
          v-for="({text, bullets}, index) in pageText"
          :key="index"
          class="partners__pointWrap"
        >
          <div
            @click="() => setActive(index, bullets)"
            :class="['partners__text', {'text--selected': index === active}]"
          >
          <svg class="partners__icon" data-bbox="20.532 45.947 158.928 108.107" viewBox="20.532 45.947 158.928 108.107" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" aria-hidden="true">
            <g fill="#210076">
              <path d="m82.935 75.852 44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.828 4.828 0 0 0 0-8.768l-44.836-20.692a4.826 4.826 0 0 0-4.047 0L82.935 67.083a4.828 4.828 0 0 0 0 8.769zm46.86-19.759 33.312 15.374-33.312 15.374-33.312-15.374 33.312-15.374z" data-color="1"/>
              <path d="m172.608 95.616-42.813 19.758-42.813-19.758a4.83 4.83 0 0 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" data-color="1"/>
              <path d="m172.608 124.149-42.813 19.758-42.813-19.758a4.828 4.828 0 1 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769zM65.095 95.171H25.368a4.829 4.829 0 1 0 0 9.658h39.727a4.829 4.829 0 1 0 0-9.658zm0-18.725H37.44a4.829 4.829 0 1 0 0 9.658h27.655a4.829 4.829 0 1 0 0-9.658zm0 37.451H49.512a4.829 4.829 0 1 0 0 9.658h15.583a4.829 4.829 0 1 0 0-9.658z" data-color="1"/>
            </g>
          </svg>
            <h3>{{text}}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 50 50"
              class="partners__arrow"
            >
            <path fill="#666666" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15
   	c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422
   	C15.172,39.813,15.172,40.446,15.563,40.836z"/>
            </svg>
          </div>
        </div>
      </section>
      <ul v-if="placeText" :class="['partners__bullets', {'expand': placeText}]">
        <li
          v-for="({title, text}, index) in placeText"
          :key="index"
          class="bullet__item"
        >
          <h4>{{title}}</h4>
          <p v-html="text"/>
        </li>
      </ul>
  </div>
</template>

<script setup>
const active = ref(null);
const placeText = ref(null);
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

const trustedBy = ref([
  "/images/boa-logo.png",
  "/images/sonos-logo.png",
  "/images/bm-logo.png",
  "/images/pennymac-logo.png",
  "/images/mattel-logo.png",
  "/images/svb-logo.png",
]);
const pageText = ref([
  {
    text: "For your existing MDM clients and prospects",
    bullets: [
      { title: 'FinServ Advisory Services ("hot lead to close")', text: "As an independent specialist team specializing in the Financial services sector, we step in when sales team needs help closing promising leads. Our deep expertise in financial services makes us more relatable and effective than a vendor’s sales team. We offer evaluations of customer use cases, any MDM product concerns, and solution gaps, aiding MDM Leads to close deals with confidence." },
      { title: 'Enhancing Client Retention and Cross-Selling ("Stickiness")', text: "We conduct thorough evaluations of existing customers' business needs to offer tailored MDM modeling solutions (e.g., custom solutions for mortgage clients). This approach supports new business use cases, combining deep business domain knowledge with MDM expertise. Our optimization billing aids in justifying funding / license renewals." },
      { title: 'Navigating Implementation and Strategy Challenges ("Budget and Learning curve")', text: "We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights help in reducing costs and preparation time, especially when engaging with System Integrators (SIs). Our expertise is particularly valuable in scenarios where top-tier SI have previously stalled due to budget constraints, offering an effective alternative with proven in-house MDM implementation strategies." },
    ]
  },
  {
    text: "Generating New Leads",
    bullets: [
      { title: "Target new trending Use Cases related to Generative AI", text: "Tap into entirely new use cases for the MDM market, related to the adoption of Generative AI by customers."},
      { title: "Leveraging Our Deep Understanding of FinServ", text: "Our extensive expertise in the Financial Services industry is a valuable asset in generating new leads. This profound knowledge enables us to identify potential clients who stand to gain significantly from MDM implementation."},
      { title: "Collaboration with Technology Partners", text: "We also collaborate with non MDM technology partners to enhance client understanding by complementing, contrasting, and determining the best combination of products such as CDP, Customer Master, Identity Resolution, C360, MDM, and ER, to identify the most effective solution."},
      { title: 'Leveraging our "Data Management Strategy Consulting" service', text: "Our Data Management Strategy Consulting service acts as a key source of new leads for our vendor partners. Gained from our deep understanding of use cases through close collaboration with businesses, we uncover client needs and opportunities that align with our partners' offerings."},
      { title: "Targeting Companies with On-Premise MDM Solutions", text: "There is an opportunity in engaging with companies currently using on-premise solutions and seeking to migrate to the cloud. We can help to address their needs by offering more advanced, cloud-based solutions that enhance their data management capabilities."},
    ]
  },
  {
    text: "Support for MDM Product Management",
    bullets: [
      { title: "Expanding New Domains", text: "We offer a specialized package (model, business use case, POC to test the interest) tailored to aid the Financial Services sector, with a specific emphasis on the Venture Capital industry, designed to accelerate the implementation process."},
      { title: "Client Engagement and Feedback Translation", text: "Regular meetings with MDM clients are vital in understanding their unique challenges and needs. Our team, equipped with both technical expertise and financial services domain knowledge, acts as a bridge. We translate client feedback and challenges into actionable insights for the Product Management team, ensuring that the MDM product roadmap aligns closely with client requirements and industry trends."},
    ]
  },
  {
    text: "Support for MDM Platform Technology",
    bullets: [
      { title: "Features Feasibility Analysis", text: "Leveraging our deep expertise in MDM implementation within the Financial Services sector, we provide critical insights into the feasibility of specific features, including discussions on adoption such as industry standard models, invoking AI as an intelligent advisor, and more."},
      { title: "Data Products service for MDM Solution Providers", text: "Specializing in the FinServ sector, we offer an expert service focused on the strategic development and utilization of Data Products. Unlike traditional approaches that primarily involve exporting all of data into Data Warehouses or Data Lakes, our service concentrates on aligning data with the specific operational needs and usage scenarios of our clients in the financial industry.<br/>We understand that in the FinServ sector, the effective use of data products goes beyond mere data storage and access; it involves a nuanced understanding of how data can drive decision-making and operational efficiency. Our expertise lies in identifying and defining these Data Products in a way that they directly support the business objectives and processes of our clients."},
    ]
  },
  {
    text: "Our Products",
    bullets: [
      { title: "Accelerators and MDM Advisory Services", text: 'Our custom-built frameworks, like MCMS, MDM Gateway, assist new customers in kickstarting their MDM implementations. <br/><br/>"Where to start?" "How to succeed with implementation delivery?" We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights also help in reducing costs and preparation time, especially when client plans an in-house MDM implementation.<br/><br/>We focus on practical purpose built reusable application - how Data Products will be used - rather than exporting all data in DW / DL.' }
    ]
  },
]);
</script>

<style>
.bg--pink {
    background-color: #f7eefc;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    place-items: center;
}
.partners__subTitle {
    margin-top: 40px;
    font-size: 48px;
    color: var(--darkPurple);
    place-self: center;
    background-color: #e0bcf4;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 80px;
}
.partners__diagram {
    place-self: center;
    max-width: 320px;
    width: 100%;
}
.partners__points {
    transform: translateY(-40px);
    display: flex;
    width: 100%;
    margin: -12px;
    padding: 0 40px;
}
.partners__pointWrap {
    padding: 12px;
    width: 20%;
    flex-grow: 1;
}
.titleWrap > div > p {
    color: white;
    margin-top: auto;
}
.partners__icon {
    place-self: center;
    width: 60px;
    height: 60px;
}
.partners__text {
    cursor: pointer;
    min-height: 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 4px 4px 12px 0px var(--darkPurple);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.partners__bullets {
    background-color: white;
    border-radius: 20px;
    padding: 20px 40px;
    display: flex;
    max-width: 70%;
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
    font-weight: 300;
    font-size: 16px;
}
.expand {
    max-height: 100vh;
}
.partners__arrow {
    rotate: 90deg;
    border-radius: 20px;
    width: 24px;
    height: 24px;
    border: 1px solid var(--darkPurple);
    flex-shrink: 0;
    position: absolute;
    bottom: 8px;
    right: 8px;
    transition: 0.3s ease;
}
.top--screaming {
    color: var(--mainYellow);
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
}
.bullet__item > h4 {
    font-size: 20px;
    font-weight: 400;
    color: #3D3D3D;
    margin-bottom: 4px;
}
.bullet__item > p {
    font-weight: 300;
    font-size: 18px;
    color: #666666;
}
.text--selected {
    background-color: var(--mainYellow);
}
.partner__slide {
    place-self: center;
    width: 200px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
.partners__title {
    margin: 20px 0 0;
}
@media (hover:hover) {
    .partners__text:hover {
        background-color: var(--mainYellow);
    }
}
</style>
