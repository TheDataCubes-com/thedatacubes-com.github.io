<template>
  <form @submit="handleSubmit" class="form__form">
    <p v-if="props.error" class="form__errors">{{props.error}}</p>
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
  </form>
</template>

<script setup>
const emit = defineEmits(["submit"]);
const props = defineProps({
  fields: { type: Array, default: [] },
  error: { type: String, default: "" },
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
    padding: 40px 60px;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.6);
    border-radius: 20px;
}
.form__label {
    width: 100%;
}
.form__input {
    color: black;
    border: none;
    padding: 20px;
    width: 100%;
    border-radius: 20px;
    outline-color: var(--mainPurple);
}
.form__labelText {
    display: inline-block;
    margin-bottom: 4px;
    padding-left: 20px;
    color: white;
    transition: opacity 0.1s ease;
}
.form__button {
    background-color: white;
    width: 200px;
    place-self: center;
}
.form__errors {
    border: 1px solid var(--errorRed);
    color: var(--errorRed);
    border-radius: 12px;
    padding: 12px 20px;
    background-color: #ff626259;
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
@media (hover:hover) {
    .form__button:hover {
        background-color: white;
        color: black;
    }
}
</style>
