<template>
  <article class="main services">
    <h1>{{pageData.title}}</h1>
    <section class="services__wrap">
      <div v-html="pageData.text" class="services__text"/>
      <img src="/images/t1.png" alt="">
    </section>
  </article>
</template>

<script setup>
const pages = ref({
  "executive-services": {
    title: "Executive Services - Education & Literacy",
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
</script>

<style>
.services {
    padding: 46px 100px;
    gap: 80px;
}
.services h1 {
    font-size: 32px;
    place-self: center;
}
.services * {
    color: white;
}
.services__wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.services__wrap img {
    max-width: 40%;
}
.services__text {
    max-width: 50%;
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
</style>
