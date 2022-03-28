<template>
  <div class="content-block">
    <p class="content-block__date">{{ item.date }}</p>
    <h2>{{ item.title }}</h2>
    <div class="content-block__item">
      <img :src="require(`../static/${item.img}`)" alt="">
      <p class="content-block__description">{{ item.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.content-block {

  &__date {
    margin-bottom: 15px;
  }

  &__item {
    max-width: 825px;

    img {
      width: 100%;
      max-height: 472px;
      border-radius: 8px;
      margin-bottom: 45px;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 35px;
    }
  }

  &__description {
    font-size: 1.125rem;
    font-weight: 300;
  }
}

@media (max-width: 320px) {
  h2 {
    font-size: 1.5rem;
  }
  .content-block {
    &__date {
      font-size: 0.875rem;
    }
    &__description {
      font-size: 1rem;
    }
  }
}
</style>
