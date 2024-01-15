<template>
  <div class="main login">
    <h1>Login</h1>
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
  setError("some error");
}
</script>

<style>
.login {
    gap: 40px;
}
.login__form {
    max-width: 800px;
    place-self: center;
    gap: 40px;
}
</style>
