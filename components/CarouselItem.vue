<template>
    <div class="carousel__item">
      <div class="background"></div>
      <div class="carousel__icon">
        <img :src="require(`../static/carousel/${itemData.carouselImg}`)" alt="">
      </div>
      <div class="carousel__info" v-if="itemData.filmImg">
        <div class="carousel__info-icon">
          <img :src="require(`../static/carousel/${itemData.filmImg}`)" alt="">
        </div>
        <div class="carousel__info-description">
          <p>{{ itemData.genre }}</p>
          <nuxt-link :to="'/'" class="film-title">{{ itemData.title }}</nuxt-link>
          <div class="carousel__info-btn">
            <button class="trailer-btn" @click="$store.commit('SHOW_TRAILER', itemData.trailer)">
              Смотреть трейлер
              <img src="../static/trailer-btn.svg" alt="">
            </button>
            <span class="age-btn">{{ itemData.age }}</span>
          </div>
          <div class="carousel__info-timetable">
            <p>Ближайшие сеансы на 31.12:</p>
            <div class="carousel__info-schedule">
              <schedule-btn v-for="item in itemData.schedule.slice(0,4)" :key="item.id" :schedule="item"></schedule-btn>
              <button class="schedule-btn">
                <span>Еще {{ itemData.schedule.length - 4 }}</span>
                <span>Еще {{ itemData.schedule.length - 3 }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel__banner">
        <p>{{ itemData.title }} уже в кино!</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "CarouselItem",
  props: {
    itemData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.carousel {

  &__item {
    position: relative;

    .background {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgb(0, 0, 0, 0.6);
      border-radius: 8px;
      z-index: 1;
    }
  }

  &__banner {
    font-size: 1.25rem;
    font-weight: 600;
    display: none;
    padding: 25px 66px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    p {
      color: #ffffff;
    }
  }

  &__icon img {
    height: 100%;
    border-radius: 8px;
    cursor: pointer;
    filter: blur(3px);
  }

  &__info {
    display: flex;
    gap: 38px;
    padding: 55px 66px;
    color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    &-icon img {
      border-radius: 8px;
    }

    &-btn {
      display: flex;
      align-items: center;
      gap: 22px;
      margin-top: 28px;

      .trailer-btn {
        height: 50px;
        display: flex;
        gap: 5px;
        align-items: center;
        padding: 13px 19px;
        font-size: 1rem;
        color: #ffffff;
        border: none;
        border-radius: 50px;
        background: #E51937;

      }
    }

    &-timetable p {
      font-size: 1.375rem;
      font-weight: 600;
      margin: 21px 0;
    }

    &-schedule {
      display: flex;
      gap: 17px;

      .schedule-btn:last-child {

        span {
          font-weight: 600;
        }

        span:last-child {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .carousel__info {
    padding: 25px 0 20px 45px;
  }
  .carousel__info-schedule {

    .schedule-btn {

      &:nth-child(4) {
        display: none;
      }

      &:last-child {

        span:first-child {
          display: none;
        }

        span:last-child {
          display: block;
        }
      }
    }
  }
}

@media (max-width: 732px) {
  .carousel {

    &__info {
      display: none;
    }

    &__banner {
      display: block;
      font-size: 1.75rem;
    }
  }
}

@media (max-width: 400px) {
  .carousel__banner {
    padding: 30px 66px;
    font-size: 1.25rem;
  }
}

@media (max-width: 319px) {
  .carousel__banner {
    padding: 15px 66px;
    font-size: 1rem;
  }
}
</style>
