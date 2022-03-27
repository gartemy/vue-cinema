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

textarea {
  overflow: auto;
}

#app {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  background-color: #1A2B41;
  position: relative;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 10px;
  height: 100%;
}

.film {

  &-title {
    color: #ffffff;
    font-size: 1.75rem;
    font-weight: 600;

    &:hover {
      transition: .3s ease;
      text-shadow: 0 0 10px #E51937;
    }
  }

  &-genre {
    padding-top: 5px;
    font-weight: 100;
    font-size: 1.2rem;
  }

  &__poster {
    width: 275px;
    position: relative;
    cursor: pointer;

    img {
      min-width: 100%;
      border-radius: 8px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    span {
      font-size: 12px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #E51937;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      top: 12px;
      right: 15px;
      color: #ffffff;
    }
  }
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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

.main-news, .main-stocks {
  display: flex;
  justify-content: center;
  color: #000000;
  background: linear-gradient(to bottom, #1A2B41 35%, #ffffff 35%);
  flex-grow: 3;
}

.content-block {
  max-width: 825px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 55px 55px 80px 55px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px 0 65px 0;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 35px;
  }
}

@media (max-width: 955px) {
  .content-block {
    padding: 55px 20px 80px 20px;
  }
}

@media (max-width: 884px) {
  .content-block {
    background: none;
    box-shadow: none;
    margin-top: 0;
    padding: 35px 0 20px 0;
    margin-bottom: 0;
  }
}
</style>
