<template>
  <div id="app">
    <trailer-modal v-if="$store.state.isModalVisible" :trailer="$store.state.trailer"></trailer-modal>
    <Header/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

#app {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #ffffff;
  background-color: #1A2B41;
  position: relative;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 10px;
}

.film-title {
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 600;
}

.age-btn, .fav-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border: 2px solid #ffffff;
  border-radius: 100px;
}

.age-btn {
  width: 46px;
  height: 46px;
}

.fav-btn {
  width: 50px;
  height: 50px;
  transition: all ease 0.3s;

  &.active {
    border-color: #E51937;

    path {
      fill: #E51937;
    }
  }
}

.schedule-btn {
  min-width: 80px;
  height: 55px;
  color: #ffffff;
  background-color: #E51937;
  border: none;
  border-radius: 8px;

  span {
    font-size: 1rem;
    font-weight: 700;
  }

  .price {
    font-size: 11px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    padding-left: 2px;
  }
}
</style>
