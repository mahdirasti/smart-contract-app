import {
  Box,
  Button,
  Checkbox,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  alpha,
  useMediaQuery,
  useTheme
} from "@mui/material"
import React, { ChangeEvent, useState } from "react"

import { LISTING_PER_PAGE } from "@/consistants"
import { Link } from "react-router-dom"
import { MyTableProps } from "."
import { useTranslation } from "react-i18next"

/**
 * This component is our Table Reusable Component That Recieve four prop:
 * title:our table title,
 *
 * moreLink: with the prop we cas show our showMore button to see all of our installments list,
 *
 * tableHeadItems:this is an array with many objects,in this objects we have two property:
 * 1-title:with this property we named our tableCells in our tablehead
 * 2-render:with this method we return our tableCell items that we use in tableBody
 *
 * items:our TableBody Items
 *
 * @returns {React.ReactElement}
 */

const MyTable: React.FC<MyTableProps> = ({
  title = "",
  moreLink,
  endButton,
  tableHeadItems = [],
  items,
  selectable = false,
  sx = {},
  hasCollapse = false,
  onChangeSelectedIds,
  totalItems,
  loading = false
}): React.ReactElement => {
  const theme = useTheme()
  //Collect item id
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  //Fire onChangeSelected
  const updateSelectedEvent = (items: number[]) => {
    if (onChangeSelectedIds && typeof onChangeSelectedIds === "function")
      onChangeSelectedIds(items)
  }

  //Function to store item id
  const handleSelectId = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    console.log(typeof id, "tableIDD")
    if (selectedIds.indexOf(id) !== -1) {
      const newIds = selectedIds.filter((item) => item !== id)

      setSelectedIds(newIds)

      //Update event listener
      updateSelectedEvent(newIds)
    } else {
      const newIds = [...selectedIds, id]
      setSelectedIds(newIds)

      //Update event listener
      updateSelectedEvent(newIds)
    }
  }

  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"))

  const SkeletonTable = () => {
    //Get from evn file
    const per_page = LISTING_PER_PAGE

    return (
      <>
        {Array.from(Array(per_page).keys()).map((item) => (
          <TableRow key={item}>
            {/** Selectable checkbox */}
            {selectable && (
              <TableCell>
                <Skeleton
                  sx={{ my: 1, mx: "auto" }}
                  width={24}
                  height={24}
                  variant="rectangular"
                />
              </TableCell>
            )}
            {/** Selectable checkbox */}
            {tableHeadItems.map((tdItem, tdKey) => (
              <TableCell key={tdKey}>
                <Skeleton
                  sx={{ my: 1, mx: "auto" }}
                  key={tdKey}
                  width={100}
                  height={24}
                  variant="rectangular"
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </>
    )
  }

  const MainTableContainer = () => (
    <TableContainer>
      <Table
        sx={{
          "& :last-child td, &:last-child th :not(thead)": { border: 0 }
        }}
      >
        <TableHead
          sx={{
            ["& tr th"]: {
              textAlign: "left",
              whiteSpace: "nowrap",
              color: (t) => t.palette.text.disabled,
              borderColor: (t) => alpha(t.palette.common.black, 0.1)
            }
          }}
        >
          <TableRow>
            {/** Selectable th */}
            {selectable && <TableCell>#</TableCell>}
            {/** Selectable th */}
            {tableHeadItems.map((item, key) => (
              <TableCell key={key}>{item.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            ["& td"]: {
              whiteSpace: "nowrap",
              py: 1.5,
              fontWeight: "500",
              fontSize: "14px",
              px: 1.5,
              textAlign: "left"
            }
          }}
        >
          {loading ? (
            <SkeletonTable />
          ) : items.length === 0 ? (
            <TableRow>
              <TableCell colSpan={tableHeadItems.length}>
                <Typography>{t("nothing_was_found")}</Typography>
              </TableCell>
            </TableRow>
          ) : (
            items.map((item, rowKey) => {
              //Selected value
              const isSelectedCheckbox = selectedIds.indexOf(item?.id) !== -1

              return (
                <TableRow key={rowKey}>
                  {/** Selectable checkbox */}
                  {selectable && (
                    <TableCell>
                      <Checkbox
                        checked={isSelectedCheckbox}
                        onChange={(e) => handleSelectId(e, item?.id)}
                      />
                    </TableCell>
                  )}
                  {/** Selectable checkbox */}
                  {tableHeadItems.map((tdItem, tdKey) => {
                    return (
                      <>
                        {tdItem?.hasControl ? (
                          <TableCell
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                          >
                            <Checkbox
                              checked={isSelectedCheckbox}
                              onChange={(e) => handleSelectId(e, item?.id)}
                            />
                            {tdItem.render(item)}
                          </TableCell>
                        ) : (
                          <TableCell key={tdKey}>
                            {tdItem.render(item)}
                          </TableCell>
                        )}
                      </>
                    )
                  })}
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )

  const { t } = useTranslation()
  return (
    <Box sx={{ mt: 3, ...sx }}>
      <Box
        sx={{
          ["& a"]: {
            textDecoration: "none"
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2
        }}
      >
        <Stack flexDirection={"row"} alignItems="baseline">
          {title && (
            <Typography
              sx={{
                position: "relative",
                ml: [2, ,],
                ["&:before"]: {
                  content: "''",
                  width: 5,
                  height: 23,
                  display: "block",
                  position: "absolute",
                  left: "-5px",
                  bottom: ["66%", , "55%"],
                  transform: "translate(-50%,50%)",
                  mr: 1,
                  bgcolor: (t) => t.palette.primary.main
                }
              }}
              variant="headerBold"
            >
              {title}
            </Typography>
          )}
          {totalItems && (
            <Typography variant="bodyRegular" color="label.main">
              {t("total_items", { total: totalItems })}
            </Typography>
          )}
        </Stack>
        {moreLink && (
          <Link to={moreLink}>
            <Button variant="text">مشاهده بیشتر</Button>
          </Link>
        )}
        {endButton && endButton}
      </Box>
      <MainTableContainer />
    </Box>
  )
}

export default MyTable
