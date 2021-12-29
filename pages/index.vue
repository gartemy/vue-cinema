<template>
  <main class="main">
    <div class="timetable">
      <div class="container">
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
              <img class="timetable__item-icon desk" :src="require(`../static/timetable/${film.img[0]}`)" alt="">
              <img class="timetable__item-icon mob" :src="require(`../static/timetable/${film.img[1]}`)" alt="">
            </div>
            <div class="timetable__item-info">
              <div class="top">
                <div class="top__left">
                  <div class="timetable__item-description">
                    <p>{{ film.country }}</p>
                    <p>{{ film.genre }}</p>
                    <p>{{ film.timing }}</p>
                  </div>
                  <nuxt-link :to="'/'">{{ film.title }}</nuxt-link>
                </div>
                <div class="top__right">
                  <span class="top-btn age">{{ film.age }}</span>
                  <button class="top-btn fav-btn"><img src="../static/fav-btn.svg" alt=""></button>
                </div>
              </div>
              <div class="timetable__item-schedule">
                <button class="schedule-btn" v-for="item in film.schedule" :key="item.id">
                  <span>{{ item.time }}</span><br>
                  <span class="price">{{ item.price }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      days: [
        {id: 1, week: 'Сегодня', date: '31 декабря', isActive: true},
        {id: 2, week: 'Сегодня', date: '31 декабря', isActive: false},
        {id: 3, week: 'Сегодня', date: '31 декабря', isActive: false},
        {id: 4, week: 'Сегодня', date: '31 декабря', isActive: false},
        {id: 5, week: 'Сегодня', date: '31 декабря', isActive: false},
        {id: 6, week: 'Сегодня', date: '31 декабря', isActive: false},
        {id: 7, week: 'Сегодня', date: '31 декабря', isActive: false}
      ],
      films: [
        {
          id: 1,
          img: ['enkanto.png', 'enkanto-mob.jpg'],
          country: 'США, Колумбия',
          genre: 'мультфильм',
          timing: '1 час 42 минуты',
          title: 'Энканто',
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
          img: ['spider-man.png', 'spider-man-mob.jpeg'],
          country: 'США',
          genre: 'боевик',
          timing: '2 часа 30 минут',
          title: 'Человек-паук: Нет пути домой',
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
          img: ['matrix.png', 'matrix-mob.jpg'],
          country: 'США',
          genre: 'фантастика',
          timing: '2 часа 28 минут',
          title: 'Матрица: Воскрешение',
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
          img: ['gucci.png', 'gucci-mob.png'],
          country: 'США',
          genre: 'драма',
          timing: '2 часа 28 минут',
          title: 'Дом Gucci',
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

        &-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          font-weight: 600;
          border: 1px solid #ffffff;
          border-radius: 100px;
        }

        .fav-btn {
          background: none;
          padding-left: 7px;
        }
      }

      a {
        color: #ffffff;
        font-size: 1.75rem;
        font-weight: 600;
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

      .schedule-btn {
        min-width: 80px;
        height: 55px;
        color: #ffffff;
        background-color: #E51937;
        border: none;
        border-radius: 8px;

        span {
          font-size: 1rem;
          font-weight: 700;
        }

        .price {
          font-size: 11px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          padding-left: 2px;
        }
      }
    }
  }
}

.day {
  position: relative;
  border: 1px solid #ffffff;
  border-radius: 8px;
  color: #ffffff;
  background: none;
  padding: 15px 20px;

  &__week {
    display: block;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 5px;
  }

  &__date {
    font-size: 0.875rem;
  }

  &.active {
    background-color: #ffffff;
    color: #E51937;
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
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 30px;

          &-btn {
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
        overflow-x: auto;
      }
    }
  }
}
</style>
