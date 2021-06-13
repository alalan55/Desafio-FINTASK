<template>
  <div class="ui icon input">
    <input type="text" :value="modelValue" :placeholder="text" @input='$emit("update:modelValue", $event.target.value)' />
  </div>
</template>

<script>
export default {
  props:{
    text:{Type: String, required: true},
    modelValue: String
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