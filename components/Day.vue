<template>
  <button :class="{active: day.id === activeDay}"
          @click="$emit('activeDay', day.id)" class="day">
    <span class="day__week">{{ day.week }}</span>
    <span class="day__date">{{ day.date }}</span>
  </button>
</template>

<script>
export default {
  name: "Day",
  props: {
    day: {
      type: Object,
      required: true
    },
    activeDay: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
