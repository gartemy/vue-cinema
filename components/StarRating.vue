<template>
  <div v-if="modify" class="star-rating">
    <span v-for="index in starLimit" :key="index" class="star star--outlined" @mouseover="setRating(index)"></span>
    <div class="star-rating__colored" :style="ratingWidthStyle">
      <span v-for="index in starLimit" :key="index" class="star star--colored" @mouseover="setRating(index)"></span>
    </div>
  </div>
  <div v-else class="star-rating">
    <span v-for="index in starLimit" :key="index" class="star star--outlined"></span>
    <div class="star-rating__colored" :style="ratingWidthStyle">
      <span v-for="index in starLimit" :key="index" class="star star--colored"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    modify: {
      type: Boolean,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    },
    starLimit: {
      type: Number,
      default: 5
    }
  },
  computed: {
    ratingWidth() {
      return this.rating / this.starLimit * 100
    },
    ratingWidthStyle() {
      return `width: ${this.ratingWidth}%;`
    }
  },
  methods: {
    setRating(index) {
      this.$emit('setRating', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;
  display: inline-flex;
  margin-left: -8px;
  margin-bottom: 15px;

  .star {
    display: inline-block;
    width: 18px;
    height: 17px;
    margin: 0 3px;
    flex-shrink: 0;

    &--colored {
      background: url("../static/colored-star.svg") center no-repeat;
    }

    &--outlined {
      background: url("../static/star.svg") center no-repeat;
    }
  }

  &__colored {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}
</style>
