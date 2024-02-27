<template>
  <div class="login">
    <h1>Sign in with your existing account.</h1>
    <CommonForm
      name="login"
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
    type: "email",
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
  if (error.value) clearTimeout(error.value.handler);
  var handler = setTimeout(() => error.value = null, 5000);
  error.value = { message: message, handler }
}

const handleLogin = (form) => {
  setError("The email address and/or password you specified are not correct");
}
</script>

<style>
.login {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    padding: 80px 60px;
}
.login > h1 {
    opacity: 0.7;
    width: fit-content;
    place-self: center;
    color: white;
    font-weight: 300;
    font-size: 28px;
}
.login__form {
    max-width: 440px;
    width: 100vw;
    place-self: center;
}
@media (max-width: 1279.99px) {
  .login {
    padding: 60px;
  }
}
@media (max-width: 767.99px) {
  .login {
    padding: 40px;
  }
    .login > h1 {
        font-size: 24px;
    }
    .login__form {
        gap: 0px;
    }
}
@media (max-width: 574.99px) {
  .login {
    padding: 40px 20px;
  }
}
</style>
