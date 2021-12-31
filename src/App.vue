<template>
  <transition name="fade-transform" mode="out-in">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </transition>
</template>
<style lang="scss">
@import "./style/reset.scss";
@import "./style/global.scss";

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
