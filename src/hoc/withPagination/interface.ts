import { ReactElement } from "react"
export interface WithPaginationProps {
  children: React.ReactNode
  page: number
  renderPagination: (count: number) => ReactElement
  setPage: React.Dispatch<React.SetStateAction<number>>
}
