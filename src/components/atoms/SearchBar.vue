<template>
  <div class="ui icon input">
    <input type="text" :placeholder="text" />
    <i class="search icon"></i>
  </div>
</template>

<script>
export default {
  props:{
    text:{Type: String, required: true}
  }
};
</script>

<style lang="css" scoped>
.input{
  width: 100%;
}
</style>