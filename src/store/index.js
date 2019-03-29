import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state =  {
    changableNum:0,
    plt:2
};

const getters = {
  getChangedNum(state){
    return state.changableNum
  }
};

const mutations = {
  newNum(state,sum){
    state.changableNum+=sum;
  }
}

const actions = {
    getNewNum(context,num){
        context.commit('newNum',num)
    }
};

const store = new Vuex.Store({state,getters,mutations,actions});

export default store;