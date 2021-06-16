<template>
  <div class="ui card">
    <div class="image">
      <img  />
      <h2>Carregand</h2>
    </div>
    <div class="content">
      <a class="header"></a>
      <div class="description">
      </div>
    </div>
  </div>
</template>


<style lang="css" scoped>
.card{
    border: 5px solid pink;
}
.image {
  overflow: hidden;
  height: 5rem;
  width: 100%;
  border: 1px solid red;
}
.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
@media screen and (max-width: 640px) {
  .card {
    height: auto;
  }
}
</style>