<template>
  <main class="main main-stocks">
    <div class="container">
      <div class="content-block">
        <h2>Акции и скидки</h2>
        <div class="stocks">
          <div v-for="stock in $store.state.stocks" :key="stock.id" class="stocks__item">
            <img :src="require(`../../static/${stock.img}`)" alt="">
            <div class="stocks__item-info">
              <h4>{{ stock.title }}</h4>
              <p v-if="stock.description">{{ stock.description }}</p>
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

  .stocks {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;

    &__item {
      max-width: 400px;
      position: relative;
      cursor: pointer;

      img {
        width: 100%;
        border-radius: 8px;
      }

      &-info {
        position: absolute;
        left: 20px;
        bottom: 25px;
      }

      h4 {
        color: #ffffff;
        font-size: 1.25rem;
        margin-bottom: 5px;
      }

      p {
        color: rgba(255, 255, 255, .7);
        font-size: 0.875rem;
      }
    }
  }
}

@media (max-width: 884px) {
  .main {
    background: #ffffff;

      .stocks__item {
        min-width: 100%;
      }
  }
}

@media (max-width: 425px) {
  .main {
    .content-block {
      h2 {
        font-size: 1.75rem;
      }

      .stocks__item-info {
        h4 {
          font-size: 1rem;
        }

        p {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
