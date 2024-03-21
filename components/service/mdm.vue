<template>
  <div class="services__text mdm">
    <h2 class='services__subTitle'>Unlock the Power of Master Data Management</h2>
    <p>
      <span class='services__highlight hl--block'>Why embrace MDM?</span>
      The adoption of Master Data Management marks the beginning of a virtuous cycle, enhancing how data serves your business in increasingly diverse and impactful ways. Our expertise, forged through numerous implementation journeys, has consistently unlocked key benefits for organizations:
    </p>
    <ul class='services__list'>
      <li>Gain a deeper understanding of your customers and their relationships through clean, enriched data.</li>
      <li>Discover new revenue opportunities by uncovering hidden connections within your data.</li>
      <li>Enhance risk management with advanced insights for Know Your Customer (KYC) practices and fraud detection.</li>
      <li>Implement Privacy by Design (PbD) principles to ensure data privacy from the outset.</li>
      <li>Facilitate a smooth transition to MDM with our tailored consulting services, designed to make the process straightforward and efficient.</li>
    </ul>
    <p>By unifying data, we empower businesses to respond with agility, driving action, insight, and unparalleled value. Engage with our strategic advisory consulting services to transform your data management capabilities and leverage MDM to its fullest potential.</p>
    <div class='mdm__imageBlock'>
      <p>
        <span class='services__highlight hl--block'>
        We're going to accelerate your success on your journey to Customer&nbsp360</span>Our team of experienced domain experts, with years of hands-on experience in the Financial Services industry, excels in strategic consulting and delivering customized Master Data Management solutions. Driven to empower and enable clients, we effectively solve complex technical and business challenges by introducing cutting-edge innovations, new approaches, and fresh perspectives.<br/><br/>Our standout ability to translate complex business problems into successful technical solutions has significantly contributed to the success of our projects in the Financial Services sector.
      </p>
      <div class='mdm__imageWrap'>
        <img src='/svg/logo-simple.svg' alt='logo' class='img-l'/>
      </div>
    </div>
    <h2 class='services__subTitle'>We help you get the most out of your MDM decisions</h2>
    <section class='mdm__blocks'>
      <div
        v-for="({icon, title, subTitle, text}, index) in infographics"
        :key="index"
        class="mdm__cardWrap"
      >
        <article class='mdm__card'>
          <div>
            <svg><use :xlink:href='icon' /></svg>
            <h3>{{title}}</h3>
          </div>
          <span v-if="subTitle" class='services__highlight hl--block'>{{subTitle}}</span>
          <p v-html="text" />
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
const list = ref([
]);
const infographics = ref([
  {
    icon: "#sv-serv",
    title: "Technology Selection",
    subTitle: "Example: Is MDM the right product to solve your Business problem or is ER sufficient?",
    text: "With a wide variety of solutions in the market, determining which technology fits best for the problem you're trying to solve can be challenging.<br/><br/>We are a vendor-independent, third-party advisory consultancy with start-to-finish implementation expertise in multiple MDM/ER products. We offer unbiased evaluations of customers’ use cases, MDM product concerns, and solution gaps.<br/><br/>We collaborate with MDM and non-MDM technology partners to enhance client understanding and identify the most effective solutions. We do this by complementing, contrasting, and determining the best combination of products, such as CDP, Customer Master, Identity Resolution, C360, MDM, and ER."
  },
  {
    icon: "#sv-db",
    subTitle: "Poor data quality halts progress by undermining trust in data accuracy. Do you have a tool to ensure data quality and/or require assistance setting up a remediation process?",
    title: "Data Quality (DQ) Profiling and Remediation",
    text: "Our team specializes in developing automated database architectures and systems that ensure Data Quality and performance. It's essential to highlight (and often overlooked) that good DQ is extremely critical for reliable analysis and informed decision-making.<br/><br/>At TheDataCubes, we have developed a tool designed for DQ monitoring, detecting anomalies in raw data as they appear, and identifying data drifts across critical KPIs."
  },
  {
    icon: "#sv-growth",
    title: "Expanding Your MDM Solution for New Business Use Cases",
    subTitle: "Do you need to enhance your MDM solution for a new business use case while staying within budget?",
    text: "We conduct in-depth evaluations of our clients' business requirements to develop bespoke MDM solutions and accelerators, such as specialized offerings for the mortgage sector. This approach combines our solid business domain knowledge with MDM expertise to support new business use cases, enabling customized and effective data management strategies.<br/><br/>Our tailored solutions are designed to not only meet the unique needs of each client but also to maximize the benefits of MDM technologies—enhancing customer insights, uncovering new revenue opportunities, and bolstering risk management.<br/><br/>Additionally, our optimization billing strategy helps clients justify MDM investments and manage license renewal costs effectively, ensuring cost-effective adoption. This aligns technical solutions with business value and supports digital transformation, facilitating the seamless integration of MDM solutions into operations for significant impact."
  },
  {
    icon: "#sv-graph",
    title: "Systems Integration",
    subTitle: "Example: Need to find the optimal way to integrate MDM with Salesforce CRM and/or internal systems while staying within budget and making the solution readily available for enterprise consumption?",
    text: "As part of our strategic advisory consulting services, we closely collaborate with our clients, providing objective advice to those preparing to invest in a data management platform and advising on the best route to take.<br/><br/>From offering Enterprise Architecture solutions to custom-built frameworks that assist in kick-starting a client's MDM implementation, we guide clients through strategic planning and approaches for MDM implementation to ensure success from the outset. Our insights further help reduce costs and preparation time, especially when a client plans an in-house MDM implementation."
  },
  {
    icon: "#sv-cloud",
    title: "Transforming MDM for Enhanced Business Value",
    subTitle: "Do you have a legacy MDM and are seeking to migrate to advanced, cloud-based solutions that enhance your data management capabilities, help you understand your customers and their relationships, and mitigate risks?",
    text: "Specializing in the Fintech sector, we offer an expert service focused on the strategic development and utilization of Data Products. Unlike traditional approaches that primarily involve exporting all of data into Data Warehouses or Data Lakes, our service concentrates on aligning data with the specific operational needs and usage scenarios of our clients in the financial industry.<br/><br/>We understand that in the Fintech sector, the effective use of data products goes beyond mere data storage and access; it involves a nuanced understanding of how data can drive decision-making and operational efficiency. Our expertise lies in identifying and defining these Data Products in a way that they directly support the business objectives and processes of our clients."
  },
])
</script>

<style>
.mdm .services__subTitle {
   place-self: center;
   margin-bottom: 20px;
}
.mdm .services__subTitle:nth-of-type(2) {
   margin-top: 60px;
}
.services__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.mdm__imageBlock {
    display: flex;
    place-items: center;
}
.mdm__imageWrap {
    background-image: url("/images/diagram.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 280px;
    height: 260px;
    width: 100%;
    flex-shrink: 0;
    position: relative;
}
.img-l {
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 50%;
    transform: translate(-64%, -26%);
    max-width: 20%;
    width: 100%;
}
.mdm__blocks {
    display: flex;
    flex-wrap: wrap;
    margin: -32px;
    place-content: center;
}
.mdm__cardWrap {
    padding: 32px;
    max-width: 50%;
    width: 100%;
}
.mdm__card {
    width: 100%;
    display: flex;
    gap: 12px;
    flex-direction: column;
    height: 100%;
    padding-bottom: 32px;
    border-bottom: 1px solid #2100762e;
}
.mdm__card div {
    display: flex;
    gap: 20px;
}
.mdm__card svg {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    fill: var(--mainYellow);
}
.mdm__card h3 {
    place-self: center;
    color: var(--darkPurple);
    font-size: 18px;
    font-weight: 600;
}
.mdm__card p, .mdm__card span {
    font-size: 16px;
    margin: 0;
    margin-bottom: 12px;
}
.mdm .services__list {
    list-style: none;
    padding-left: 38px;
}
.mdm .services__list > li:before {
   content: "»";
   margin-right: 8px;
   color: var(--mainYellow);
}
@media (max-width: 1023.99px) {
    .mdm__blocks {
        gap: 28px;
        margin: 0;
    }
    .mdm__cardWrap {
        max-width: 100%;
        padding: 0;
    }
}
@media (max-width: 767.99px) {
    .mdm__imageBlock {
        flex-direction: column;
    }
}
</style>
