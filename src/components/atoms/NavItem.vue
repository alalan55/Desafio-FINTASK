<template>
  <router-link :to="to" class="nav__link">{{text}}</router-link>
</template>

<script>
export default {
  props: {
    to: { Type: String, required: true },
    text: { Type: String, required: true },
  },
};
</script>

<style lang="css" scoped>
.nav__link {
  text-decoration: none;
  color: white;
}
</style>