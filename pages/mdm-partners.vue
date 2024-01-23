<template>
  <article class="main partners">
    <h1>MDM Partners</h1>
    <div
      v-for="({text, bullets}, index) in pageText"
      :key="index"
      class="partners__text"
    >
      <p v-html="text" />
      <ul v-if="bullets" class="partners__bullets">
        <li v-for="(bullet, index) in bullets" :key="index" v-html="bullet" />
      </ul>
    </div>
  </article>
</template>

<script setup>
const pageText = ref([
  {
    text: "Finding a firm with expertise in technology products, deep knowledge of the Financial Services industry, and proficiency in guiding strategy and implementation is a rare combination. It's challenging to come across an organization that effectively possesses all these capabilities to deliver solutions to business problems.",
    bullets: null
  },
  {
    text: "We excel in Strategic Consulting and the delivery of MDM solutions, particularly within the Financial Services sector. Our standout ability lies in translating complex business problems into successful technical solutions, a skill that significantly contributed to the success of our projects.",
    bullets: null
  },
  {
    text: "<b>Growth Partner for Existing Clients</b>",
    bullets: [
      '<b>Third-Party Independent Advisor ("hot lead to close")</b>: As an independent specialist team specializing in the Financial services sector, we step in when sales team needs help closing promising leads. Our unbiased approach and deep expertise in financial services make us more relatable and effective than a vendor’s sales team. We offer vendor-independent evaluations of customer use cases, MDM product concerns, and solution gaps, aiding MDM Leads to close deals with confidence.',
      `<b>Enhancing Client Retention and Cross-Selling ("Stickiness")</b>: We conduct thorough evaluations of existing customers' business needs to offer tailored MDM modeling solutions (e.g., custom solutions for mortgage clients). This approach supports new business use cases, combining deep business domain knowledge with MDM expertise. Our optimization billing aids in justifying funding/license renewals.`,
      `<b>Accelerators and Advisory Services (Tips and Tricks)</b>: Our custom-built frameworks, like MCMS, MDM Gateway, assist new customers in kickstarting their MDM implementations. Where to start? How to succeed and Deliver? We focus on practical purpose built reusable application - how Data Products will be used - rather than exporting all data  in DW / DL.`,
      `<b>Navigating Implementation and Strategy Challenges ("Budget and Learning curve")</b>: We guide clients through the strategic planning and approach for MDM implementation, ensuring success from the outset. Our insights help in reducing costs and preparation time, especially when engaging with System Integrators (SIs). Our expertise is particularly valuable in scenarios where top-tier SIs have previously stalled due to budget constraints, offering an effective alternative with proven in-house MDM implementation strategies.`,
    ]
  },
  {
    text: "<b>Generating New Leads</b>",
    bullets: [
      `<b>Leveraging Personal Networks in FinServ</b>: Our extensive personal network within the FinServ industry serves as a valuable resource for generating new leads. These connections are pivotal in identifying potential clients who can benefit from the product.`,
      `<b>Collaboration with Technology Partners</b>: We collaborate with technology partners like Salesforce to enhance client understanding in differentiating between products such as SFDC, CDP, Customer Master, C360, MDM, and ER. Leading to creating opportunities for new leads for the right product fit.`,
      `<b>Insights and Data Channel (I&D)</b>: Our Insights and Data channel is an additional source of new leads. By showcasing our expertise and success stories, we attract businesses looking for advanced data management solutions.`,
      `<b>Targeting Companies with On-Premise MDM Solutions</b>: There is a opportunity in engaging with companies currently using on-premise solutions like INFA. We can address their needs by offering more advanced, cloud-based solutions that enhance their data management capabilities.`,
    ]
  },
  {
    text: "<b>Our Products</b>",
    bullets: [`FinServ velocity pack (+ potentially new leads source like DnB)`]
  },
  {
    text: "<b>Support for MDM Product Roadmap (Product Management team)</b>",
    bullets: [
      `<b>Expanding New Domains</b>: FinServ velocity pack.`,
      `<b>Client Engagement and Feedback Translation</b>: Regular meetings with MDM clients are vital in understanding their unique challenges and needs. Our team, equipped with both technical expertise and financial services domain knowledge, acts as a bridge. We translate client feedback and challenges into actionable insights for the Product Management team, ensuring that the MDM product roadmap aligns closely with client requirements and industry trends.`
    ]
  },
  {
    text: "<b>Support for MDM Product Technology</b>",
    bullets: [
      `<b>IA</b>: Review`,
      `<b>Advisory Service on Feasibility</b>: We provide critical insights into what will or will not work for specific features (e.g., industry standard models adoption).`,
      `<b>Data Products</b>: Data Products and it's usage, rather than just exporting all data into DW or DL. Data to be aligned with the clients' specific operational needs and usage scenarios.`,
      `Client's <b>implementation related pain points</b> review`
    ]
  },
]);
</script>

<style>
.partners {
    gap: 40px;
}
.partners h1 {
    max-width: 80%;
    color: white;
}
.partners__text {
    display: flex;
    flex-direction: column;
    gap: 20px
}
.partners__text * {
    color: white;
}
.partners__bullets {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: disc inside;
    width: 100%;
}
.partners__bullets > li {
    line-height: 1.5;
    max-width: 90%;
    width: 100%;
    place-self: flex-end;
    font-weight: 300;
}
</style>
