import { IListingPageWithFilters } from "@/types"
import { SxProps, Theme } from "@mui/material"

interface itemsInputItem {
  title: string
  value: string | number
}

interface filterItem {
  label: string
  type?: string
  icon?: React.ReactNode
  select?: boolean
  items?: itemsInputItem[]
}

export interface IFilterListingItemsProps extends IListingPageWithFilters {
  filterItems: filterItem[]
  sx?: SxProps<Theme>
  onSearch?: (obj: object) => void
  searchItems?: any
}
