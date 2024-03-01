<template>
  <article class="services">
    <div
      v-if="pageData.picture"
      :style="`background-image: url(${pageData.picture});`"
      class="services__picture"
    />
    <CommonTitleLine
      :title="pageData.title"
      :padBottom="40"
      :noBg="true"
    />
    <section class="services__wrap">
      <div v-html="pageData.text" class="services__text"/>
      <CommonDynamicButton
        link="/contact-form"
        :text="pageData.buttonText"
        :isIcon="true"
        class="services__button"
      />
    </section>
  </article>
</template>

<script setup>
const pages = ref({
  "executive-services": {
    title: "Executive Services",
    buttonText: "GET IN TOUCH",
    picture: "/images/executive-services.jpg",
    text: [
      "<p>Keeping pace with technological advancements can be challenging for data professionals, let alone for those steering the business. Our suite of personalized Executive Services is designed for high-value data decisioning and AI strategy. It aims to demystify emerging technologies such as AI, MDM, data science, machine learning, and analytics, providing insights into how these can be leveraged to enhance value within your organization.</p>",
      "<ul class='services__list'>",
      "<li>Fractional Chief Data Officer (CDO)</li>",
      "<li>Advisory & Mentorship</li>",
      "<li>AI & Data Strategy</li>",
      "<li>Executive Coaching & Process Design for decision-making based on trustworthy facts</li>",
      "<li>Assessment & Screening of Data Professionals</li>",
      "</ul>"
      ].join(""),
    meta: {}
  },
  "data-management": {
    title: "AI and Enterprise Data Management Strategy Consulting",
    text: [
        "<h2 class='services__subTitle'>The journey from data and AI to business decisions doesn't begin with the technology itself but with recognizing data and analytics as the new sources of value and key drivers of competitive advantage in today’s economy</h2>",
        "<p><span class='services__highlight hl--block'>Unfortunately, organizations often struggle to leverage these assets effectively</span>A common and costly problem faced by these companies is that their information is poorly organized and fragmented across multiple repositories, without a strategy or tools for integration. This lack of information management can be very costly for companies failing to address the issue.</p>",
        "<p><span class='services__highlight hl--block'>We help clients get more out of their data</span>We use a proven methodology that assists both small and large companies in transforming data chaos into profitable insights. By organizing siloed data into actionable intelligence, we enable your Business team to access and easily work with the data.<br/><br/>Combining our experience in both technical and leadership roles, we have developed and implemented practical, data-driven solutions across various business challenges. Our business-centric approach ensures that your data initiative delivers clear value. Whether you’re just getting started, expanding, or realigning your data journey.</p>",
        "<h2 class='services__subTitle'>What We Do</h2>",
        "<ul class='services__list'>",
        "<li><span class='services__highlight'>Knowledge gathering, defining business requirements and current state assessment</span><br/><span class='services__listPar'>Aligning the data environment with the business’s requirements is critical to a successful initiative. The best tools or sophisticated designs won’t salvage a data program that fails to focus on the business. The business’s requirements impact almost every decision made during the course of the implementation.<br/><br/>We use a proven, business-focused methodology to identify an enterprise's data needs.</span><br/></li>",
        "<li><span class='services__highlight'>Business modeling, defining business Initiatives and desired outcomes. Defining business decisions with supporting KPIs and metrics which will be used to measure effectiveness of the outcomes and business decisions</span><br/><span class='services__listPar'>Our requirements deliverable typically covers the following topics: critical business and analytic requirements, feasibility of existing systems and data to support the capabilities required, preliminary data architecture with common business dimensions, initial project success criteria, and key issues/risks with tactical and strategic recommendations.</span><br/></li>",
        "<li><span class='services__highlight'>Use cases development<br/><br/></span></li>",
        "<li><span class='services__highlight'>Target state definition and Gap analysis</span><br/><span class='services__listPar'>This deliverable may include development of pilots and prototypes.</span><br/></li>",
        "<li><span class='services__highlight'>Technology selection</span><br/><span class='services__listPar'>With numerous vendors in the market, selecting the right offering for your business can be daunting. Often, vendors may promise more than they are able to deliver. To address this, and with the current and target states in mind, we conduct a vendor fit analysis.<br/><br/>We collaborate closely with our clients during the vendor selection process, providing objective advice to those preparing to invest in a data management platform. Our goal is to ensure that the chosen platform meets their specific needs and fits within their budget.</span><br/></li>",
        "<li><span class='services__highlight'>Roadmap Development<br/><br/></span></li>",
        "<li><span class='services__highlight'>Change Management</span><br/><span class='services__listPar'>We proactively transfer knowledge and skills leading to client self-sufficiency during every project.</span><br/></li>",
        "<li><span class='services__highlight'>Utilizing AI and Machine Learning for predictive insights</span></li>",
        "</ul>",
        "<p><span class='services__highlight hl--block'>Data Quality (DQ) and Performance</span>Additionally, our team specializes in developing automated database architectures and systems that ensure great DQ and excellent performance. We have developed frameworks that can be implemented into your systems for automated DQ and reporting.<br/><br/><a href='/contact-form' target='_blank' class='services__inlineLink'>Reach out to learn about additional services</a> we can offer to help you maximize your data ROI. We're eager to hear from you!</p>",
      ].join(""),
    buttonText: "Drive Your Data Strategy Forward Now",
    meta: {},
    picture: "/images/data-management.jpg",
  },
  mdm: {
    picture: "/images/mdm.jpg",
    title: "Master Data Management (MDM) & Entity Resolution",
    text: [
      "<div class='services__imageBlock'>",
      "<p><span class='services__highlight hl--block'>We help you get the most out of your MDM decisions</span>Our team of experienced domain experts, with years of hands-on experience in the Financial Services industry, excels in strategic consulting and delivering customized Master Data Management solutions. Driven to empower and enable clients, we effectively solve complex technical and business challenges by introducing cutting-edge innovations, new approaches, and fresh perspectives.<br/><br/>Our standout ability to translate complex business problems into successful technical solutions has significantly contributed to the success of our projects in the Financial Services sector.</p>",
      "<div class='services__imageWrap'>",
      "<img src='/images/diagram.png' alt='services--textImage'/>",
      "</div>",
      "</div>",
      `<p><span class='services__highlight hl--block'>We're going to accelerate your success on your journey to Customer&nbsp360</span>We're vendor independent “3rd party independent advisory consultancy with the start to finish implementation expertise in the multiple MDM/ER products. We offer unbiased evaluation of the customer’s use cases, MDM product concerns, solution gaps.</p>`,
      "<h2 class='services__subTitle'>What We Do</h2>",
      ].join(""),
    buttonText: "Learn more about how we can help you MDM better",
    meta: {}
  },
  services: {
    title: "service title",
    text: "Our Services:",
    meta: {}
  },
  advisory: {
    title: "Advisory",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    meta: {}
  },
  "analysis-modeling": {
    title: "Business Analysis & Data Modeling",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    meta: {}
  },
  ai: {
    title: "AI and Data Observability",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    meta: {}
  },
  staffing: {
    title: "Screening & Assessment of Data Professionals",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    meta: {}
  }
});

const route = useRoute();

const pageData = computed(() => pages.value[route.params.subService]);

const changeHeader = inject("changeHeader");

onMounted(() => setTimeout(() => changeHeader(true), 100));
</script>

<style>
.services__picture {
    width: 100%;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 10%;
}
.services {
    flex-grow: 1;
    padding: 0;
    display: flex;
    flex-direction: column;
}
.services__wrap {
    max-width: 960px;
    place-self: center;
    width: 100%;
    padding: 20px 60px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 60px;
}
.services__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.services__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: disc;
    padding-left: 54px;
}
.services__button {
    font-weight: 400;
    gap: 0;
    background-color: var(--mainYellow);
    place-self: center;
    font-size: 14px;
    padding: 4px 16px;
}
.services__button > svg {
    fill: none;
}
.services__button > svg > path{
    stroke: var(--darkPurple);
}
.services__subTitle {
    place-self: flex-start;
    font-size: 24px;
    color: var(--darkPurple);
}
.services__highlight {
    color: var(--darkPurple);
    font-weight: 500;
    font-size: 20px;
}
.hl--block {
    display: block;
    margin-bottom: 8px;
}
.services__listPar {
    display: block;
    padding-left: 24px;
    margin-top: 8px;
}
.services__inlineLink {
    color: var(--darkPurple);
    text-decoration: underline;
    transition: color 0.3s ease;
}
.services__imageBlock {
    display: flex;
    place-items: center;
}
.services__imageWrap > img {
    max-width: 280px;
}
@media (hover:hover) {
    .services__inlineLink:hover {
        color: var(--mainYellow);
    }
    .services__button:hover {
        background-color: var(--darkPurple);
        color: white;
    }
}
@media (max-width: 1659.99px) {
    .services__picture {
        height: 400px;
    }
}
@media (max-width: 1439.99px) {
    .services__picture {
        height: 300px;
    }
}
@media (max-width: 1023.99px) {
    .services__picture {
        height: 240px;
    }
    .services__subTitle {
        font-size: 20px;
    }
}
@media (max-width: 767.99px) {
    .services__picture {
        height: 200px;
    }
    .services__subTitle {
        font-size: 18px;
    }
    .services__wrap {
        padding: 0px 40px;
    }
}
@media (max-width: 574.99px) {
    .services__wrap {
        padding: 0 20px;
    }
    .services__picture {
        height: 160px;
    }
}
</style>
