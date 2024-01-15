<template>
  <div class="main consult">
    <!-- <h1>Set up a Free Consultation</h1> -->
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
  // {
  //   id: "phone",
  //   text: "Phone",
  //   inputType: "input",
  //   type: "number",
  //   required: false,
  // },
  {
    id: "message",
    text: "Message",
    inputType: "textarea",
    type: "text",
    required: true,
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
    max-width: 70%;
}
.consult__form input {
    font-size: 22px;
}
.consult__form > .form__fieldset > label:last-of-type > textarea {
    min-height: 200px;
    font-size: 22px;
    resize: none;
}
</style>
