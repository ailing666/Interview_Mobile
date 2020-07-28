import request from '@/utils/request.js'
/**
 * 获取验证码
 * @param {*} mobile
 */
export function getCode (data) {
  return request({
    url: '/au/code',
    method: 'post',
    data
  })
}
/**
 * 登录
 * @param {*}mobile,code
 */
export function login (data) {
  return request({
    url: '/au/login',
    method: 'post',
    data
  })
}
