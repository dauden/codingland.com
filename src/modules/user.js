import Vuex from 'vuex'

import moduleUser from './moduleUser'

const user = new Vuex.Store({
	strict:true,
	state: {
    	usersOfUser: []
  	}
})

export default user
