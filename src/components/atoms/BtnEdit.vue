<template>
     <button class="ui green basic button" @keypress="click">Salvar</button>
</template>

<script>
    export default {
        data(){
            return{
                clidado: false,
            }
        },
        methods:{
            click(){
                this.$emit('click', this.clidado = true)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>