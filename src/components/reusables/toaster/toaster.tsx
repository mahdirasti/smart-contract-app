import { toast } from "react-toastify"
import ToastItem from "./ToastItem"

type Errors = {
  errors: {
    [key: string]: string
  }
}
type Error = {
  error: string
}
type Message = {
  message: string
}

type ErrorData = Errors | Error | Message

const errorHandler = (data: ErrorData) => {
  if ("errors" in data) {
    const errors = data.errors
    for (let key in errors) {
      toast.error(<ToastItem type="danger">{errors[key]}</ToastItem>)
    }
  } else if ("message" in data) {
    toast.error(<ToastItem type="danger">{data.message}</ToastItem>)
  } else {
    toast.error(<ToastItem type="danger">{data.error}</ToastItem>)
  }
}
/**
 * You must import this object in order to create toast messages
 *
 * Please pay attention to examples below
 * @example ``` js
 * try {
 *  const response = await api.get()
 *  toaster.success(response.data.message) // for success toasts
 * } catch (e) {
 *  toaster.error(e?.response?.data) // for error toasts
 * }
 * ```
 */
const toaster = {
  /**
   * accepts a single string. For laravel api response: response.data.message
   * @param message
   * @returns
   */
  success: (message: string) =>
    toast.success(<ToastItem type="success">{message}</ToastItem>),
  /**
   * to match different error responses from laravel, it accepts different types.
   * For laravel api response: e?.response?.data
   * It will detect whether it has errors key or error key or message key and do things based on that
   * Sometimes laravel response contains multiple errors so we have to show them all
   * @param data
   * @returns
   */
  error: (data: ErrorData) => errorHandler(data),
  /**
   * accepts a single string
   * @param message
   * @returns
   */
  info: (message: string) =>
    toast.info(<ToastItem type="info">{message}</ToastItem>),
  /**
   * accepts a single string
   * @param message
   * @returns
   */
  warning: (message: string) =>
    toast.error(<ToastItem type="warning">{message}</ToastItem>)
}

export default toaster
