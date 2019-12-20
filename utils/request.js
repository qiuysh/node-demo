import axios from 'axios'
import { message } from 'antd'
//使用create方法创建axios实例
export const request = axios.create({
  timeout: 10000, // 请求超时时间
  method: 'get',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// 添加请求拦截器
request.interceptors.request.use(config => {
  return config
})
// 添加响应拦截器
request.interceptors.response.use(response => {
  // console.log(response)
  return response.data
}, error => {
  const msg = error.Message !== undefined ? error.Message : ''
  message.error(msg)
  return Promise.reject(error)
})