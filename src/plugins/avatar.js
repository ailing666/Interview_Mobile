/**
 *
 * @param {Vue实例} Vue
 * avatarObj,需要处理头像的对象
 *
 */
export default function (Vue) {
  Vue.prototype.$avatar = function (avatarObj) {
    if (avatarObj.avatar) {
      avatarObj.avatar &&
        (avatarObj.avatar = process.env.VUE_APP_URL + avatarObj.avatar)
    } else {
      avatarObj.cover &&
        (avatarObj.cover = process.env.VUE_APP_URL + avatarObj.cover)
    }
  }
}
