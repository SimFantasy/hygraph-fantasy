import React from 'react'
import { proxyWithComputed } from 'valtio/utils'
import { useSnapshot } from 'valtio'

const getAuthUser = () => {
  const jwt = localStorage.getItem('fantasy-jwt')
  if (!jwt) return
  return JSON.parse(jwt)
}

const state = proxyWithComputed(
  { authUser: getAuthUser() },
  { isAuth: snap => (snap.authUser ? true : false) }
)

const actions = {
  login: async user => {
    state.authUser = user
    localStorage.setItem('fantasy-jwt', JSON.stringify(user))
  },
  logout: async () => {
    state.authUser = null
    localStorage.removeItem('fantasy-jwt')
  }
}

const useAuth = () => {
  const snap = useSnapshot(state)
  return {
    ...snap,
    ...actions
  }
}

export default useAuth
