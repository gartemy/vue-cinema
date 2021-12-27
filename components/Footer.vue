<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__items">
        <div class="footer__item">
          <h4 class="footer__title">Кинотеатр</h4>
          <ul class="footer__nav-list">
            <li v-for="item in cinema" :key="item.id">
              <nuxt-link class="footer__nav-link" :to="item.link">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="footer__item">
          <h4 class="footer__title">Афиша</h4>
          <ul class="footer__nav-list">
            <li v-for="item in poster" :key="item.id">
              <nuxt-link class="footer__nav-link" :to="item.link">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="footer__item">
          <h4 class="footer__title">Контакты</h4>
          <div class="footer__info">
            <div class="footer__map">
              <img src="../static/map.png" alt="">
            </div>
            <div class="footer__contacts">
              <div class="footer__socials">
                <img src="../static/vk.svg" alt="">
                <img src="../static/insta.svg" alt="">
              </div>
              <nuxt-link :to="'/'">8 (800) 555-35-35</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      cinema: [
        {id: 1, title: 'Новости', link: '/'},
        {id: 2, title: 'Акции и скидки', link: '/'},
        {id: 3, title: 'Контакты', link: '/'},
        {id: 4, title: 'Личный кабинет', link: '/'}
      ],
      poster: [
        {id: 1, title: 'Сейчас в кино', link: '/'},
        {id: 2, title: 'Скоро в кино', link: '/'},
        {id: 3, title: 'Фильмы', link: '/'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.footer {
  margin-top: auto;
  color: #ffffff;
  background-color: #0F1B2B;

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
  }

  &__nav {

    &-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &-link {
      font-weight: 300;
      color: #ffffff;
    }
  }

  &__items {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 60px 0;
  }

  &__info {
    display: flex;
    gap: 80px;
  }

  &__map {
    cursor: pointer;
  }

  &__contacts a {
    color: #ffffff;
    font-weight: 600;
  }

  &__socials {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;

    img {
      padding: 10px;
      border: 2px solid #E6ECF2;
      border-radius: 50%;
      cursor: pointer;
    }
  }
}

@media (max-width: 1000px) {
  .footer {

    &__title {
      display: none;
    }

    &__items {
      justify-content: center;
      padding: 20px 0;
    }

    &__item {
      display: flex;
      justify-content: center;

      &:not(:last-child) {
        display: none;
      }
    }

    &__info {
      flex-direction: column;
      gap: 25px;
    }

    &__contacts {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    &__socials {
      margin-bottom: 0;
    }
  }
}
</style>
