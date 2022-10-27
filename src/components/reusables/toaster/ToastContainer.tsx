import { useEffect } from "react"
import { ToastContainer as Toastify } from "react-toastify"
import { injectStyle } from "react-toastify/dist/inject-style"
/**
 * react-toastify's ToastContainer config is placed here and required styles are injected
 * @returns
 */
const ToastContainer = () => {
  useEffect(() => {
    injectStyle()
  }, [])

  return (
    <Toastify
      rtl
      position="top-left"
      closeButton
      closeOnClick
      pauseOnHover
      icon={false}
    />
  )
}

export default ToastContainer
