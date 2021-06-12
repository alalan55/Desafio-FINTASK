<template>
      <div class="extra content" >
      <span class="left floated like" @click="likeGif">
        <i class="like icon" ></i>
        Curtir
      </span>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                curtido: false
            }
        },
        methods:{
            likeGif(){
                this.$emit("like", this.curtido = true)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>