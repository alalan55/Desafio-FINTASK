<template>
  <div class="ui icon input">
    <input type="text" :placeholder="text" @keypress="sendArgs" v-model="valor"  />
    <i class="search icon"></i>
  </div>
</template>

<script>
export default {
  props:{
    text:{Type: String, required: true}
  },
  data(){
    return{
      valor: ''
    }
  },
  methods:{
  sendArgs(e){
    if(e.key =="Enter"){
      this.$emit("onkeypress", this.valor)
      this.valor= ''
    }
  }
  }
};
</script>

<style lang="css" scoped>
.input{
  width: 100%;
}
</style>