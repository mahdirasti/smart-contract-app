import { UserProfileType } from "../types"

export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_FAILURE = "AUTH_FAILURE"
export const AUTH_LOADING = "AUTH_LOADING"
export const AUTH_LOGOUT = "AUTH_LOGOUT"

const authSuccess = (token: string | boolean, user: UserProfileType) => ({
  type: AUTH_SUCCESS,
  payload: {
    token,
    user
  }
})

const authLoading = () => ({
  type: AUTH_LOADING
})

const authFailure = () => ({
  type: AUTH_FAILURE
})

const authLogout = () => ({
  type: AUTH_LOGOUT
})

const actions = {
  authFailure,
  authLoading,
  authSuccess,
  authLogout
}
export default actions
