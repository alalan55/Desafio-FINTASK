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
a:hover,
a.router-link-active{
  border-bottom: 1.5px solid white;
}

</style>