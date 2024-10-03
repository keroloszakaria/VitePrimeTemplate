import { useStorage } from '@vueuse/core'

function get(...keys) {
  if (keys.length > 1) {
    const result = {}
    keys.forEach((key) => {
      result[key] = useStorage(key, null, localStorage).value
    })
    return result
  } else {
    return useStorage(keys[0], null, localStorage).value
  }
}

function set(key, value) {
  if (typeof key === 'object') {
    Object.keys(key).forEach((name) => {
      useStorage(name, key[name], localStorage).value = key[name]
    })
  } else {
    useStorage(key, value, localStorage).value = value
  }
}

function remove(...keys) {
  keys.forEach((key) => {
    localStorage.removeItem(key)
  })
}

function has(key) {
  return localStorage.getItem(key) !== null
}

const storage = {
  get,
  set,
  remove,
  has
}

export default storage
