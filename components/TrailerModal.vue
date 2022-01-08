<template>
  <div class="modal" @click="$store.commit('HIDE_TRAILER')">
    <div class="modal-wrapper">
      <div class="modal-container">
        <iframe :src="`${trailer}`" frameborder="0"  allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrailerModal",
  props: {
    trailer: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">

.modal {
  display: table;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 28, 45);

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &-container {
    max-width: 900px;
    height: 506px;
    margin: 0 auto;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
