<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-black">
    <router-view />
  </main>
  <footer class="container-fluid d-flex bg-black pb-3">
    <div class="">
      <i class="mdi mdi-shield-account mx-2 btn footer-buttons" @click="goToProfile"></i>

      <i class="mdi mdi-shield-check mx-2 btn footer-buttons"></i>

      <i class="mdi mdi-shield-cross mx-2 btn footer-buttons"></i>

      <i class="mdi mdi-shield-star mx-2 btn footer-buttons"></i>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  setup() {
    const router = useRouter()
    return {
      appState: computed(() => AppState),
      async goToProfile() {
        router.push({ name: 'Account' })
      }
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.bg-red{
    background-color: IndianRed;
}
.mdi{
  font-size: 40px !important;
}
.footer-buttons{
  color: #8d6398;
  text-shadow: -0.5px 2px #990000;
}
</style>
