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
        <Card
          v-for="gif in dados"
          :key="gif.id"
          class="card"
          :imgUrl="gif.images.downsized.url"
          :title="gif.title"
        >
          <Like @like="likeGif" @click="gifValue(gif)" />
          <Accordion
            maisInfo="Mais infos.."
            :title="gif.title"
            :username="gif?.username"
            :avtUrl="gif?.user?.avatar_url"
            :description="gif?.user?.description"
          />
        </Card>
      </CardsContainer>
    </Container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Container, CardsContainer } from "@/components/bosons";
import { Header, Card } from "@/components/organisms";
import { SearchBar } from "@/components/atoms";
import { Like, Accordion } from "@/components/molecules";

export default {
  components: {
    SearchBar,
    Container,
    Header,
    Card,
    Like,
    Accordion,
    CardsContainer,
  },
  data() {
    return {
      gifObj: {},
    };
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
    ...mapActions([
      "getGifs",
      "addMoreGifs",
      "addGifSearch",
      "moreGifsRandom",
      "addGifLike",
    ]),
    async start() {
      await this.$store.dispatch("getGifs");
    },
    async loadMoreGifs() {
      await this.moreGifsRandom();
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

        if (res.data[0] != undefined) {
          this.addGifSearch(res.data[0]);
        } //fazer tratamento para aparecer mensagem caso o cara seja inválido
      } catch (error) {
        console.error("Erro louco aqui", error);
      }
    },
    likeGif(e) {
      //true
      console.log('likeGif', e)
    },
    gifValue(e) {
      this.addGifLike(e)
      console.log('gifValue', e)
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
/* .card__container .card::v-deep img {
  border: 1px solid red;
}   V:DEEP ESTA DIFERENTE, FERICIAR SE REALMENTE VAI SER NECESSÁRIO PARA IMPLEMENTAR*/
</style>