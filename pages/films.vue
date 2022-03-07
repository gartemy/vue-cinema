<template>
  <main class="main">
    <div class="container">
      <div class="tabs">
        <ul class="tab">
          <tab v-for="tab in tabs" :key="tab.id" :tab="tab" :activeTab="activeTab" @activeTab="setActiveTab"></tab>
        </ul>
      </div>
      <div class="films">
        <div class="films__item" v-for="film in $store.state.films" :key="film.id">
          <img :src="require(`../static/timetable/${film.desktopImg}`)" alt="">
          <span>{{ film.age }}</span>
          <div class="films__item-content">
            <div>
              <h5 class="film-title">{{ film.title }}</h5>
              <p class="film-genre">{{ film.genre }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Tab from '../components/Tab'

export default {
  name: "films",
  components: {Tab},
  data() {
    return {
      activeTab: 1,
      tabs: [
        {id: 1, title: 'Сейчас в кино', isActive: true},
        {id: 2, title: 'Скоро', isActive: false}
      ],
    }
  },
  methods: {
    setActiveTab(id) {
      this.activeTab = id
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #ffffff;
  flex-grow: 3;
}

.tabs {
  padding: 43px 0;

  .tab {
    margin: 0;
    padding-left: 0;
    list-style: none;
    border-bottom: 1px solid rgb(223, 219, 216);
  }
}

.films {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 55px;
  margin-bottom: 60px;

  &__item {
    width: 275px;
    position: relative;
    cursor: pointer;

    img {
      min-width: 100%;
      border-radius: 8px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    span {
      font-size: 12px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #E51937;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      top: 12px;
      right: 15px;
      color: #ffffff;
    }

    &-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: none;
      background: linear-gradient(to top, #0F1B2B 0, #0F1B2B 19%, rgba(0, 28, 45, .0001) 53%, rgba(0, 28, 45, .0001) 100%);
      opacity: 0;
      border-radius: 8px;

      & > div {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0 25px 25px;
        color: #fff;
        opacity: 0;
        transform: translateY(4px);
      }
    }

    &:hover &-content > div {
      transform: none;
      opacity: 1;
    }

    &:hover &-content {
      display: block;
      opacity: 1;
    }
  }
}
</style>
