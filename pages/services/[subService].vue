<template>
  <article :class="['services', `service--${route.params.subService}`]">
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
      <component :is="textComponent" />
      <CommonTitleLine
        :title="pageData.buttonText"
        heading="h2"
        text="Fill out the form below to learn how we can help."
        class="services__line"
      />
    </section>
    <section class="services__wrap">
      <CommonForm
        v-if="!formSuccess"
        name="consult"
        :active="true"
        :fields="formFields"
        @submit="handleSubmit"
        class="services__form"
      />
      <span v-else v-html="formSuccess" class="services__text text--form"/>
    </section>
  </article>
</template>

<script setup>
import mdm from "~/components/service/mdm";
import data from "~/components/service/data";
import executive from "~/components/service/executive";

const formFields = ref([
  {
    name: "name",
    text: "Name",
    inputType: "input",
    type: "text",
    required: true,
  },
  {
    name: "mail",
    text: "Email",
    inputType: "input",
    type: "email",
    required: true,
  },
  {
    name: "company",
    text: "Company",
    inputType: "input",
    type: "text",
    required: false,
  },
  {
    name: "message",
    text: "Message",
    inputType: "textarea",
    type: "text",
    required: true,
  },
]);
const pages = ref({
  "executive-services": {
    title: "Executive Services",
    buttonText: "Get In Touch!",
    picture: "/images/executive-services.jpg",
    meta: {}
  },
  "data-management": {
    title: "AI and Enterprise Data Management Strategy Consulting",
    buttonText: "Drive Your Data Strategy Forward Now!",
    meta: {},
    picture: "/images/data-management.jpg",
  },
  mdm: {
    picture: "/images/mdm.jpg",
    title: "Master Data Management (MDM) & Entity Resolution",
    buttonText: "Learn how we can help you do MDM better!",
    meta: {}
  },
  // services: {
  //   title: "service title",
  //   text: "Our Services:",
  //   meta: {}
  // },
  // advisory: {
  //   title: "Advisory",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   meta: {}
  // },
  // "analysis-modeling": {
  //   title: "Business Analysis & Data Modeling",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   meta: {}
  // },
  // ai: {
  //   title: "AI and Data Observability",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   meta: {}
  // },
  // staffing: {
  //   title: "Screening & Assessment of Data Professionals",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   meta: {}
  // }
});
const formSuccess = ref("");

const route = useRoute();
const router = useRouter();

const pageData = computed(() => pages.value[route.params.subService]);
const textComponent = computed(() => {
  var componentMap = {
    "mdm": mdm,
    "data-management": data,
    "executive-services": executive,
  }
  return componentMap[route.params.subService];
});

const changeHeader = inject("changeHeader");

const handleSubmit = (form) => {
  const encode = (data) => {
    return Object.entries(data)
        .map(([k,v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
        .join("&");
  }
  var { name, mail, company, message } = form
  var data = {
    lead: route.params.subServices + " service page",
    name: name.value,
    mail: mail.value,
    company: company.value,
    message: message.value,
  }
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "consult", ...data })
  })
    .then(() => formSuccess.value = "Thank you for your interest. We'll be in touch soon.")
    .catch(({message}) => formSuccess.value = message || "Unexpected error.");
}

onBeforeMount(() => {
  if (!pageData.value) router.replace("/404");
});
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
    max-width: 1260px;
    place-self: center;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;
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
    font-weight: 600;
}
.services__highlight {
    color: var(--darkPurple);
    font-weight: 600;
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
.services__line {
    margin-top: 20px;
    background-color: var(--darkPurple);
    padding: 60px 0 !important;
}
.services__line .titleLine__title,
.services__line .titleLine__text {
    color: white;
}
.services__form {
    padding: 0 20px !important;
    max-width: 440px;
    place-self:center;
    margin-bottom: 60px;
}
.services__form label > span {
    color: var(--darkPurple);
}
.services__form button {
    background-color: var(--darkPurple);
    color: white;
}
.services__form input, .services__form textarea {
    border: 1px solid var(--darkPurple);
}
.text--form {
    width: fit-content;
    place-self: center;
    margin-bottom: 60px;
}
@media (hover:hover) {
    .services__inlineLink:hover {
        color: var(--mainYellow);
    }
    .services__button:hover {
        background-color: var(--darkPurple);
        color: white;
    }
    .services__form button:hover {
        background-color: var(--mainYellow);
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
    .services__wrap  {
        padding: 20px 60px;
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
