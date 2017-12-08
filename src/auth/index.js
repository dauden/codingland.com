import configs from '../defined'
import router from '../router'
import decode from 'jwt-decode'

export default {
  user: {
    authenticated: false
  }
}

export function login (context, creds) {
  var tempToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJsb2NhbGhvc3QiLCJuYW1lIjoiRGF1IERlbiIsImlkIjoiMDEiLCJhZG1pbiI6dHJ1ZX0.zMMBLP5OIPtWrFA3S9wzdwmmrZggOcmwHpryXjOf0oQ'
  localStorage.setItem(configs.TOKEN_KEY, tempToken)
  if (!context.$route.query.redirect) {
    router.replace('/')
  } else {
    router.replace(context.$route.query.redirect)
  }
}

export function logout () {
  localStorage.removeItem(configs.TOKEN_KEY)
}

export function requireAuth (to, from, next) {
  if (!isLoggedIn()) {
    console.log(11)
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    console.log(122)
    next()
  }
}

function isLoggedIn () {
  const token = tokenDecoded()
  return !!token && !isTokenExpired(token)
}

function tokenDecoded () {
  const token = localStorage.getItem(configs.TOKEN_KEY)
  if (token) {
    return decode(token)  
  }
  else {
    return null
  }
  
}

function isTokenExpired (token) {
  if (!token.exp) {
    return false
  }
  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return (date < new Date())
}
