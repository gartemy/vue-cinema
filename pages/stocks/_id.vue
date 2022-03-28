<template>
  <main class="main main-stocks">
    <div class="container">
     <content-block :item="stockItem"></content-block>
    </div>
  </main>
</template>

<script>
import ContentBlock from "@/components/ContentBlock";

export default {
  name: "StocksItem",
  components: {ContentBlock},
  data() {
    return {
      stockId: this.$router.history.current.params.id
    }
  },
  computed: {
    stockItem() {
      const stockItem = this.$store.state.stocks.find(item => item.id === Number(this.stockId))
      return stockItem
    }
  }
}
</script>

<style scoped>

</style>
