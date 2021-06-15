<template>
  <div class="ui icon input">
    <input
      type="text"
      :value="modelValue"
      :placeholder="text"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    text: { Type: String },
    modelValue: String,
  },
  data() {
    return {
      valor: "",
    };
  },
};
</script>

<style lang="css" scoped>
.input {
  width: 100%;
}
</style>