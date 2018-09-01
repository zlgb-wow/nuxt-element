export const state = () => ({
  counter: 0,
  status: 'ok',
  token:()=>{
    if(process.client){
      return localStorage.token
    }else{
      return ''
    }
  }
})

export const actions = {
  
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  changeStatus(state) {
    state.status = 'nonononon'
  },
  setToken(state,opt){
    state.token = opt.token;
    if (process.browser) {
      localStorage.token=opt.token;
    }
  },
  changeToken(state,opt){
    state.token = opt.token;
  }
}

export const getters = {
  
}

export default {
  state,
  actions,
  mutations,
  getters
}
