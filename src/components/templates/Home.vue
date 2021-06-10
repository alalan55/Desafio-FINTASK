<template>
<div class="conteudo">
      <Header/>
    <Container>
      <SearchBar text="Pesquisar.." class="search__bar"/>
    </Container>

</div>

</template>

<script>
import {Container} from '@/components/bosons'
import {Header} from '@/components/organisms'
import{SearchBar} from '@/components/atoms'

    export default {
        components:{
            SearchBar,
            Container,
            Header
        }
    }
</script>

<style lang="css" scoped>
.search__bar{
    margin: 2rem 0;
}

</style>