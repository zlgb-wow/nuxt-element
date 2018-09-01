import { mapMutations } from 'vuex';
const base='/nuxt/'
const mixinIndex = {
  data(){
    return {
       testData:'1ewr3'
    } 
  },
  methods: {
    ...mapMutations(['setToken'])
  },
  mounted() {
    this.setToken({ token: localStorage.token })
  },
  beforeRouteLeave(to, from, next) {
    console.log(localStorage.token)
    if (localStorage.token == undefined || localStorage.token == '') {
      window.open(base, '_self');
    } else {
      next();
    }
  }
}

export default mixinIndex;