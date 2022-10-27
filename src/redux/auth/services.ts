import { api, getEndpoint } from "@/api"

import { Dispatch } from "redux"
import { UserProfileType } from "../types"
import { authActions } from "."
import { getUrlWithQueryParams } from "@/utils"
import { toaster } from "@/components/reusables/toaster"

type AuthStepOneData = {
  mobile: string
}
type AuthStepTwoData = {
  mobile: string
  otp: string
}
type AuthStepTwoResponse = {
  message: string
  data: {
    "access-token": string
    user: UserProfileType
  }
}
type AuthProfileResponse = {
  message: string
  data: {
    item: UserProfileType
  }
}
/**
 * Send this request to API and get otp token
 * @param data
 * @param setSubmitting
 * @param onSuccess
 * @returns
 */
export const authStepOne =
  (data: AuthStepOneData, onSuccess: Function, onError: Function) =>
  async () => {
    try {
      const url = getEndpoint("auth-otp-step-one")
      const response = await api.post<{ message: string }>(url, data)
      onSuccess()
      toaster.success(response.data.message)
    } catch (e: any) {
      toaster.error(e?.response.data)
      onError()
    }
  }

export const authStepTwo =
  (data: AuthStepTwoData, onSuccess: Function, onFailure: Function) =>
  async (dispatch: Dispatch) => {
    try {
      const url = getEndpoint("auth-otp-step-two")
      const response = await api.post<AuthStepTwoResponse>(url, data)
      onSuccess()
      dispatch(
        authActions.authSuccess(
          response.data.data["access-token"],
          response.data.data.user
        )
      )
      toaster.success(response.data.message)
    } catch (e: any) {
      onFailure()
      toaster.error(e?.response.data)
    }
  }

export const authResendOtp =
  (data: AuthStepOneData, onSuccess: Function, onError: Function) =>
  async () => {
    try {
      const url = getEndpoint("auth-resend-otp")
      const response = await api.post<{ message: string }>(url, data)
      onSuccess()
      toaster.success(response.data.message)
    } catch (e: any) {
      toaster.error(e?.response?.data)
      onError()
    }
  }

export const getUserProfile = () => async (dispatch: Dispatch) => {
  dispatch(authActions.authLoading())
  const url = getUrlWithQueryParams(getEndpoint("profile"), {
    expand: "roles.permissions"
  })
  try {
    const response = await api.get<AuthProfileResponse>(url)
    dispatch(authActions.authSuccess(true, response.data.data.item))
  } catch (e) {
    dispatch(authActions.authFailure())
  }
}
