<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-12 col-lg-8">
          <div class="card">
            <Home />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  components: {
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #e5e5e5;
  min-height: 100vh;
  .card {
    margin-top: 140px;
    margin-bottom: 30px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
