<template>
  <main class="main">
    <div class="container">
      <carousel :carousel-data="$store.state.carouselData" :interval="5000"></carousel>

      <div class="timetable">
        <h3 class="timetable__title">Расписание сеансов</h3>

        <div class="timetable__days">
          <day v-for="day in $store.state.days" :key="day.id" :day="day" :activeDay="activeDay" @activeDay="setActiveDay"></day>
        </div>

        <div class="timetable__items">
          <div class="timetable__item" v-for="film in $store.state.films" :key="film.id">
            <div class="timetable__item-poster">
              <img class="timetable__item-icon desk" :src="require(`../static/timetable/${film.desktopImg}`)" alt="">
              <img class="timetable__item-icon mob" :src="require(`../static/timetable/${film.mobileImg}`)" alt="">
              <div class="timetable__item-trailer">
                <button class="trailer-btn" @click="$store.commit('SHOW_TRAILER', film.trailer)">
                  <img src="../static/trailer-btn.svg" alt="">
                </button>
                <span>Смотреть трейлер</span>
              </div>
              <div class="background"></div>
            </div>
            <div class="timetable__item-info">
              <div class="top">
                <div class="top__left">
                  <div class="timetable__item-description">
                    <p>{{ film.country }}</p>
                    <p>{{ film.genre }}</p>
                    <p>{{ film.timing }}</p>
                  </div>
                  <nuxt-link :to="`/films/${film.id}`" class="film-title">{{ film.title }}</nuxt-link>
                </div>
                <div class="top__right">
                  <span class="age-btn">{{ film.age }}</span>
                  <button class="fav-btn" :class="{active : film.isFavourite}"
                          @click="$store.commit('ADD_FAVOURITE', film.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                      <g id="Iconly/Light-Outline/Heart">
                        <g id="Heart">
                          <g id="Group 3">
                            <mask id="mask0_14_152" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="4"
                                  width="21" height="20">
                              <path id="Clip 2" fill-rule="evenodd" clip-rule="evenodd" d="M0 4H20.4725V23.501H0V4Z"
                                    fill="white"/>
                            </mask>
                            <g mask="url(#mask0_14_152)">
                              <path id="Fill 1" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.82371 13.1231C3.22571 17.4851 8.76471 21.0121 10.2367 21.8851C11.7137 21.0031 17.2927 17.4371 18.6497 13.1271C19.5407 10.3411 18.7137 6.8121 15.4277 5.7531C13.8357 5.2421 11.9787 5.5531 10.6967 6.5451C10.4287 6.7511 10.0567 6.7551 9.78671 6.5511C8.42871 5.5301 6.65471 5.2311 5.03771 5.7531C1.75671 6.8111 0.932712 10.3401 1.82371 13.1231ZM10.2377 23.5011C10.1137 23.5011 9.99071 23.4711 9.87871 23.4101C9.56571 23.2391 2.19271 19.1751 0.395713 13.5811C0.394713 13.5811 0.394713 13.5801 0.394713 13.5801C-0.733288 10.0581 0.522713 5.6321 4.57771 4.3251C6.48171 3.7091 8.55671 3.9801 10.2347 5.0391C11.8607 4.0111 14.0207 3.7271 15.8867 4.3251C19.9457 5.6341 21.2057 10.0591 20.0787 13.5801C18.3397 19.1101 10.9127 23.2351 10.5977 23.4081C10.4857 23.4701 10.3617 23.5011 10.2377 23.5011Z"
                                    fill="white"/>
                            </g>
                          </g>
                          <path id="Fill 4" fill-rule="evenodd" clip-rule="evenodd"
                                d="M16.1537 11.625C15.7667 11.625 15.4387 11.328 15.4067 10.936C15.3407 10.114 14.7907 9.42 14.0077 9.167C13.6127 9.039 13.3967 8.616 13.5237 8.223C13.6527 7.829 14.0717 7.615 14.4677 7.739C15.8307 8.18 16.7857 9.387 16.9027 10.814C16.9357 11.227 16.6287 11.589 16.2157 11.622C16.1947 11.624 16.1747 11.625 16.1537 11.625Z"
                                fill="white"/>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="timetable__item-schedule">
                <schedule-btn v-for="item in film.schedule" :key="item.id" :schedule="item"></schedule-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Carousel from "../components/Carousel/Carousel";
import Day from "../components/Day"
import ScheduleBtn from "../components/ScheduleBtn";

export default {
  name: 'IndexPage',
  components: {Carousel, Day, ScheduleBtn},
  data() {
    return {
      activeDay: 1
    }
  },
  methods: {
    setActiveDay(id) {
      this.activeDay = id
    }
  }
}
</script>

<style lang="scss" scoped>

.timetable {

  &__title {
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: 40px;
  }

  &__days {
    display: flex;
    gap: 25px;
    margin-bottom: 53px;
    overflow-y: hidden;
    overflow-x: auto;
  }

  &__item {
    display: flex;
    gap: 55px;
    margin-bottom: 60px;

    &-poster {
      position: relative;
      cursor: pointer;

      .background {
        display: none;
      }

      &:hover {

        .trailer-btn {
          filter: drop-shadow(0 0 4px #30a6f1);
        }

        .background {
          display: block;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background: rgb(26, 43, 65, 0.8);
        }

        .timetable__item-trailer span {
          display: block;
        }
      }
    }

    &-icon {
      border-radius: 8px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      &.desk {
        min-width: 165px;
        height: 243px;
      }

      &.mob {
        display: none;
      }
    }

    &-trailer {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 0;
      z-index: 2;
      margin-top: -36px;
      text-align: center;

      span {
        display: none;
        font-size: 1rem;
        font-weight: 600;
        color: #ffffff;
        padding-top: 5px;
      }

      .trailer-btn {
        width: 50px;
        height: 50px;
        background: none;
        border: none;
        margin: auto;
        filter: drop-shadow(0 0 4px #232934);

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    &-info {

      .top {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 35px;

        &__right {
          display: flex;
          gap: 15px;
        }

        .fav-btn {
          background: none;
          padding-left: 7px;
        }
      }
    }

    &-description {
      display: flex;
      flex-wrap: wrap;
      font-size: 0.875rem;
      margin-bottom: 10px;

      p {
        margin-right: 25px;
      }
    }

    &-schedule {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
}

@media (max-width: 767px) {
  .timetable {

    &__item {
      flex-direction: column;
      gap: 15px;

      &-icon {
        width: 100%;

        &.desk {
          display: none;
        }

        &.mob {
          display: block;
        }
      }

      &-info {

        .top {
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 30px;

          .age-btn {
            width: 36px;
            height: 36px;
          }

          .fav-btn {
            width: 40px;
            height: 40px;
          }

          &__left a {
            font-size: 1.375rem;
          }
        }

      }

      &-description p {
        margin: 0 15px 5px 0;
      }

      &-schedule {
        flex-wrap: nowrap;
        overflow-y: hidden;
        overflow-x: auto;
      }
    }
  }
}
</style>
