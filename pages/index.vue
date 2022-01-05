<template>
  <main class="main">
    <div class="container">
      <carousel :carousel-data="carouselItems" :interval="10000"></carousel>

      <div class="timetable">
        <h3 class="timetable__title">Расписание сеансов</h3>

        <div class="timetable__days">
          <button class="day" v-for="day in days" :key="day.id" :class="{active: day.isActive}">
            <span class="day__week">{{ day.week }}</span>
            <span class="day__date">{{ day.date }}</span>
          </button>
        </div>

        <div class="timetable__items">
          <div class="timetable__item" v-for="film in films" :key="film.id">
            <div class="timetable__item-poster">
              <img class="timetable__item-icon desk" :src="require(`../static/timetable/${film.desktopImg}`)" alt="">
              <img class="timetable__item-icon mob" :src="require(`../static/timetable/${film.mobileImg}`)" alt="">
            </div>
            <div class="timetable__item-info">
              <div class="top">
                <div class="top__left">
                  <div class="timetable__item-description">
                    <p>{{ film.country }}</p>
                    <p>{{ film.genre }}</p>
                    <p>{{ film.timing }}</p>
                  </div>
                  <nuxt-link :to="'/'" class="film-title">{{ film.title }}</nuxt-link>
                </div>
                <div class="top__right">
                  <span class="age-btn">{{ film.age }}</span>
                  <button class="fav-btn"><img src="../static/fav-btn.svg" alt=""></button>
                </div>
              </div>
              <div class="timetable__item-schedule">
                <schedule-btn v-for="item in film.schedule" :key="item.id" :schedule="item" ></schedule-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Carousel from "../components/Carousel";
import ScheduleBtn from "../components/ScheduleBtn";

export default {
  name: 'IndexPage',
  components: {Carousel, ScheduleBtn},
  data() {
    return {
      days: [
        {id: 1, week: 'Сегодня', date: '31 декабря', isActive: true},
        {id: 2, week: 'Завтра', date: '1 января', isActive: false},
        {id: 3, week: 'Воскресенье', date: '2 января', isActive: false},
        {id: 4, week: 'Понедельник', date: '3 января', isActive: false},
        {id: 5, week: 'Вторник', date: '4 января', isActive: false},
        {id: 6, week: 'Среда', date: '5 января', isActive: false},
        {id: 7, week: 'Четверг', date: '6 января', isActive: false}
      ],
      carouselItems: [
        {
          id: 1,
          title: 'Человек-паук: Нет пути домой',
          carouselImg: 'spider-man1.webp',
          filmImg: 'spider-man.webp',
          country: 'США',
          genre: 'боевик',
          timing: '2 часа 30 минут',
          age: '12+',
          schedule: [
            {id: 1, time: '10:35', price: '190 ₽'},
            {id: 2, time: '10:35', price: '190 ₽'},
            {id: 3, time: '10:35', price: '190 ₽'},
            {id: 4, time: '10:35', price: '190 ₽'},
            {id: 5, time: '10:35', price: '190 ₽'},
            {id: 6, time: '10:35', price: '190 ₽'},
            {id: 7, time: '10:35', price: '190 ₽'}
          ]

        },
        {
          id: 2,
          title: 'Дом Gucci',
          carouselImg: 'gucci.webp',
          filmImg: 'gucci1.webp',
          country: 'США',
          genre: 'фантастика',
          timing: '2 часа 28 минут',
          age: '16+',
          schedule: [
            {id: 1, time: '10:35', price: '190 ₽'},
            {id: 2, time: '10:35', price: '190 ₽'},
            {id: 3, time: '10:35', price: '190 ₽'},
            {id: 4, time: '10:35', price: '190 ₽'},
            {id: 5, time: '10:35', price: '190 ₽'},
            {id: 6, time: '10:35', price: '190 ₽'},
            {id: 7, time: '10:35', price: '190 ₽'}
          ]
        },
        {
          id: 3,
          title: 'Матрица: Воскрешение',
          carouselImg: 'matrix1.webp',
          filmImg: 'matrix.webp',
          country: 'США',
          genre: 'драма',
          timing: '2 часа 28 минут',
          age: '18+',
          schedule: [
            {id: 1, time: '10:35', price: '190 ₽'},
            {id: 2, time: '10:35', price: '190 ₽'},
            {id: 3, time: '10:35', price: '190 ₽'},
            {id: 4, time: '10:35', price: '190 ₽'},
            {id: 5, time: '10:35', price: '190 ₽'},
            {id: 6, time: '10:35', price: '190 ₽'},
            {id: 7, time: '10:35', price: '190 ₽'}
          ]
        },
      ],
      films: [
        {
          id: 1,
          title: 'Энканто',
          desktopImg: 'enkanto.webp',
          mobileImg: 'enkanto-mob.webp',
          country: 'США, Колумбия',
          genre: 'мультфильм',
          timing: '1 час 42 минуты',
          age: '6+',
          schedule: [
            {id: 1, time: '10:35', price: '190 ₽'},
            {id: 2, time: '10:35', price: '190 ₽'},
            {id: 3, time: '10:35', price: '190 ₽'},
            {id: 4, time: '10:35', price: '190 ₽'},
            {id: 5, time: '10:35', price: '190 ₽'},
            {id: 6, time: '10:35', price: '190 ₽'},
            {id: 7, time: '10:35', price: '190 ₽'}
          ]
        },
        {
          id: 2,
          title: 'Человек-паук: Нет пути домой',
          desktopImg: 'spider-man.webp',
          mobileImg: 'spider-man-mob.webp',
          country: 'США',
          genre: 'боевик',
          timing: '2 часа 30 минут',
          age: '12+',
          schedule: [
            {id: 1, time: '10:35', price: '190 ₽'},
            {id: 2, time: '10:35', price: '190 ₽'},
            {id: 3, time: '10:35', price: '190 ₽'},
            {id: 4, time: '10:35', price: '190 ₽'},
            {id: 5, time: '10:35', price: '190 ₽'},
            {id: 6, time: '10:35', price: '190 ₽'},
            {id: 7, time: '10:35', price: '190 ₽'}
          ]
        },
        {
          id: 3,
          title: 'Матрица: Воскрешение',
          desktopImg: 'matrix.webp',
          mobileImg: 'matrix-mob.webp',
          country: 'США',
          genre: 'фантастика',
          timing: '2 часа 28 минут',
          age: '16+',
          schedule: [
            {id: 1, time: '10:35', price: '190 ₽'},
            {id: 2, time: '10:35', price: '190 ₽'},
            {id: 3, time: '10:35', price: '190 ₽'},
            {id: 4, time: '10:35', price: '190 ₽'},
            {id: 5, time: '10:35', price: '190 ₽'},
            {id: 6, time: '10:35', price: '190 ₽'},
            {id: 7, time: '10:35', price: '190 ₽'}
          ]
        },
        {
          id: 4,
          title: 'Дом Gucci',
          desktopImg: 'gucci.webp',
          mobileImg: 'gucci-mob.webp',
          country: 'США',
          genre: 'драма',
          timing: '2 часа 28 минут',
          age: '18+',
          schedule: [
            {id: 1, time: '10:35', price: '190 ₽'},
            {id: 2, time: '10:35', price: '190 ₽'},
            {id: 3, time: '10:35', price: '190 ₽'},
            {id: 4, time: '10:35', price: '190 ₽'},
            {id: 5, time: '10:35', price: '190 ₽'},
            {id: 6, time: '10:35', price: '190 ₽'},
            {id: 7, time: '10:35', price: '190 ₽'}
          ]
        },
      ]
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

    .day {
      border: 1px solid #ffffff;
      border-radius: 8px;
      color: #ffffff;
      background: none;
      padding: 15px 20px;

      &__week {
        display: block;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 5px;
      }

      &__date {
        font-size: 0.875rem;
        white-space: nowrap;
      }

      &.active {
        color: #E51937;
        background: #ffffff;
      }
    }
  }

  &__item {
    display: flex;
    gap: 55px;
    margin-bottom: 60px;

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

          .age-btn, .fav-btn {
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
