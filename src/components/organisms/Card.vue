<template>
  <div class="ui card">
    <div class="image">
      <img :src="imgUrl" lazyload="lazy" />
    </div>
    <div class="content">
      <a class="header">{{ title }}</a>
      <div class="description">
        {{ description }}
      </div>
    </div>
  <slot/>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: { Type: String, required: true },
    title: { Type: String, required: true },
    description: { Type: String },
  },
  data(){
    return{
      curtido:false
    }
  },
  metods: {
 
  },
};
</script>

<style lang="css" scoped>

.image {
  overflow: hidden;
}
.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
@media screen and (max-width: 640px) {
  .card {
    height: auto;
  }
}
</style>