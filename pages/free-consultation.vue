<template>
  <div :class="['main', 'consult', {'consult--ok': ok}]">
    <section v-if="!ok" class="consult__formWrap">
      <h1>Get a free consultation today to learn more about how our team can help you to unlock the power of data.</h1>
      <!-- <Form
        v-if="!ok"
        name="consult"
        :active="true"
        :error="error && error.message"
        :fields="formFields"
        @submit="handleLogin"
        class="consult__form"
      /> -->
    </section>
    <h1 v-else>{{ok}}</h1>
  </div>
</template>

<script setup>
const error = ref(null);
const ok = ref(null);
const formFields = ref([
  {
    id: "name",
    text: "Name",
    inputType: "input",
    type: "text",
    required: true,
  },
  {
    id: "mail",
    text: "Email",
    inputType: "input",
    type: "email",
    required: true,
  },
  {
    id: "company",
    text: "Company",
    inputType: "input",
    type: "text",
    required: false,
  },
  {
    id: "message",
    text: "Message",
    inputType: "textarea",
    type: "text",
    required: true,
  },
]);

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

useHead({
  script: [{src: "https://smtpjs.com/v3/smtp.js"}]
})
const handleLogin = (form) => {
  var data = new FormData(form);
  fetch("/", {
     method: "POST",
     headers: { "Content-Type": "application/x-www-form-urlencoded" },
     body: new URLSearchParams(data).toString(),
   })
    .then(message => setOk())
    .catch(message => setError());
}
</script>

<style>
.consult__formWrap {
    max-width: 75%;
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
}
.consult--ok {
    flex-grow: 1;
    place-content: center;
}
.consult>h1 {
    color: white;
    font-size: 38px;
    place-self: center;
    font-weight: 300;
    transform: translateY(-100%);
}
.consult__formWrap > h1 {
    padding-top: 92px;
    opacity: 0.8;
    font-size: 24px;
    font-weight: 300;
    width: fit-content;
    color: white;
    line-height: 1.6;
    max-width: 500px;
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
</style>
