import axios from 'axios';
import qs from 'qs';
import Vue from 'vue';
axios.interceptors.request.use(config => {
  //console.log(config);
  if (config.token) {
    if (config.method == 'get') {
      config.params.token = localStorage.getItem('token');
    } else if (config.method == 'post') {
      config.data.token = localStorage.getItem('token');
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})


axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

if(process.client){
  // console.log(localStorage.token+'~~~~~')
}


const httpServer = (opts, data) => {

  let Public = { //公共参数  
    // 'token':localStorage.token? localStorage.token:"",
    // 'userId': localStorage.userId?localStorage.userId:""
    'token': '',
  }
  if(process.browser){
    Public.token=decodeURI(localStorage.token);
  }
  //const baseURL='/api';  //开发环境前缀
  const baseURL = ''; //build打包请求前缀

  let httpDefaultOpts = { //http默认配置 
    method: opts.method,
    baseURL,
    url: opts.url,
    timeout: 10000,
    params: Object.assign(Public, data),
    data: qs.stringify(Object.assign(Public, data)),
    headers: opts.method == 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }

  if (opts.method == 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }



  let promise = new Promise((resolve, reject) => {
    axios(httpDefaultOpts).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error)
    })
  })
  return promise
}

Vue.prototype.$http=httpServer
// export default httpServer