export const state = () => ({
  isModalVisible: false,
  trailer: ''
})

export const getters = {
  isModalVisible: isModalVisible => state.isModalVisible,
  trailer: trailer => state.trailer
}

export const mutations = {
  'SHOW_TRAILER'(state, trailer) {
    state.isModalVisible = true
    state.trailer = trailer
    document.querySelector('html').style.overflow = 'hidden'
  },
  'HIDE_TRAILER' (state) {
    state.isModalVisible = false
    document.querySelector('html').style.overflow = 'auto'
  }
}



