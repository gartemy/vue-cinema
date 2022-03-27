<template>
<main class="main main-news">
  <div class="container">
    <div class="content-block">
      <h2>Свежие новости</h2>
      <div class="news">
        <div class="news__item main_item">
          <img :src="require(`../../static/${$store.state.news[0].img}`)" alt="">
          <div class="news__item-info">
            <h4>{{ $store.state.news[0].title }}</h4>
            <p>{{ $store.state.news[0].date }}</p>
          </div>
        </div>
        <div class="news__items">
          <div v-for="item in $store.state.news.slice(1)" class="news__item">
            <img :src="require(`../../static/${item.img}`)" alt="">
            <div class="news__item-info">
              <h4>{{ item.title }}</h4>
              <p>{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  color: #000000;
  background: linear-gradient(to bottom, #1A2B41 35%, #ffffff 35%);
  flex-grow: 3;

  .news {
    display: flex;
    gap: 20px;
    align-items: flex-start;

    &__items {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    &__item {
      max-width: 250px;
      border: 1px solid #E6ECF2;
      border-radius: 8px;
      cursor: pointer;

      &-info {
        padding: 20px 20px 25px 20px;
      }

      img {
        width: 100%;
        border-radius: 8px 8px 0 0;
      }

      h4 {
        font-size: 1.25rem;
        margin-bottom: 5px;
      }

      p {
        font-size: 0.875rem;
        color: rgb(0,28,45,.5);
      }
    }
    .main_item {
      max-width: 548px;
    }
  }
}

@media (max-width: 884px) {
  .main {
    background: #ffffff;

    .news {
      flex-direction: column;

      &__items {
        min-width: 90vw;
      }

      &__item {
        min-width: 100%;
      }
    }
  }
}

@media (max-width: 320px) {
  h2 {
    font-size: 1.75rem;
  }
}
</style>
