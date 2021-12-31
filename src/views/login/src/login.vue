<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>
<script lang="ts">
import loginPanel from "./components/login-panel.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { loginPanel },
});
</script>
<style scoped lang="scss">
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("@/assets/imgs/login.png") no-repeat center;
  background-size: 100% 100%;
}
</style>
