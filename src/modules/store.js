import Vuex from 'vuex'

import moduleUser from './moduleUser'

const store = new Vuex.Store({
  strict:true,
  modules: {
  	users: moduleUser
  }
})

export default store