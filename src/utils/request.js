import qs from 'qs'
import axios from 'axios'

const service = axios.create({
  baseURL: ''
})

// 请求拦截器
service.interceptors.request.use(config => {
  if (config.method === 'POST' || config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  console.info(error)
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log('err' + error) // for debug
  return Promise.reject(error)
})

export default service
