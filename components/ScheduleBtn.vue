<template>
  <button class="schedule-btn">
    <span>{{ schedule.time }}</span><br>
    <span class="price">{{ schedule.price }}</span>
  </button>
</template>

<script>
export default {
  name: "ScheduleBtn",
  props: {
    schedule: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
