<template>
  <div class="container">
    <router-view v-slot="{Component}">
      <transition 
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft"
       mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>
<style>
.fade-enter-from,
.fade-leave-to{
opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5 ease-out;
}
</style>
