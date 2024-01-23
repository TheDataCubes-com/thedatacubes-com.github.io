<template>
  <div class="bg--pink">
    <article class="main partners">
      <h1>MDM Partners</h1>
      <p>Finding a firm with expertise in technology products, deep knowledge of the Financial Services industry, and proficiency in guiding strategy and implementation is a rare combination. It's challenging to come across an organization that effectively possesses all these capabilities to deliver solutions to business problems.</p>
      <p>We excel in Strategic Consulting and the delivery of MDM solutions, particularly within the Financial Services sector. Our standout ability lies in translating complex business problems into successful technical solutions, a skill that significantly contributed to the success of our projects.</p>
      <div
        v-for="({text, bullets}, index) in pageText"
        :key="index"
        class="partners__text"
      >
        <h3 @click="() => setActive(index)">
          {{text}}
          <svg
            height="30px"
            width="30px"
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
    </article>
  </div>
</template>

<script setup>
const active = ref(null);
const setActive = (i) => {
  console.log(i)
  active.value =   active.value === i ? null : i;
}
const pageText = ref([
  {
    text: "Growth Partner for Existing Clients",
    bullets: [
      '<b>Third-Party Independent Advisor ("hot lead to close")</b>: As an independent specialist team specializing in the Financial services sector, we step in when sales team needs help closing promising leads. Our unbiased approach and deep expertise in financial services make us more relatable and effective than a vendor’s sales team. We offer vendor-independent evaluations of customer use cases, MDM product concerns, and solution gaps, aiding MDM Leads to close deals with confidence.',
      `<b>Enhancing Client Retention and Cross-Selling ("Stickiness")</b>: We conduct thorough evaluations of existing customers' business needs to offer tailored MDM modeling solutions (e.g., custom solutions for mortgage clients). This approach supports new business use cases, combining deep business domain knowledge with MDM expertise. Our optimization billing aids in justifying funding/license renewals.`,
      `<b>Accelerators and Advisory Services ("Tips and Tricks")</b>: Our custom-built frameworks, like MCMS, MDM Gateway, assist new customers in kickstarting their MDM implementations.<br/>"Where to start?" "How to succeed with implementation delivery?" We focus on practical purpose built reusable application - how Data Products will be used - rather than exporting all data  in DW / DL.`,
      `<b>Navigating Implementation and Strategy Challenges ("Budget and Learning curve")</b>: We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights help in reducing costs and preparation time, especially when engaging with System Integrators (SIs). Our expertise is particularly valuable in scenarios where top-tier SI have previously stalled due to budget constraints, offering an effective alternative with proven in-house MDM implementation strategies.`,
    ]
  },
  {
    text: "Generating New Leads",
    bullets: [
      `<b>Leveraging Personal Networks in FinServ</b>: Our extensive personal network within the FinServ industry serves as a valuable resource for generating new leads. These connections are pivotal in identifying potential clients who can benefit from the product.`,
      `<b>Collaboration with Technology Partners</b>: We collaborate with technology partners (e.g., Salesforce) to enhance client understanding in differentiating between products such as SFDC, CDP, Customer Master, C360, MDM, and ER. Leading to creating opportunities for new leads for the right product fit.`,
      `<b>Insights and Data Channel (I&D)</b>: Our Insights and Data channel is an additional source of new leads. By showcasing our expertise and success stories, we attract businesses looking for advanced data management solutions.`,
      `<b>Target New trending Use Cases (AI)</b>: Tap into completely new for the MDM market use cases related to GenAI (enabled by underlying product's technology).`,
      `<b>Targeting Companies with On-Premise MDM Solutions</b>: There is an opportunity in engaging with companies currently using on-premise solutions like INFA. We can address their needs by offering more advanced, cloud-based solutions that enhance their data management capabilities.`,
    ]
  },
  {
    text: "Our Products",
    bullets: [`FinServ velocity pack (+ potentially new leads source like DnB).`]
  },
  {
    text: "Support for MDM Product Roadmap (Product Management team)",
    bullets: [
      `<b>Expanding New Domains</b>: re: FinServ velocity pack (model, business use case, POC to test the interest, and more).`,
      `<b>Client Engagement and Feedback Translation</b>: Regular meetings with MDM clients are vital in understanding their unique challenges and needs. Our team, equipped with both technical expertise and financial services domain knowledge, acts as a bridge. We translate client feedback and challenges into actionable insights for the Product Management team, ensuring that the MDM product roadmap aligns closely with client requirements and industry trends.`
    ]
  },
  {
    text: "Support for MDM Product Technology",
    bullets: [
      `<b>Advisory Service on Feasibility</b>: We provide critical insights into what will or will not work for specific features, discuss adoption (e.g., industry standard models adoption).`,
      `<b>Reltio IA functionality</b>: Review.`,
      `<b>Data Products</b>: Data Products and it's usage, rather than just exporting all data into DW or DL. Data to be aligned with the clients' specific operational needs and usage scenarios.`,
      `Client's <b>implementation related pain points</b> review.`
    ]
  },
]);
const changeHeader = inject("changeHeader");
changeHeader(true)
</script>

<style>
.bg--pink {
    background-color: #dfd4e547;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    place-items: center;
}
.partners {
    padding: 46px 100px;
    gap: 20px;
}
.partners h1 {
    place-self: center;
    max-width: 80%;
    font-size: 32px;
}
.partners p {
    font-size: 18px;
}
.partners__text {
    display: flex;
    flex-direction: column;
    gap: 20px
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
    transition: max-height 0.3s ease;
}
.partners__text h3 {
    font-size: 24px;
    display: flex;
    gap: 12px;
    place-content: center;
    align-self: flex-start;
    cursor: pointer;
}
.partners__text>h3>svg {
    transition: rotate 0.3s ease;
}
.expand {
    max-height: 100vh;
}
.partners__bullets > li {
    line-height: 1.5;
    max-width: 90%;
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
</style>
