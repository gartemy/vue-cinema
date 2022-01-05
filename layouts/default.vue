<template>
  <div id="app">
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
  width: 50px;
  height: 50px;
  font-weight: 600;
  border: 1px solid #ffffff;
  border-radius: 100px;
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
