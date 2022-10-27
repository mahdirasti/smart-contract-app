import ButtonWithPopover from "@/components/reusables/button-with-popover"
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography
} from "@mui/material"

import React from "react"
import { useTranslation } from "react-i18next"
import { IFilterListingItemsProps } from "."
import MyDatePicker from "../MyDatePicker"
import RangeSlider from "../range-slider"
/**
 *This component return dashboard calculator to calculate our credit amount.
 * @returns {React.ReactNode}
 */

const FilterListingItems: React.FC<IFilterListingItemsProps> = ({
  filterItems,
  searchItems,
  onSearch,
  filterData,
  setFilterData,
  sx
}) => {
  const { t } = useTranslation(["common"])

  // const handleChangeSelectInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilterData({ ...filterData, [e.target.name]: e.target.value })
  // }
  // const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFilterData({ ...filterData, [e.target.name]: e.target.value })
  // }
  return (
    <Stack spacing={2} direction="row">
      {filterItems.map((item, index) => {
        if (item.type === "slider") {
          return (
            <ButtonWithPopover
              label={item.label}
              icon={item.icon}
              children={<RangeSlider />}
            />
          )
        } else if (item.type === "calender") {
          return (
            <ButtonWithPopover
              label={item.label}
              icon={item.icon}
              width={290}
              sxBox={{
                p: 0,
                "& .MuiCalendarPicker-root": { width: 290 }
              }}
              sx={{
                "& .MuiPaper-root": {
                  bgcolor: (t) => t.palette.common.white
                }
              }}
              children={<MyDatePicker />}
            />
          )
        }

        return <ButtonWithPopover label={item.label} icon={item.icon} />
      })}
    </Stack>
  )
}

export default FilterListingItems
