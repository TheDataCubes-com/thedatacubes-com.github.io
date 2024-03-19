<template>
  <form
    data-netlify-honeypot="bot-field"
    :data-netlify="active"
    :name="name"
    @submit="handleSubmit"
    class="form__form"
  >
    <fieldset class="form__fieldset">
      <label
        v-for="({name, text, required, inputType, type }) in props.fields"
        :key="name"
        class="form__label"
      >
        <span :class="['form__labelText', {'input--required': required}]">{{text}}</span>
        <component
          :is="inputType"
          :name="name"
          :placeholder="text"
          :type="type"
          :required="required"
          class="form__input"
        />
      </label>
      <label class="form__label disclaimer">
        <span class="form__labelText">
          By clicking submit below, you consent to allow TheDataCubes to store and process the personal information submitted above to provide you the content requested.
        </span>
      </label>
    </fieldset>
    <div id="captcha" :class="['form__captcha', {'captcha--error': captchaError}]" />
    <CommonDynamicButton
      id="button"
      type="submit"
      :text="props.submitText"
      class="form__button"
    />
    <p v-if="props.error" v-html="props.error" class="form__errors"/>
  </form>
</template>

<script setup>
const emit = defineEmits(["submit"]);
const props = defineProps({
  fields: { type: Array, default: [] },
  error: { type: String, default: "" },
  submitText: { type: String, default: "Submit" },
  name: { type: String, default: "" },
  active: { type: Boolean, default: false },
});

const captchaError = ref(false);
const errorHandler = ref(null);

const useButton = (button) => {
  var className = "button--clicked";
  button.classList.add(className);
  setTimeout(() => button.classList.remove(className), 70);
};
const triggerCaptchaError = () => {
  captchaError.value = true;
  if (errorHandler.value) clearTimeout(errorHandler.value);
  errorHandler.value = setTimeout(() => {
    captchaError.value = false;
    errorHandler.value = null;
  }, 5000);
};
const checkCaptcha = async () => {
  var passed = Boolean(await grecaptcha.getResponse().length);
  if (!passed) triggerCaptchaError();
  return passed;
};
const handleSubmit = async (event) => {
  event.preventDefault();
  return console.log(await grecaptcha.getResponse())
  var { target } = event;
  useButton(target.button);
  if (!await checkCaptcha()) return;
  emit("submit", target);
};

onMounted(() =>  grecaptcha.render('captcha', {
  sitekey: '6Lded54pAAAAADk_3jrurXQ_iUGDUgBnS1_UKEYl',
  // sitekey: '6LeJSZYpAAAAABDXpQXjcgvkOZJDot7RmcHyhxRX',
}));
</script>

<style>
.form__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 0 20px;
}
.form__label {
    width: 100%;
}
.form__input {
    resize: vertical;
    color: black;
    border: none;
    padding: 12px 20px;
    width: 100%;
    border-radius: 12px;
    font-size: 14px;
    outline-color: var(--mainPurple);
}
.form__labelText {
    color: white;
    display: inline-block;
    margin-bottom: 4px;
    padding-left: 20px;
    transition: opacity 0.1s ease;
    font-size: 14px;
}
.form__button {
    background-color: white;
    width: 200px;
    place-self: center;
    font-size: 14px;
    padding: 12px 20px;
}
.form__errors {
    color: red;
    font-size: 16px;
}
.button--clicked {
    background-color: var(--mainYellow) !important;
}
.input--required:after {
    content: "*";
    color: red;
}
.form__fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
.form__success {
    color: white;
}
.form__err__link {
    font-size: 16px;
    color: white;
    transition: opacity 0.3s ease;
}
.form__captcha {
    margin: 20px 0;
    width: fit-content;
    place-self: center;
    position: relative;
}
.captcha--error:after {
    content: "Please confirm the fields and submit it again";
    position: absolute;
    bottom: 4px;
    left: 4px;
    color: red;
    font-size: 12px;
}
.disclaimer {
    display: flex;
    gap: 8px;
    cursor: pointer;
    place-items: flex-start;
}
.disclaimer .form__labelText {
    display: inline;
    padding: 0;
}
@media (hover:hover) {
    .form__button:hover {
        background-color: white;
        color: black;
    }
    .form__err__link:hover {
        opacity: 0.7;
    }
}
@media (max-width: 767.99px) {
    .form__labelText {
        padding-left: 14px;
    }
    .form__input, .form__button {
        padding: 8px 14px;
    }
}
</style>
