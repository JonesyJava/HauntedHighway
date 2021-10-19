<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-dark">
    <router-view />
  </main>
  <footer class="container-fluid d-flex bg-dark py-1">
    <div class="">
      <i class="mdi mdi-shield-account mx-2 btn footer-buttons"></i>

      <i class="mdi mdi-shield-check mx-2 btn footer-buttons"></i>

      <i class="mdi mdi-shield-cross mx-2 btn footer-buttons"></i>

      <i class="mdi mdi-shield-star mx-2 btn footer-buttons"></i>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
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
