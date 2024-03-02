<template>
  <div :class="['consult', {'consult--ok': ok}]">
    <div class="consult__inner">
      <h1 v-if="ok || title" v-html="ok || title" class="consult__title"/>
      <section v-if="!ok" class="consult__formWrap">
        <p v-html="text" class="consult__formText"/>
        <CommonForm
          v-if="!ok"
          name="consult"
          :active="true"
          :error="error && error.message"
          :fields="formFields"
          @submit="handleLogin"
          class="consult__form"
        />
      </section>
      <p v-if="!ok && subText" class="consult__formText text--sub" v-html="subText"/>
    </div>
  </div>
</template>

<script setup>
onBeforeMount(() => {
  var r = useRouter();
  r.replace("/mdm-partners");
})
const route = useRoute();

const error = ref(null);
const ok = ref(null);
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
const leadTitles = ref({
  collaborative: "Become a Collaborative Partner"
});
const leadText = ref({
  fallback: "Get a free consultation today to learn more about how our team can help you to unlock the power of data.",
  collaborative: "We're on the lookout for partnerships with visionary leaders, innovative companies, and passionate advocates in the realms of data and AI.<br/><br/>Please provide your name, email, and a brief message about your vision for our partnership."
});
const leadSubs = ref({
  collaborative: "At TheDataCubes, we believe in partnering with those who are at the forefront of data innovation, sharing insights and spreading the word about transformative data solutions for business challenges.<br/><br/>If you're committed to driving the future of data and AI,  have insights to share, or want to explore collaborative opportunities, we'd love to hear from you. Whether you're a blogger, podcaster, data community leader, or service provider, your insights and contributions can help organizations navigate evolving landscape of AI and data, unlocking new opportunities and solutions.<br/><br/>"
})

const title = computed(() =>  leadTitles.value[route.query.lead]);
const text = computed(() => {
  var newText = leadText.value[route.query.lead] || leadText.value.fallback
  return newText;
});
const subText = computed(() => leadSubs.value[route.query.lead])

const setError = (message) => {
  var errorMessage = "An unexpected error happened.<br/>Please try again later or consider contact us directly via <a class='form__err__link' href='mailto:info@thedatacubes.com'>info@thedatacubes.com</a> mail box.";
  if (error.value) clearTimeout(error.value.handler);
  var handler = setTimeout(() => error.value = null, 5000);
  error.value = { message: message || errorMessage, handler }
}
const setOk = (message) => {
  var successMessage = "Thank you for your interest. We'll be in touch soon.";
  ok.value = message || successMessage;
}
const encode = (data) => {
    return Object.entries(data)
        .map(([k,v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
        .join("&");
  }
const handleLogin = (form) => {
  var { name, mail, company, message } = form
  var data = {
    lead: route.query.lead || "default",
    name: name.value,
    mail: mail.value,
    company: company.value,
    message: message.value,
  }
  fetch("/", {
     method: "POST",
     headers: { "Content-Type": "application/x-www-form-urlencoded" },
     body: encode({"form-name": "consult", ...data })
   })
    .then(message => setOk())
    .catch(message => setError());
}
</script>

<style>
.consult {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 80px 60px;
}
.consult__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    gap: 40px;
    place-self: center;
}
.consult__formWrap {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
}
.consult--ok {
    flex-grow: 1;
    place-content: center;
}
.consult__title, .consult__formText {
    color: white;
    opacity: 0.8;
    font-weight: 300;
    line-height: 1.6;
}
.consult__title {
    place-self: center;
    font-size: 34px;
}
.consult__formText {
    font-size: 18px;
    place-self: flex-start;
    padding-top: 42px;
    width: fit-content;
}
.text--sub {
    padding: 0;
}
.consult__formWrap > p {
    max-width: 100%;
    margin: 0;
}
.consult__form {
    place-self: center;
    max-width: 440px;
}
.consult__form > .form__fieldset > label:last-of-type > textarea {
    min-height: 160px;
    resize: none;
}
@media (max-width: 1023.99px) {
   .consult__title, .consult__formText  {
        padding: 0;
        place-self: center;
        padding: 0 20px;
   }
    .consult__formWrap {
        max-width: 100%;
        gap: 40px;
    }
}
@media (max-width: 767.99px) {
    .consult__inner {
        gap: 20px;
    }
    .consult__formWrap {
        gap: 12px;
    }
    .consult__form > .form__fieldset > label:last-of-type > textarea {
        min-height: 160px;
    }
    .consult__title, .consult__formText  {
         font-size: 24px;
     }
     .consult__form {
         gap: 0px;
     }
     .consult {
       padding: 40px 0;
     }
     .consult__title, .consult__formText {
         font-size: 18px;
         padding: 0px;
     }
     .form__form {
         padding: 0;
     }
     .consult__formWrap {
         padding: 0px 20px;
         gap: 8px;
     }
     .text--sub, .consult__title {
         padding: 0 20px;
     }
}
</style>
