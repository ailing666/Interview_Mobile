/**
 *
 * @param {Vue实例} Vue
 * avatarObj,需要处理头像的对象
 *
 */
export default function (Vue) {
  Vue.prototype.$avatar = function (avatarObj, img) {
    if (avatarObj[img]) {
      avatarObj[img] &&
        (avatarObj[img] = process.env.VUE_APP_URL + avatarObj[img])
    }
  }
}
