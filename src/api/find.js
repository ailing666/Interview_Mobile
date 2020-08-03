// 导入请求对象
import request from '@/utils/request'

// 面试技巧

export function technicList (params) {
  return request({
    url: '/articles/technic',
    method: 'get',
    needToken: true,
    params
  })
}
// 热门数据
export function hotData () {
  return request({
    url: '/chart-data/hot',
    method: 'get'
  })
}

// 面经分享
export function shareList (params) {
  return request({
    url: '/articles/share',
    method: 'get',
    needToken: true,
    params
  })
}
