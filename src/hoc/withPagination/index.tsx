import { Box, Pagination, alpha } from "@mui/material"
import { useEffect, useState } from "react"

import { WithPaginationProps } from "./interface"

const defaultPage = 1

export function withPagination<
  T extends WithPaginationProps = WithPaginationProps
>(WrappedComponent: React.ComponentType<T>) {
  const ComponentWithPagination = (
    props: Omit<T, keyof WithPaginationProps>
  ) => {
    //Pagination
    const [page, setPage] = useState(defaultPage)
    const handleChangePage = (
      event: React.ChangeEvent<unknown> | null,
      newPage: number
    ) => {
      setPage(newPage)
    }

    const renderPagination = (count: number) => {
      return count ? (
        <Pagination
          className="MyPagination"
          sx={{
            display: "flex",
            my: 5,
            mb: 0,
            justifyContent: "center",
            alignItems: "start",
            ["& .MuiPagination-ul"]: {
              p: 2,
              borderRadius: "8px"
            },
            [`& .Mui-selected`]: {
              bgcolor: (t) =>
                `${alpha(t.palette.primary.main, 0.04)} !important`,
              color: (t) => `${t.palette.primary.main} !important`
            }
          }}
          count={count}
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      ) : null
    }

    useEffect(() => {
      setPage(defaultPage)
    }, [])

    return (
      <Box sx={{ width: "100%" }}>
        <WrappedComponent
          {...(props as T)}
          page={page}
          renderPagination={renderPagination}
          setPage={setPage}
        />
      </Box>
    )
  }

  return ComponentWithPagination
}
