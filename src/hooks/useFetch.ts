import { useEffect, useReducer, useRef, useState } from "react"

import { api } from "@/api"

interface State<T> {
  data?: T
  error?: Error
  loading?: boolean
  renderAgain: Function
}

type Cache<T> = { [url: string]: T }

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error }

function useFetch<T = unknown>(
  url?: string,
  condition: boolean = true,
  deps: any[] = []
): State<T> {
  const [fetchDep, setFetchDep] = useState(Math.random() * 10000)

  const cache = useRef<Cache<T>>({})

  const handleFetchAgain = () => {
    cache.current = {}
    setFetchDep(Math.random() * 2000000000)
  }

  const cancelRequest = useRef<boolean>(false)

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false,
    renderAgain: () => {}
  }

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return {
          ...initialState,
          loading: true,
          renderAgain: handleFetchAgain
        }
      case "fetched":
        return {
          ...initialState,
          loading: false,
          data: action.payload,
          renderAgain: handleFetchAgain
        }
      case "error":
        return {
          ...initialState,
          loading: false,
          error: action.payload,
          renderAgain: handleFetchAgain
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    //Condition
    if (!condition) return

    // Do nothing if the url is not given
    if (!url) return

    const fetchData = async () => {
      dispatch({ type: "loading" })

      // If a cache exists for this url, return it
      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] })
        return
      }

      api
        .get(url)
        .then((res) => {
          const data = res.data as T

          cache.current[url] = data

          dispatch({ type: "fetched", payload: data })

          if (cancelRequest.current) return
        })
        .catch((err) => {
          if (cancelRequest.current) return

          dispatch({ type: "error", payload: err as Error })

          throw new Error(err.response)
        })
    }

    void fetchData()

    return () => {
      cancelRequest.current = true
    }
  }, [url, fetchDep, ...deps])

  return state
}

export default useFetch
