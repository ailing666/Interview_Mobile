import request from '@/utils/request.js'
/**
 * 面试技巧
 * needToken标记是否携带token
 * start,起始索引,0
 * limit,个数,5
 * q,搜索关键字,无
 */
export function interviewTechnic (params) {
  return request({
    url: '/articles/technic',
    needToken: true,
    params
  })
}
/**
 * 市场数据
 * 参数  无
 */
export function chartData () {
  return request({
    url: '/chart-data/hot'
  })
}
/**
 * 面经分享
 * needToken标记是否携带token
 * start,起始索引,0
 * limit,个数,5
 * q,搜索关键字,无
 */
export function interviewShare () {
  return request({
    url: '/articles/share',
    needToken: true
  })
}
