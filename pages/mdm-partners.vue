<template>
  <div class="bg--pink">
    <CommonTitleLine
      description='<span class="top--screaming">trusted by</span> Fortune 500 companies and leading startups alike. We translate complex business problems into successful technical solutions.'
      title="We help MDM solution providers win in the market"
    >
      <img src="/images/d1.png" alt="dc-diagram" class="partners__diagram">
    </CommonTitleLine>
    <!-- <CommonCustomSwiper /> -->
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
            <svg class="partners__icon" viewBox="0 0 56 56" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
              <path d="M50.7 31.7c-1.7-.5-3.6-.5-5.4.1l-6.2 2c-.1-.4-.4-.9-.9-1.4-1-1.1-2.6-1.8-4.2-1.8h-5.3c-.3 0-.7-.1-.9-.3-3.9-3.3-8.4-1.8-9.7-1.2-.3.1-.6.3-.8.5l-6.1 5.1c-.5-.5-1.2-.9-1.9-1-.9-.1-1.8.1-2.6.7l-2.3 1.7c-1.5 1.2-1.8 3.3-.7 4.9l8 10.6c.6.7 1.4 1.2 2.3 1.3h.5c.7 0 1.5-.2 2.1-.7l2.3-1.7c1.2-.9 1.7-2.6 1.1-3.9l1.2-.9c.3-.2.6-.3.9-.3l11.3-.2c2 0 4-.6 5.8-1.6l11.6-6.7c.6-.3 2.4-1.5 2.2-3.1-.1-1-.9-1.7-2.3-2.1zM17.6 48.9l-2.3 1.7c-.3.3-.7.4-1 .4-.4-.1-.7-.3-1-.6l-8-10.6c-.5-.6-.4-1.6.3-2.1L7.9 36c.3-.2.6-.3.9-.3H9c.4.1.7.2.9.5l5.6 7.4 2.5 3.2c.4.7.3 1.7-.4 2.1zm32.2-13.8-11.6 6.7c-1.5.8-3.1 1.3-4.8 1.3l-11.4.2c-.8 0-1.5.3-2.1.7l-1 .8-2.3-3-4.2-5.6 6.1-5.1c.1-.1.2-.1.3-.2 1-.4 4.6-1.7 7.6.9.6.5 1.4.8 2.2.8h5.3c1.1 0 2.1.4 2.8 1.1.2.3.5.7.5 1 0 .2-.3.8-1.9 1.5h-7.6c-.6 0-1 .4-1 1s.4 1 1 1h8.1l.2-.1c1.5-.7 2.4-1.4 2.9-2.2l7.1-2.2c1.4-.5 2.9-.5 4.2-.1.6.2.8.3.9.4-.2.3-.8.8-1.3 1.1z"/>
              <path d="m9.1 38.1-1.8 1.3c-.4.3-.5 1-.2 1.4.2.3.5.4.8.4.2 0 .4-.1.6-.2l1.8-1.3c.4-.3.5-1 .2-1.4-.4-.5-1-.6-1.4-.2zM27.2 14c1.7 1.4 4 1.7 5.9 1.7 1.1 0 2.2-.1 2.9-.3v6.2c-3.7.5-6.6 3.4-6.6 6.8v1h15.7v-1c0-3.6-3.2-6.5-7.2-6.8v-7.2c1.4.6 3.6 1.3 5.8 1.3 1 0 2-.1 2.9-.5 4.2-1.7 5.6-7.6 5.7-7.9.1-.4-.1-.8-.4-1.1-.2-.1-5.4-3.3-9.6-1.6-2.2.9-3.9 3-4.9 4.8-.4-1.6-1.3-3.4-2.9-4.6-3.7-3-9.8-1.3-10.1-1.2-.4.1-.7.5-.7.9 0 .3-.3 6.6 3.5 9.5zM43 27.5H31.5c.6-2.2 2.9-3.9 5.7-3.9 2.9 0 5.3 1.7 5.8 3.9zm.1-20.9c2.5-1 5.8.4 7.1 1.1-.5 1.5-1.8 4.7-4.3 5.8-2 .8-4.5.2-6.3-.5l7.2-2.8c.4-.2.6-.5.6-.9 0-.1 0-.2-.1-.4-.2-.5-.8-.8-1.3-.6l-7.2 2.8c.9-1.7 2.3-3.7 4.3-4.5zm-9.8-.3c1.8 1.4 2.4 4 2.6 5.8l-6.3-5c-.4-.3-1.1-.3-1.4.2-.1.2-.2.4-.2.6 0 .3.1.6.4.8l6.3 5c-1.8.2-4.4.2-6.2-1.2-2.3-1.8-2.6-5.5-2.7-7.1 1.5-.4 5.2-.9 7.5.9z"/>
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
  console.log(index, bullets)
  if (active.value === index) {
    active.value = null;
    placeText.value = null;
  }
  else {
    active.value = index;
    placeText.value = bullets;
  }
};

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
@media (hover:hover) {
    .partners__text:hover {
        background-color: var(--mainYellow);
    }
}
</style>
