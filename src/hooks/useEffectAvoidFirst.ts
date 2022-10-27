import { useEffect, useRef } from "react"

const useEffectAvoidFirst = (method: Function, dependencies: any[]) => {
  const isFirstRun = useRef(true)
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    method()
  }, dependencies)
}

export default useEffectAvoidFirst
