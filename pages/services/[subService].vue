<template>
  <article class="services">
    <div v-if="pageData.picture" class="t"></div>
    <CommonTitleLine
      :title="pageData.title"
      :centered="true"
      :padBottom="40"
      :noBg="true"
      :size="42"
    />
    <section class="services__wrap">
      <div class="servicess__content">
        <div v-html="pageData.text" class="services__text"/>
        <CommonDynamicButton
          link="/free-consultation"
          :text="pageData.buttonText"
          :isIcon="true"
          class="services__button"
        />
      </div>
      <img v-if="pageData.textImage" :src="pageData.textImage" alt="">
    </section>
  </article>
</template>

<script setup>
const pages = ref({
  "executive-services": {
    title: "Executive Services",
    buttonText: "GET IN TOUCH",
    textImage: "/images/t1.png",
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
    text: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>",
    buttonText: "Drive Your Data Strategy Forward Now",
    meta: {},
    picture: true
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
  mdm: {
    title: "Master Data Management & Entity Resolution",
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
const textWidth = computed(() => pageData.value.textImage ? "66%" : "100%");

const changeHeader = inject("changeHeader");

onMounted(() => setTimeout(() => changeHeader(true), 100));
</script>

<style>
.t {
    width: 100%;
    height: 500px;
    background-image: url("/images/x.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 10%;
}
.services {
    flex-grow: 1;
    background-color: var(--softPink);
    padding: 0;
    display: flex;
    flex-direction: column;
}
.services__wrap {
    max-width: var(--maxContentWidth);
    place-self: center;
    width: 100%;
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
}
.servicess__content {
    max-width: v-bind(textWidth);
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.services__wrap img {
    max-width: 30%;
    height: 270px;
    place-self: center;
}
.services__text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.services__list {
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: disc inside;
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
@media (hover:hover) {
    .services__button:hover {
        background-color: var(--darkPurple);
        color: white;
    }
}
</style>
