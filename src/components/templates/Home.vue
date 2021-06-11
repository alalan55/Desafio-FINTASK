<template>
  <div class="conteudo">
    <Header />
    <Container>
      <SearchBar
        text="Pesquisar.."
        class="search__bar"
        @onkeypress="valorNavbar"
      />
      <CardsContainer class="card__container">
        <!-- <Card
          class="card"
          imgUrl="https://media2.giphy.com/media/LreojGy0iXK8e08iDK/giphy.gif?cid=99bfe7bcmlauco38plbeggg7jvypz4qm0v4rg7hffxjplodg&rid=giphy.gif&ct=g"
          title="Teste"
          description="Teste"
        /> -->

        <Card
          v-for="gif in dados"
          :key="gif.id"
          class="card"
          :imgUrl="gif.images.downsized.url"
          :title="gif.title"
        />
      </CardsContainer>
    </Container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  computed: {
    dados() {
      return this.$store.getters.$allGifs;
    },
  },
  created() {
    this.start();
  },
  methods: {
    ...mapActions(["getGifs", "addMoreGifs"]),
    async start() {
      await this.$store.dispatch("getGifs");
    },
    async loadMoreGifs() {
      let newGifs = await this.getGifs();
      this.addMoreGifs(newGifs);
    },
    async handleScrol() {
      let element = document.querySelector(".card__container");

      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        await this.loadMoreGifs();
      }
    },
    valorNavbar(e) {
      this.searchGif(e);
    },
    async searchGif(val) {
      try {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.VUE_APP_API_KEY}&limit=1&q=${val}`;
        const req = await fetch(url);
        const res = await req.json();
        
        this.addMoreGifs(res.data[0])
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrol);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScrol);
  },
};
</script>

<style lang="css" scoped>
.search__bar {
  margin: 2rem 0;
}
.card__container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.card__container .card {
  flex: 1 0 300px;
  margin: 0.3rem;
}
.card__container .card::v-deep img {
  border: 1px solid red;
}
</style>