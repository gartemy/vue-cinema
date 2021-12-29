<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <nuxt-link :to="'/'" class="navbar-brand">
          <img src="../static/logo.png" alt="">
        </nuxt-link>

        <ul class="navbar-nav" :class="{'active': isOpen}">
          <li class="nav-item" v-for="item in items" :key="item.id">
            <nuxt-link class="nav-link" :to="item.link">{{ item.title }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="'/'"><img src="../static/user.png" alt=""></nuxt-link>
          </li>
        </ul>

        <div class="navbar-toggler icon" :class="{'active': isOpen}" @click="toggle">
          <span class="dropdown"></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isOpen: false,
      items: [
        {id: 1, title: 'Расписание', link: '/'},
        {id: 2, title: 'Фильмы', link: '/'},
        {id: 3, title: 'Акции', link: '/'},
        {id: 4, title: 'Новости', link: '/'},
        {id: 5, title: 'Контакты', link: '/'}
      ]
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        document.querySelector('html').style.overflow = 'hidden'
      } else {
        document.querySelector('html').style.overflow = 'auto'
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  &-nav {
    display: flex;
    align-items: center;
    gap: 30px;

    a {
      color: #ffffff;
      font-weight: 700;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }

  &-toggler {
    display: none;

    .dropdown {
      width: 25px;
      height: 3px;
      transform: translate(-50%, -50%);
      background: #fff;
      transition: 0.5s;
      display: inline-block;
      border-radius: 3px;

      &:before, &:after {
        content: '';
        width: 25px;
        height: 3px;
        border-radius: 3px;
        position: absolute;
        background: #fff;
        transition: 0.5s;
      }

      &:before {
        top: -8px;
      }

      &:after {
        top: 8px;
      }
    }
  }

  .icon.active .dropdown {
    background: none;

    &:before {
      top: 0;
      transform: rotate(45deg);
    }

    &:after {
      top: 0;
      transform: rotate(135deg);
    }
  }
}

@media (max-width: 1000px) {
  .navbar {
    padding: 18px 0 13px 0;
    align-items: center;

    &-brand {
      z-index: 2;
      img {
        width: 200px;
      }
    }

    &-nav {
      display: none;

      &.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #1A2B41;
        text-align: center;
        z-index: 1;
        padding-top: 40%;

        a {
          font-size: 2rem;
        }
      }
    }

    &-toggler {
      display: block;
      padding-bottom: 14px;
      z-index: 2;
    }
  }
}

@media (max-width: 425px) {
  .navbar {
    &-brand {
      width: 150px;
    }
  }
}
</style>
