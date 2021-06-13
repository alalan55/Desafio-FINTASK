<template>
  <div class="ui styled accordion">
    <div class="title" @click="init" :class="{active: active}">
      <i class="dropdown icon" ></i>
      {{maisInfo}}
    </div>
    <div class="content active" v-if="active">
      <p class="transition visible">
        <ul class="infos">
            <li><span>Title</span> - {{title}}</li>
            <li><span>Username</span>  - {{username}}</li>
            <li><span>Avatar URL</span>  - <span class="link">{{avtUrl}}</span></li>
            <li><span>Description</span>  - {{description}}</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        maisInfo:{Type: String, required: true, default: 'Não informado'},
        title: {Type: String, required: true, default: 'Não informado'},
        username: {Trpe: String, required: true, default: 'Não informado'},
        avtUrl:{Type: String, default: 'Não informado' },
        description:{Type: String, default: 'Não informado'}

    },
    data(){
        return{
            active:false,
        }
    },
    methods:{
        init(){
            !this.active ? this.active = true : this.active = false
        }
    }
};
</script>

<style lang="css" scoped>
.infos li{
    list-style: none;
    margin-top: .5rem;
    border-bottom: 1px solid rgba(175, 175, 175, 0.5);
}
.infos li >span{
    font-weight: bold;
}
.link{
    font-size: .6rem;
}
</style>