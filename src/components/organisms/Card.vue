<template>
    <div class="ui card">
  <div class="image">
    <img :src="imgUrl">
  </div>
  <div class="content">
    <a class="header">{{title}}</a>
    <div class="description">
      {{description}}
    </div>
  </div>
   <div class="extra content">
    <span class="left floated like">
      <i class="like icon"></i>
      Curtir
    </span>
  </div>
</div>
</template>

<script>
    export default {
        props:{
            imgUrl:{Type: String, required: true},
            title:{Type: String, required: true},
            description:{Type: String, required: true}
        }
    }
</script>

<style lang="css" scoped>

</style>