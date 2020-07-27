import _fetch from '@/utils/request.js'
export function getCode (data) {
  return _fetch({
    url: '/au/code',
    method: 'post',
    data
  })
}
export function login (data) {
  return _fetch({
    url: '/au/login',
    method: 'post',
    data
  })
}
