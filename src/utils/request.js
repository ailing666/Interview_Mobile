import axios from 'axios'
// 创建axios副本
const request = axios.create({
  baseURL: process.env.VUE_APP_URL
})
// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    if (response.data.code === 200) {
      return response.data
    } else {
      return Promise.reject(new Error(response.data.message))
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export default request
