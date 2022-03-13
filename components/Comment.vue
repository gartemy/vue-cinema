<template>
  <div class="commentary">
    <star-rating :rating="rating" :modify="false"></star-rating>
    <div class="commentary__text">
      <p>Хороший фильм! Очень понравился!</p>
    </div>
    <div class="commentary__info">
      <p>Артём</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.commentary {
  &__text {
    font-weight: 300;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  &__info {
    font-size: 0.875rem;
    font-weight: 700;
  }
}
</style>
