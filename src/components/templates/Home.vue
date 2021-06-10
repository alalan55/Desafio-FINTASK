<template>
  <div class="conteudo">
    <Header />
    <Container>
      <SearchBar text="Pesquisar.." class="search__bar" />
      <CardsContainer>
        <Card
          class="card"
          imgUrl="https://media2.giphy.com/media/LreojGy0iXK8e08iDK/giphy.gif?cid=99bfe7bcmlauco38plbeggg7jvypz4qm0v4rg7hffxjplodg&rid=giphy.gif&ct=g"
          title="Teste"
          description="Teste"
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
    CardsContainer,
    Card,
  },
  mounted() {
    this.key = process.env.VUE_APP_API_KEY;
  },
  data() {
    return {
      key: "",
    };
  },
};
</script>

<style lang="css" scoped>
.search__bar {
  margin: 2rem 0;
}
</style>