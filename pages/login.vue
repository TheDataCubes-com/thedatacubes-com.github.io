<template>
  <div class="main login">
    <h1>Sign In</h1>
    <Form
      :error="error && error.message"
      :fields="formFields"
      @submit="handleLogin"
      submitText="Sign in"
      class="login__form"
    />
  </div>
</template>

<script setup>
const error = ref(null);

const formFields = ref([
  {
    id: "mail",
    text: "Email",
    inputType: "input",
    type: "mail",
    required: true,
  },
  {
    id: "password",
    text: "Password",
    inputType: "input",
    type: "password",
    required: true,
  },
]);

const setError = (message) => {
  if (error.value) clearTimeout(error.handler);
  var handler = setTimeout(() => error.value = null, 5000);
  error.value = { message: message, handler }
}

const handleLogin = (form) => {
  setError("The email address and/or password you specified are not correct");
}
</script>

<style>
.login {
    gap: 20px;
    width: fit-content;
}
.login > h1 {
    font-size: 32px;
    width: fit-content;
    color: white;
   place-self: center;
}
.login__form {
    max-width: 800px;
    width: 100vw;
    place-self: center;
    gap: 40px;
}
</style>
