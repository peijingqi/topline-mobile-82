/**
 * 请求模块：封装了 axios
 */
import axios from 'axios'

// 创建 axios 实例
// axios.create 的作用是克隆一个 axios 实例，它的作用和 axios 是一样的
// 假如一个应用中有多个不同的后台接口路径
//      http://api.a.com
//      http://api.b.com
// 当然，不仅仅是这个 baseURL，还有例如拦截器等都可以独立
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 配置 axios
// 请求拦截器
// 响应拦截器
// 。。。。

// 导出请求对象
export default request
