<template>
  <div class="ui modal">
    <i class="close icon"></i>
    <i class="close icon" @click="$emit('cancelar', false)"></i>
    <div class="header">Edição</div>

    <slot />

    <div class="actions">
      <button class="ui red basic button" @click="$emit('cancelar', false)">
        Cancelar
      </button>
      <button class="ui green basic button" @click="$emit('salvar', true)">
        Salvar
      </button>
    </div>
  </div>
</template> 

<script>
export default {
  emits: ["cancelar", "salvar"],
};
</script>

<style lang="css" scoped>
.modal {
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */

  transform: translate(
    -50%,
    -50%
  ); 
}
.inpt {
  margin: 0.5rem;
}
</style>