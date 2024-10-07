// src/composables/useCookies.js
import { reactive } from 'vue'

const cookies = reactive({})

export const getCookie = (name) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

export const setCookie = (name, value, expires = 7, path = '/', domain = '') => {
  const date = new Date()
  date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000)
  const expiration = `expires=${date.toUTCString()}`
  const cookie = `${name}=${value}; ${expiration}; path=${path}; domain=${domain}`
  document.cookie = cookie
  updateCookies()
}

export const getAllCookies = () => {
  const allCookies = {}
  document.cookie.split(';').forEach((cookie) => {
    const [name, value] = cookie.split('=').map((c) => c.trim())
    allCookies[name] = value
  })
  return allCookies
}

export const updateCookies = () => {
  Object.assign(cookies, getAllCookies())
}

export const removeCookie = (name, path = '/', domain = '') => {
  const date = new Date(0) // Set the date to the epoch
  const expiration = `expires=${date.toUTCString()}`
  const cookie = `${name}=; ${expiration}; path=${path}; domain=${domain}`
  document.cookie = cookie
  updateCookies()
}

// Initial update of the cookies object
updateCookies()
