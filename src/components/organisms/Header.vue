<template>
    <header class="header">
        <Navbar/>
    </header>
</template>

<script>
import {Navbar} from '@/components/molecules'
    export default {
        components:{
            Navbar
        }
    }
</script>

<style lang="css" scoped>
.header{
    height: 70px;
    background: black;
}
</style>