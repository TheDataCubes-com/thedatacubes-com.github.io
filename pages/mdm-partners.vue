<template>
  <div class="bg--pink">
    <div class="titleWrap">
      <h1>We help MDM solution providers win in the market</h1>
    </div>
    <article class="main partners">
      <section class="partners__top">
        <img src="/images/diagram.png" alt="dc-diagram" class="partners__diagram">
        <p>TheDataCubes is <span class="top--creaming">trusted by</span> Fortune 500 companies and leading startups alike, with deep expertise in translating complex business problems into successful technical solutions.</p>
      </section>
      <h2>Our Services:</h2>
      <section class="partners__points">
        <div
          v-for="({text, bullets}, index) in pageText"
          :key="index"
          class="partners__text"
        >
          <h3 @click="() => setActive(index)">
            {{text}}
            <svg
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 50 50"
              :class="{'partners__arrow': index===active}"
            >
            <path fill="#666666" d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15
   	c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422
   	C15.172,39.813,15.172,40.446,15.563,40.836z"/>
            </svg>
          </h3>
          <ul v-if="bullets"
            :class="['partners__bullets', {'expand': index === active}]"
          >
            <li v-for="(bullet, index) in bullets" :key="index" v-html="bullet" />
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup>
const active = ref(0);
const setActive = (i) => active.value = active.value === i ? null : i;

const pageText = ref([
  {
    text: "For your existing MDM clients and prospects",
    bullets: [
      '<b>FinServ Advisory Services ("hot lead to close")</b>: As an independent specialist team specializing in the Financial services sector, we step in when sales team needs help closing promising leads. Our deep expertise in financial services makes us more relatable and effective than a vendor’s sales team. We offer evaluations of customer use cases, any MDM product concerns, and solution gaps, aiding MDM Leads to close deals with confidence.',
      `<b>Enhancing Client Retention and Cross-Selling ("Stickiness")</b>: We conduct thorough evaluations of existing customers' business needs to offer tailored MDM modeling solutions (e.g., custom solutions for mortgage clients). This approach supports new business use cases, combining deep business domain knowledge with MDM expertise. Our optimization billing aids in justifying funding / license renewals.`,
      `<b>Navigating Implementation and Strategy Challenges ("Budget and Learning curve")</b>: We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights help in reducing costs and preparation time, especially when engaging with System Integrators (SIs). Our expertise is particularly valuable in scenarios where top-tier SI have previously stalled due to budget constraints, offering an effective alternative with proven in-house MDM implementation strategies.`,
    ]
  },
  {
    text: "Generating New Leads",
    bullets: [
      `<b>Target new trending Use Cases related to Generative AI</b>: Tap into entirely new use cases for the MDM market, related to the adoption of Generative AI by customers.`,
      `<b>Leveraging Our Deep Understanding of FinServ</b>: Our extensive expertise in the Financial Services industry is a valuable asset in generating new leads. This profound knowledge enables us to identify potential clients who stand to gain significantly from MDM implementation.`,
      `<b>Collaboration with Technology Partners</b>: We also collaborate with non MDM technology partners to enhance client understanding by complementing, contrasting, and determining the best combination of products such as CDP, Customer Master, Identity Resolution, C360, MDM, and ER, to identify the most effective solution.`,
      `<b>Leveraging our "Data Management Strategy Consulting" service</b>: Our Data Management Strategy Consulting service acts as a key source of new leads for our vendor partners. Gained from our deep understanding of use cases through close collaboration with businesses, we uncover client needs and opportunities that align with our partners' offerings.`,
      `<b>Targeting Companies with On-Premise MDM Solutions</b>: There is an opportunity in engaging with companies currently using on-premise solutions and seeking to migrate to the cloud. We can help to address their needs by offering more advanced, cloud-based solutions that enhance their data management capabilities.`,
    ]
  },
  {
    text: "Our Products",
    bullets: [
      `<b>Accelerators and MDM Advisory Services</b>: Our custom-built frameworks, like MCMS, MDM Gateway, assist new customers in kickstarting their MDM implementations. <br/><br/>"Where to start?" "How to succeed with implementation delivery?" We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights also help in reducing costs and preparation time, especially when client plans an in-house MDM implementation.<br/><br/>We focus on practical purpose built reusable application - how Data Products will be used - rather than exporting all data in DW / DL.`,
    ]
  },
  {
    text: "Support for MDM Product Management",
    bullets: [
      `<b>Expanding New Domains</b>: We offer a specialized package (model, business use case, POC to test the interest) tailored to aid the Financial Services sector, with a specific emphasis on the Venture Capital industry, designed to accelerate the implementation process.`,
      `<b>Client Engagement and Feedback Translation</b>: Regular meetings with MDM clients are vital in understanding their unique challenges and needs. Our team, equipped with both technical expertise and financial services domain knowledge, acts as a bridge. We translate client feedback and challenges into actionable insights for the Product Management team, ensuring that the MDM product roadmap aligns closely with client requirements and industry trends.`
    ]
  },
  {
    text: "Support for MDM Platform Technology",
    bullets: [
      `<b>Features Feasibility Analysis</b>: Leveraging our deep expertise in MDM implementation within the Financial Services sector, we provide critical insights into the feasibility of specific features, including discussions on adoption such as industry standard models, invoking AI as an intelligent advisor, and more.`,
      `<b>Data Products service for MDM Solution Providers</b>: Specializing in the FinServ sector, we offer an expert service focused on the strategic development and utilization of Data Products. Unlike traditional approaches that primarily involve exporting all of data into Data Warehouses or Data Lakes, our service concentrates on aligning data with the specific operational needs and usage scenarios of our clients in the financial industry.<br/>We understand that in the FinServ sector, the effective use of data products goes beyond mere data storage and access; it involves a nuanced understanding of how data can drive decision-making and operational efficiency. Our expertise lies in identifying and defining these Data Products in a way that they directly support the business objectives and processes of our clients.`,
    ]
  },
]);
</script>

<style>
.bg--pink {
    background-color: #dfd4e547;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    place-items: center;
}
.titleWrap {
   margin-top: 40px;
   width: 100vw;
   background-color: var(--darkPurple);
   padding: 40px 0;
   display: flex;
   place-content: center;
}
.titleWrap h1 {
    color: white;
    max-width: var(--maxWidth);
    width: 100%;
    padding: 0 40px;
    font-size: 32px;
}
.partners {
    padding: 46px 100px;
    gap: 12px;
}
.partners h2 {
    font-size: 28px;
    color: var(--darkPurple);
    place-self: center;
}
.partners p {
    font-size: 18px;
}
.partners__text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 70%;
}
.partners__bullets {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: disc inside;
    width: 100%;
    height: fit-content;
    max-height: 0;
    overflow: hidden;
    margin-bottom: 12px;
    transition: max-height 0.3s ease;
}
.partners__text h3 {
    display: flex;
    text-decoration: underline;
    place-items: center;
    gap: 12px;
    align-self: flex-start;
    cursor: pointer;
    width: fit-content;
    place-self: center;
}
.partners__text>h3>svg {
    border-radius: 20px;
    width: 24px;
    height: 24px;
    border: 1px solid var(--darkPurple);
    transition: 0.3s ease;
}
.expand {
    max-height: 100vh;
}
.partners__bullets > li {
    line-height: 1.5;
    width: 100%;
    place-self: flex-end;
    font-weight: 300;
    font-size: 18px;
}
.partners__bullets > li > b {
    font-size: 18px;
}
.partners__arrow {
    rotate: 90deg;
}
.partners__top {
    display: flex;
    gap: 10%;
    margin-bottom: 10px;
    place-content: center;
    place-items: center;
}
.partners__top>div {
    position: relative;
    border: 1px solid;
    opacity: 0.1;
    height: 180px;
    width: 180px;
    border-radius: 50px;
    flex-shrink: 0;
}
.partners__top>p {
    max-width: 60%;
}
.partners__diagram {
    max-width: 320px;
    width: 100%;
}
.partners__points {
    display: flex;
    flex-direction: column;
    width: 100%;
    place-items: center;
}
.top--creaming {
    color: var(--darkPurple);
    font-weight: 600;
    text-transform: uppercase;
}
</style>
