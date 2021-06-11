<template>
  <div class="conteudo">
    <Header />
    <Container>
      <SearchBar text="Pesquisar.." class="search__bar" />
      <CardsContainer class="card__container">
        <!-- <Card
          class="card"
          imgUrl="https://media2.giphy.com/media/LreojGy0iXK8e08iDK/giphy.gif?cid=99bfe7bcmlauco38plbeggg7jvypz4qm0v4rg7hffxjplodg&rid=giphy.gif&ct=g"
          title="Teste"
          description="Teste"
        /> -->

         <Card 
          v-for="gif in gifs"
          :key="gif.id"
          class="card"
          :imgUrl=gif.images.downsized.url
          :title=gif.title
        />
      </CardsContainer>
    </Container>
  </div>
</template>

<script>
import { Container, CardsContainer } from "@/components/bosons";
import { Header, Card } from "@/components/organisms";
import { SearchBar } from "@/components/atoms";

export default {
  components: {
    SearchBar,
    Container,
    Header,
    Card,
    CardsContainer,
    
  },
  data(){
    return{
     gifs:[]
    }
  },
  created(){
      this.start();
  },
  methods:{
   async start(){
     await this.$store.dispatch('getGifs')
     let response = this.$store.getters.$allGifs 
     this.gifs = response.data
   }
  }

};
</script>

<style lang="css" scoped>
.search__bar {
  margin: 2rem 0;
}
.card__container{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.card__container .card{
  flex: 1 0 300px;
  margin: .3rem;
  /* border: 1px solid red; */
  /* height: 500px; */
  
}
.card__container .card::v-deep img{
  border: 1px solid red;
}
</style>