import axios from 'axios';

const instance = axios.create({
  baseURL:'http://localhost:3009',
  timeout:5000
});

instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response){
    return response.data;
  },
  function(error){
    return Promise.reject(error);
  }
);

/**
 * get请求
 * @param {*} url     请求地址
 * @param {*} params  url参数
 */
  export function get(url, params) {
    console.log(url)
    return instance.get(url, {
      params
    });
  }
  
  /**
   * post请求
   * @param {*} url     请求地址
   * @param {*} data    数据
   */
  export function post(url, data) {
    return instance.post(url, data);
  }
  