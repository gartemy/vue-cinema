<template>
  <main class="main">
    <div class="container">
      <div class="film__items">
        <div class="film__poster">
          <img :src="require(`../../static/timetable/${film.desktopImg}`)" alt="">
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
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 1.5C5.425 1.5 1.5 5.425 1.5 10.25C1.5 15.075 5.425 19 10.25 19C15.075 19 19 15.075 19 10.25C19 5.425 15.075 1.5 10.25 1.5ZM10.25 20.5C4.598 20.5 0 15.902 0 10.25C0 4.598 4.598 0 10.25 0C15.902 0 20.5 4.598 20.5 10.25C20.5 15.902 15.902 20.5 10.25 20.5Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13382 8.08639C8.95682 9.08739 8.95382 11.4784 9.13082 12.4284C10.0088 12.1184 11.9108 10.8684 12.4228 10.2494C11.9128 9.64839 10.0348 8.42439 9.13382 8.08639ZM8.82782 14.0014C8.55782 14.0014 8.30182 13.9244 8.09282 13.7164C7.93182 13.5574 7.50182 13.1324 7.49982 10.3334C7.49882 7.36139 7.94582 6.91939 8.09282 6.77239C8.61582 6.25439 9.46782 6.60939 9.83082 6.76139C10.3508 6.97839 13.9998 8.84739 13.9998 10.2454C13.9998 11.5554 10.7158 13.3874 9.87682 13.7374C9.54982 13.8734 9.17682 14.0014 8.82782 14.0014Z" fill="white"/>
                  </svg>
                </button>
                <button class="fav-btn">
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
              </div>
            </div>
            <div class="content">
              <p>{{ film.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="film__items">
    </div>
  </main>
</template>

<script>
export default {
  name: "film",
  data() {
    return {
      filmId: this.$router.history.current.params.id
    }
  },
  computed: {
    film() {
      const film = this.$store.state.films.find(film => film.id === Number(this.filmId))
      return film
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 75px 0;

  .film {

    &__poster {
      min-width: 275px;
    }

    &__items {
      display: flex;
      gap: 55px;
      padding-bottom: 30px;
      background-color: #ffffff;

      &:first-child {
       background: none;
      }
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

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
        align-items: center;
        font-size: 0.875rem;
        font-weight: 400;
        padding: 13px 15px 13px 26px;
        border: 2px solid rgb(255, 255, 255, 0.7);
        color: #ffffff;
        background: none;
        gap: 8px;
        width: auto;
      }
    }
  }
  .content {
    font-weight: 300;
  }
}
</style>
