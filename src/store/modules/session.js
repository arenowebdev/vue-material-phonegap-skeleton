const state = {
  language: ''
}

const getters = {
  getLanguage(state){
    return state.language
  }
}

const mutations = {
  setLanguage: function(state, language) {
    state.language = language
  }
}

const actions = {
  updateLanguage: function({commit}, language) {
    commit('setLanguage', language)
  }
}

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
