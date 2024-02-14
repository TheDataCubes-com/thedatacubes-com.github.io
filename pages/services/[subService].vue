<template>
  <article class="services">
    <CommonTitleLine
      :title="pageData.title"
      :centered="true"
      :padBottom="40"
      :noBg="true"
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
      <img src="/images/t1.png" alt="">
    </section>
  </article>
</template>

<script setup>
const pages = ref({
  "executive-services": {
    title: "Executive Services - Education & Literacy",
    buttonText: "Get in Touch",
    text: [
      "<p>Keeping pace with technological advancements can be challenging for data professionals, let alone for those steering the business. Our suite of executive services is designed to clarify emerging technologies like AI, MDM, data science, machine learning, and analytics for executives. We show how these innovations can enhance your organization through:</p>",
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
  "data-management": {
    title: "Enterprise Data Management & Analytics Strategy",
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

const changeHeader = inject("changeHeader");

onMounted(() => setTimeout(() => changeHeader(true), 100));
</script>

<style>
.services {
    flex-grow: 1;
    background-color: var(--softPink);
    padding: 0;
    display: flex;
    flex-direction: column;
}
.services__wrap {
    margin: auto 0;
    max-width: var(--maxContentWidth);
    place-self: center;
    width: 100%;
    padding: 40px 60px;
    display: flex;
    justify-content: space-between;
}
.servicess__content {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.services__wrap img {
    max-width: 40%;
    height: 360px;
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
    text-transform: uppercase;
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
