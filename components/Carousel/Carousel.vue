<template>
  <div class="carousel">
    <div class="carousel__wrapper">
      <div class="carousel__line">
        <carousel-item
          v-for="item in carouselData"
          :key="item.id"
          :item-data="item"
        />
      </div>
    </div>
    <button class="prev" @click="prevSlide"><img src="../../static/carousel/prev.svg" alt=""></button>
    <button class="next" @click="nextSlide"><img src="../../static/carousel/next.svg" alt=""></button>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";

export default {
  name: "Carousel",
  components: {CarouselItem},
  props: {
    carouselData: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      width: 875,
      currentSlideIndex: 0
    }
  },
  methods: {
    resizeCarousel() {
      let images = document.querySelectorAll('.carousel__line .carousel__icon img')
      this.width = document.querySelector('.carousel__wrapper').offsetWidth
      document.querySelector('.carousel__line').style.width = this.width * this.carouselData.length + 'px'
      images.forEach(item => {
        item.style.width = this.width + 'px'
        item.style.height = 'auto'
      })
      this.rollCarousel()
    },
    rollCarousel() {
      document.querySelector('.carousel__line').style.transform = 'translate(-' + this.currentSlideIndex * this.width + 'px'
    },
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      } else {
        this.currentSlideIndex = this.carouselData.length - 1
      }
      this.rollCarousel()
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.carouselData.length - 1) {
        this.currentSlideIndex = 0
      } else {
        this.currentSlideIndex++
      }
      this.rollCarousel()
    }
  },
  mounted() {
    this.resizeCarousel()
    window.addEventListener('resize', this.resizeCarousel)
    if (this.interval > 0) {
      const vm = this
      setInterval(() => {
        vm.nextSlide()
      }, this.interval)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  max-width: 875px;
  position: relative;
  margin: 20px auto 70px auto;

  &__wrapper {
    max-width: 875px;
    overflow: hidden;
  }

  &__line {
    display: flex;
    transition: all ease 1s;
  }

  .prev, .next {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    margin-top: -24px;
    border: none;
    background-color: #ffffff;
    border-radius: 50%;
    z-index: 2;
  }

  .prev {
    left: -3%;
  }

  .next {
    right: -3%;
  }
}

@media (max-width: 930px) {
  .carousel {

    .prev, .next {
      width: 40px;
      height: 40px;
    }

    .prev {
      left: 0;
    }

    .next {
      right: 0;
    }
  }
}

@media (max-width: 768px) {
  .carousel {
    margin: 20px auto 40px auto;
  }
}

@media (max-width: 732px) {
  .carousel {
    margin: 20px auto 20px auto;
  }
}


@media (max-width: 425px) {
  .carousel {

    .prev, .next {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
