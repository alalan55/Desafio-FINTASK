<template>
    <div>
         <button class="ui yellow basic button" @click="click">Editar</button>
         <button class="ui red basic button" @click="remove">Remover</button>

    </div>
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
                this.$emit('clicked', this.clidado = true)
            },
            remove(){
                this.$emit('removed',this.clidado = true)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>