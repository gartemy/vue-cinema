<template>
  <li class="tab__item" :class="{active: tab.id === activeTab}">
    <button type="button" class="tab__link" @click="$emit('activeTab', tab.id)">
      <span>{{ tab.title }}</span>
    </button>
  </li>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tab: {
      type: Object,
      required: true
    },
    activeTab: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {

  &__item {
    margin-bottom: -1px;
    position: relative;
    display: inline-block;
    height: 40px;

    &.active:first-child {
      margin-left: 0;
    }

    &.active .tab__link {
      color: #000000;
      cursor: default;
      border-top: none;
      border-right: none;
      border-left: none;
      border-image: initial;
      border-bottom: 4px solid #E51937;
      padding: 4px 0;
      background: none;
    }

    &.active .tab__link span {
      top: -3px;
      position: relative;
    }

    &:first-child {
      margin-left: -10px;
    }
  }

  &__link {
    position: relative;
    display: block;
    padding: 4px 10px;
    height: 40px;
    margin-right: 40px;
    line-height: 1.42857;
    border: none;
    background: none;
    cursor: pointer;
    color: rgba(0, 28, 45, .3);
    text-decoration: none;
    font-size: 21px;
  }
}

@media (max-width: 320px) {
  .tab__link {
    font-size: 18px;
    margin-right: 30px;
  }
}
</style>
