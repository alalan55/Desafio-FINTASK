<template>
  <div class="conteudo">
    <Header />
    <Container>
      <h1 v-if="dados.length">GIFS que você curtiu</h1>
      <h1 v-else>Ops, parece que você ainda não curtiu nada..</h1>
      <CardsContainer class="card__container">
        <Card
          v-for="gif in dados"
          :key="gif.id"
          class="card"
          :imgUrl="gif.images.downsized.url"
          :title="gif.title"
        >
          <EditDelete
            @clicked="editar"
            @click="edited(gif)"
            @removed="remover(gif)"
          />

          <Accordion
            maisInfo="Mais infos.."
            :title="gif.title"
            :username="gif?.username"
            :avtUrl="gif?.user?.avatar_url"
            :description="gif?.user?.description"
          />
        </Card>
      </CardsContainer>

      <Modal :class="{ block: clicado }" @cancelar="cancel" @salvar="save">
        <div class="content">
          <Input text="Titulo" class="inpt" v-model="titulo" />
          <Input text="Username" class="inpt" v-model="username" />
          <Input text="Avatar url" class="inpt" v-model="avatarUrl" />
          <Input text="Description" class="inpt" v-model="description" />
        </div>
      </Modal>
    </Container>
  </div>
</template>

<script>
import { Input } from "@/components/atoms";
import { mapActions } from "vuex";
import { Header, Card, Modal } from "@/components/organisms";
import { Container, CardsContainer } from "@/components/bosons";
import { EditDelete, Accordion } from "@/components/molecules";
export default {
  components: {
    Header,
    Container,
    CardsContainer,
    Modal,
    Card,
    EditDelete,
    Input,
    Accordion,
  },
  computed: {
    dados() {
      let value = this.$store.getters.$likedGifs;
      return value;
    },
  },
  methods: {
    ...mapActions(["addGifLike", "deleteGifLiked", "updateGif"]),
    start() {
      this.$store.dispatch("addGifLike");
    },
    editar(e) {
      this.clicado = e;
    },
    edited(e) {
      this.obj = e;
      this.titulo = this.obj.title;
      this.avatarUrl = e.user?.avatar_url;
      this.username = e.username;
      this.description = e.user?.description;

      return this.obj;
    },
    save() {
      let obj = {
        ...this.obj,
        title: this.titulo,
        username: this.username,
        user: {
          avatar_url: this.avatarUrl,
          description: this.description,
        },
      };
      this.updateGif(obj);
      this.clicado = false;
    },
    remover(e) {
      this.deleteGifLiked(e);
    },
    cancel(e) {
      this.clicado = e;
    }
  },
  data() {
    return {
      clicado: false,
      editData: {},
      titulo: "",
      descricao: "",
      username: "",
      avatarUrl: "",
      description: "",
      obj: null,
    };
  },
};
</script>

<style lang="css" scoped>
.conteudo {
  position: relative;
  height: 100vh;
  overflow-y: auto;
}
.card__container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.card__container .card {
  flex: 0 0 200px;
  margin: 0.3rem;
}

.block {
  display: block;
}
.inpt {
  margin: 0.5rem;
}
</style>