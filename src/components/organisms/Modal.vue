<template>
  <div class="ui modal" :class="{block: open}">
    <i class="close icon"></i>
    <div class="header">Edição</div>
    <div class="content">
      <Input :placeholder="text" class="inpt" v-model="valor" />
      <Input :placeholder="text" class="inpt" v-model="valor" />
      <Input :placeholder="text" class="inpt" v-model="valor" />
      <Input :placeholder="text" class="inpt" v-model="valor" />
    </div>
    <div class="actions">
      <button class="ui red basic button" @keypress="cancel">Cancelar</button>
      <button class="ui green basic button" @keypress="sendArgs">Salvar</button>
    </div>
  </div>
</template> 

<script>
import { Input } from "@/components/atoms";
export default {
  components: {
    Input,
  },
  props: {
    text: { Type: String },
  },
  data() {
    return {
      valor: "",
      open: false
    };
  },
  methods: {
    sendArgs(e) {
      if (e.key == "Enter") {
        this.$emit("onkeypress", this.valor);
        this.valor = "";
      }
    },
    cancel(){

    }
  },
};
</script>

<style lang="css" scoped>
.block{
    display: block;
}
.modal {
  border: 1px solid red;
  /* display: block; */
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */

  transform: translate(
    -50%,
    -50%
  ); /* This is a shorthand of
                                         translateX(-50%) and translateY(-50%) */
}
.inpt {
  margin: 0.5rem;
}
</style>