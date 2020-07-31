import request from '@/utils/request.js'
/**
 * 获取用户信息
 * 需要请求头中携带token
 * needToken标记是否携带token
 */
export function getUserInfo () {
  return request({
    url: '/au/info',
    needToken: true
  })
}
