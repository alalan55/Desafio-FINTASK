<template>
  <span class="logo">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: { Type: String, required: true },
  },
};
</script>

<style lang="css" scoped>
.logo {
  font-weight: 700;
  text-transform: uppercase;
}
</style>