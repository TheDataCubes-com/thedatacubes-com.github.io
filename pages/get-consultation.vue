<template>
  <div class="main consult">
    <h1>Set up a Free Consultation</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Form
      :error="error && error.message"
      :fields="formFields"
      @submit="handleLogin"
      class="consult__form"
    />
  </div>
</template>

<script setup>
const error = ref(null);
const formFields = ref([
  {
    id: "firtName",
    text: "First name",
    inputType: "input",
    type: "text",
    required: true,
  },
  {
    id: "lastName",
    text: "Last name",
    inputType: "input",
    type: "text",
    required: true,
  },
  {
    id: "mail",
    text: "Email",
    inputType: "input",
    type: "mail",
    required: true,
  },
  {
    id: "message",
    text: "Message",
    inputType: "textarea",
    type: "text",
    required: false,
  },
]);

const setError = (message) => {
  if (error.value) clearTimeout(err.handler);
  var handler = setTimeout(() => error.value = null, 5000);
  error.value = { message: message, handler }
}

const handleLogin = (form) => {
  setError("some error");
}
</script>

<style>
.consult {
    gap: 20px;
}
.consult > p {
    max-width: 100%;
    margin: 0;
}
.consult__form {
    place-self: center;
    max-width: 860px;
}
.consult__form input {
    border: 1px solid;
    font-size: 24px;
}
.consult__form > .form__fieldset {
    display: grid;
    row-gap: 12px;
    column-gap: 20px;
    grid-template-areas:
       "input text"
       "input text"
       "input text"
}
consult__form > .form__fieldset > label {
    grid-area: input;
}
.consult__form > .form__fieldset > label:last-of-type {
    grid-area: text;
    display: flex;
    flex-direction: column;
}
.consult__form > .form__fieldset > label:last-of-type > textarea {
    flex-grow: 1;
    resize: none;
}
</style>
