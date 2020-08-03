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
export function editUserInfo (data) {
  return request({
    url: '/au/edit',
    data,
    method: 'post',
    needToken: true
  })
}

export function uploadFiles (data) {
  return request({
    url: '/upload',
    data,
    method: 'post',
    needToken: true
  })
}
