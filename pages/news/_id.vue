<template>
  <main class="main main-news">
    <div class="container">
      <content-block :item="newsItem"></content-block>
    </div>
  </main>
</template>

<script>
import ContentBlock from "@/components/ContentBlock";

export default {
  name: "NewsItem",
  components: {ContentBlock},
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
