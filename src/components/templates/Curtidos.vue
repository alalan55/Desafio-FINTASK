<template>
  <div class="conteudo">
    <Header />
    <Container>
        <h1>GIFS que você curtiu</h1>
      <CardsContainer class="card__container">

        <Card
          v-for="gif in dados"
          :key="gif.id"
          class="card"
          :imgUrl="gif.images.downsized.url"
          :title="gif.title"
        >
          <!-- <Like @like="likeGif" @click="gifValue(gif)" />
          <Accordion
            maisInfo="Mais infos.."
            :title="gif.title"
            :username="gif?.username"
            :avtUrl="gif?.user?.avatar_url"
            :description="gif?.user?.description"
          /> -->
        </Card>
      </CardsContainer>
    </Container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Header, Card } from "@/components/organisms";
import { Container, CardsContainer } from "@/components/bosons";
export default {
  components: {
    Header,
    Container,
    CardsContainer,
    Card,
  },
  computed: {
    dados() {
      let value = this.$store.getters.$likedGifs;
      return value;
    },
  },
  methods: {
    ...mapActions(["addGifLike"]),
    start() {
      this.$store.dispatch("addGifLike");
    },
  },
};
</script>

<style lang="css" scoped>
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
</style>