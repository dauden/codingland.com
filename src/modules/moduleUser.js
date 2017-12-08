import Vue from 'vue'
import './moduleBase.js'

const moduleUser ={
  state: {
    users: []
  },  
  mutations: {
    FETCH_USERS(state, users) {
        state.users = users
    }
  },
  actions: {
    fetchUser({ commit }) {
        return new Promise((resolve, reject) => {
            Vue.http.get("http://localhost:8080/static/user.json", {}, {headers: {'X-CSRF-Token': undefined}})
            .then((response) => {
                commit("FETCH_USERS", response.body);
                resolve();
            })
            .catch((error => {
                console.log(error.statusText);
            }));
        });
    }
  }
}

export default moduleUser