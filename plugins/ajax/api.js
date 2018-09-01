// import opt from './base.js';
import { WANUrl as url } from './base.js';
// console.log(opt);
const { baseUrl } = url;

const api = {
  test:'https://api.myjson.com/bins/wkp2s',
  //产品介绍页(get)
  getProduct: baseUrl + '/liveroom/getProduct',
  //课程预告和关于我们(get)
  getAdvertisement: baseUrl + '/qq/advertisement/getAdvertisement',
  //直播间信息(get)
  getLiveRoom: baseUrl + '/liveroom',
  //

}

export default api
