<template>
  <form v-if="!ok" @submit="handleSubmit" class="form__form">
    <fieldset class="form__fieldset">
      <label
        v-for="{id, text, required, inputType, type } in props.fields"
        :key="id"
        class="form__label"
      >
        <span :class="['form__labelText', {'input--required': required}]">{{text}}</span>
        <component
          :is="inputType"
          :id="id"
          :placeholder="text"
          :type="type"
          :required="required"
          class="form__input"
        />
      </label>
    </fieldset>
    <DynamicButton
      id="button"
      type="submit"
      :text="props.submitText"
      class="form__button"
    />
    <p v-if="props.error" v-html="props.error" class="form__errors"/>
  </form>
  <p v-else v-html="ok" class="form__success" />
</template>

<script setup>
const emit = defineEmits(["submit"]);
const props = defineProps({
  fields: { type: Array, default: [] },
  error: { type: String, default: "" },
  ok: { type: String, default: "" },
  submitText: { type: String, default: "Submit" }
});

const useButton = (button) => {
  var className = "button--clicked";
  button.classList.add(className);
  setTimeout(() => button.classList.remove(className), 70);
};
const handleSubmit = event => {
  event.preventDefault();
  var { target } = event;
  useButton(target.button);
  emit("submit", target);
}
</script>

<style>
.form__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}
.form__label {
    width: 100%;
}
.form__input {
    color: black;
    border: none;
    padding: 12px 20px;
    width: 100%;
    border-radius: 12px;
    font-size: 14px;
    outline-color: var(--mainPurple);
}
.form__labelText {
    display: inline-block;
    margin-bottom: 4px;
    padding-left: 20px;
    color: white;
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
    color: var(--errorRed);
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
@media (hover:hover) {
    .form__button:hover {
        background-color: white;
        color: black;
    }
}
</style>
