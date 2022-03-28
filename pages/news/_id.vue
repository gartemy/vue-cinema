<template>
  <main class="main main-news">
    <div class="container">
      <div class="content-block">
        <p class="news-date">{{ newsItem.date }}</p>
        <h2>{{ newsItem.title }}</h2>
        <div class="news__item">
          <img :src="require(`../../static/${newsItem.img}`)" alt="">
          <p class="news__item-description">{{ newsItem.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "NewsItem",
  data() {
    return {
      newsId: this.$router.history.current.params.id
    }
  },
  computed: {
    newsItem() {
      const newsItem = this.$store.state.news.find(item => item.id === Number(this.newsId))
      return newsItem
    }
  }
}
</script>

<style lang="scss" scoped>
.news-date {
  margin-bottom: 15px;
}

.news__item {
  max-width: 825px;

  img {
    width: 100%;
    max-height: 472px;
    border-radius: 8px;
    margin-bottom: 45px;
  }

  h2 {
    margin-bottom: 35px;
  }

  &-description {
    font-size: 1.125rem;
    font-weight: 300;
  }
}

@media (max-width: 320px) {
  h2 {
    font-size: 1.5rem;
  }
  .news__item {
    .news-date {
      font-size: 0.875rem;
    }
    &-description {
      font-size: 1rem;
    }
  }
}
</style>
