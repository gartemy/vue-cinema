<template>
  <main class="main">
    <div class="film">
      <div class="container">
        <div class="film__items">
          <div class="film__poster">
            <img :src="require(`../../static/timetable/${film.desktopImg}`)" class="desk" alt="">
            <img :src="require(`../../static/timetable/${film.mobileImg}`)" class="mob" alt="">
            <span>{{ film.age }}</span>
          </div>
          <div class="film__info">
            <div class="film__description">
              <div class="top">
                <div class="top__left">
                  <p>
                    <span>{{ film.country }}</span>
                    <span>{{ film.genre }}</span>
                    <span>{{ film.timing }}</span>
                  </p>
                  <h1>{{ film.title }}</h1>
                </div>
                <div class="top__right">
                  <button class="trailer-btn" @click="$store.commit('SHOW_TRAILER', film.trailer)">
                    Трейлер
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10.25 1.5C5.425 1.5 1.5 5.425 1.5 10.25C1.5 15.075 5.425 19 10.25 19C15.075 19 19 15.075 19 10.25C19 5.425 15.075 1.5 10.25 1.5ZM10.25 20.5C4.598 20.5 0 15.902 0 10.25C0 4.598 4.598 0 10.25 0C15.902 0 20.5 4.598 20.5 10.25C20.5 15.902 15.902 20.5 10.25 20.5Z"
                            fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.13382 8.08639C8.95682 9.08739 8.95382 11.4784 9.13082 12.4284C10.0088 12.1184 11.9108 10.8684 12.4228 10.2494C11.9128 9.64839 10.0348 8.42439 9.13382 8.08639ZM8.82782 14.0014C8.55782 14.0014 8.30182 13.9244 8.09282 13.7164C7.93182 13.5574 7.50182 13.1324 7.49982 10.3334C7.49882 7.36139 7.94582 6.91939 8.09282 6.77239C8.61582 6.25439 9.46782 6.60939 9.83082 6.76139C10.3508 6.97839 13.9998 8.84739 13.9998 10.2454C13.9998 11.5554 10.7158 13.3874 9.87682 13.7374C9.54982 13.8734 9.17682 14.0014 8.82782 14.0014Z"
                            fill="white"/>
                    </svg>
                  </button>
                  <button class="fav-btn" :class="{active: film.isFavourite }"
                          @click="$store.commit('ADD_FAVOURITE', film.id)">
                    Хочу сходить
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
                  <button class="fav-btn" :class="{active: film.isFavourite }"
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
            </div>
            <div class="film__content">
              <p>{{ film.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="film">
      <div class="container">
        <div class="film__items">
          <div class="film__cast">
            <div class="film__cast-info">
              <h4>Режиссер</h4>
              <p>{{ film.directors }}</p>
            </div>
            <div class="film__cast-info">
              <h4>Жанр</h4>
              <p>{{ film.genre }}</p>
            </div>
            <div class="film__cast-info" v-if="film.actors">
              <h4>В ролях</h4>
              <p>{{ film.actors }}</p>
            </div>
            <div class="film__cast-info">
              <h4>Описание</h4>
              <p>{{ film.content }}</p>
            </div>
          </div>
          <div class="film__gallery">
            <h2>Кадры из фильма</h2>
            <div class="film__frames">
              <div class="film__frame main_frame">
                <img :src="require(`../../static/films/${film.gallery[0]}`)" alt="">
              </div>
              <div class="film__frames">
                <div v-for="frame in film.gallery.slice(1)" :key="frame" class="film__frame">
                  <img :src="require(`../../static/films/${frame}`)" alt="">
                </div>
              </div>
            </div>
            <div class="film__feedback">
              <h2>Как Вам фильм?</h2>
              <star-rating :rating="rating" :modify="true" @setRating="setRating"></star-rating>
              <div class="film__feedback-text">
                <textarea rows="1" placeholder="Напишите, что понравилось или не понравилось"></textarea>
                <div class="feedback-label">
                  Комментарий
                </div>
              </div>
              <button class="feedback-btn">Оценить</button>
            </div>
            <div class="film__comments">
              <h2>Комментарии</h2>
              <comment :rating="rating"></comment>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import StarRating from "@/components/StarRating";
import Comment from "@/components/Comment";

export default {
  name: "film",
  components: {
    StarRating,
    Comment
  },
  data() {
    return {
      filmId: this.$router.history.current.params.id,
      rating: 1
    }
  },
  computed: {
    film() {
      const film = this.$store.state.films.find(film => film.id === Number(this.filmId))
      return film
    }
  },
  methods: {
    setRating(rating) {
      this.rating = rating
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 60px;

  .film {
    background-color: #ffffff;

    &:first-child {
      background: none;
    }

    &__poster {
      min-width: 275px;

      .mob {
        display: none;
      }
    }

    &__items {
      display: flex;
      gap: 55px;
      padding-bottom: 30px;
    }

    &__content {
      font-weight: 300;
    }

    &__cast {
      max-width: 275px;
      color: #000000;
      padding-top: 40px;

      &-info {
        margin-bottom: 25px;

        &:last-child {
          display: none;
        }

        p {
          font-weight: 300;
          line-height: 1.5;
        }
      }

      h4 {
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 10px;
      }
    }

    &__gallery {
      color: #000000;

      h2 {
        font-size: 2rem;
        font-weight: 600;
        padding: 45px 0 30px;
      }
    }

    &__frames {
      display: flex;
      gap: 24px;

      .film__frames {
        flex-direction: column;
        gap: 15px;
      }

      .main_frame {
        max-width: 600px;
        max-height: 345px;
      }
    }

    &__frame {
      max-width: 300px;
      max-height: 165px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }

    &__feedback {
      h2 {
        padding: 45px 0 30px;
      }

      .star-rating {
        margin: 0 0 30px 0;
      }

      &-text {
        position: relative;
        max-width: 452px;
        margin-bottom: 25px;

        textarea {
          resize: none;
          width: calc(100% - 50px);
          min-height: calc(6em + 26px);
          padding: 18px 25px 10px;
          border: 2px solid #e6ecf2;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 300;
          color: #000000;
          text-align: left;

          &::placeholder {
            font-size: 0.875rem;
          }

          &:focus {
            outline: none;
          }
        }

        .feedback-label {
          position: absolute;
          top: -7px;
          left: 21px;
          padding: 0 4px;
          background: #ffffff;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          text-align: left;
          white-space: nowrap;
          color: #E51937;
        }
      }

      .feedback-btn {
        padding: 11px 23px 9px;
        border: 2px solid #E51937;
        border-radius: 50px;
        background: #E51937;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 300;
      }
    }

    &__comments {
      h2 {
        padding: 75px 0 55px;
      }
    }
  }
}

.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  &__left {

    p {
      margin-bottom: 12px;

      span {
        margin-right: 25px;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 600;
    }
  }

  &__right {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    color: #ffffff;

    .trailer-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.875rem;
      color: #ffffff;
      font-weight: 400;
      background-color: #E51937;
      border: none;
      border-radius: 100px;
      padding: 15px 20px 15px 28px;
    }

    .fav-btn {
      display: flex;
      font-size: 0.875rem;
      font-weight: 400;
      padding: 13px 13px 13px 26px;
      border: 2px solid rgb(255, 255, 255, 0.7);
      color: #ffffff;
      background: none;
      gap: 8px;
      width: auto;

      &:last-child {
        display: none;
      }

      &.active {
        color: #E51937;
        border-color: #E51937;
      }
    }
  }
}

@media (max-width: 1200px) {
  .top {
    h1 {
      margin-bottom: 20px;
    }
  }
  .top__right {
    gap: 15px;

    .fav-btn {
      display: none;

      &:last-child {
        width: 50px;
        height: 50px;
        padding: 2px 0 0 8px;
        display: block;
      }
    }
  }
}

@media (max-width: 1024px) {
  .main .film__items {
    gap: 40px;
  }
  .top {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .main {
    padding-top: 0;

    .film {

      &__items {
        flex-direction: column;
      }

      &__poster {
        width: 100%;

        .desk {
          display: none;
        }

        .mob {
          display: block;
          max-width: 100%;
        }
      }

      &__content {
        display: none;
      }

      &__cast {
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        &-info {
          width: 50%;

          &:nth-child(3), &:last-child {
            width: 100%;
          }

          &:last-child {
            display: block;
            margin-bottom: 0;
          }
        }
      }

      &__gallery {

        h2 {
          font-size: 1.5rem;
          padding: 0 0 25px;
        }
      }

      .film__feedback, .film__comments {
        h2 {
          padding: 35px 0 25px;
        }
      }
    }
  }
}

@media (max-width: 425px) {
  .top__left {
    h1 {
      font-size: 1.5rem;
    }
  }
  .film__gallery {
    h2 {
      font-size: 1.25rem;
    }
  }
}
</style>
