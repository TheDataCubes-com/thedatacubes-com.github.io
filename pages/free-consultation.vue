<template>
  <div class="main consult">
    <h1 v-if="!ok">Get a free consultation today to learn more about how our team can help you to unlock the power of data.</h1>
    <h1 v-else>{{ok}}</h1>
    <Form
      v-if="!ok"
      :error="error && error.message"
      :fields="formFields"
      @submit="handleLogin"
      class="consult__form"
    />
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
  var token = "cb3d9ad6-d54c-43b8-8687-f47d5272fc91";
  Email.send({
    SecureToken: token,
    From: 'isorrowno@gmail.com',
    To: "info@thedatacubes.com",
    Subject: "This is the subject",
    Body: `name: ${form.name.value}\n\nmail: ${form.mail.value}\n\nmessage: ${form.message.value}`
  })
    .then(message => setOk())
    .catch(message => setError());
}
</script>

<style>
.consult {
    gap: 20px;
    flex-direction: row;
    display: grid;
    grid-template-columns: minmax(0px, 410px) minmax(0, 440px);
    grid-template-areas:
    ". form"
    "text form"
    ". form"
    ". form"
    ". form";
    justify-content: space-evenly;
}
.consult > h1 {
    opacity: 0.8;
    font-size: 24px;
    font-weight: 300;
    width: fit-content;
    color: white;
    grid-area: text;
    line-height: 1.6;
}
.consult > p {
    max-width: 100%;
    margin: 0;
}
.consult__form {
    place-self: center;
    grid-area: form;
    max-width: 440px;
}
.consult__form > .form__fieldset > label:last-of-type > textarea {
    min-height: 160px;
    resize: none;
}
</style>
