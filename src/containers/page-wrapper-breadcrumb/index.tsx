import * as React from "react"

import {
  Box,
  Breakpoint,
  Container,
  Grid,
  Paper,
  SxProps,
  Theme,
  alpha
} from "@mui/material"

import LinearIndeterminate from "@/components/normal/linear-indeterminated"
import NavigationSidebar from "@/components/normal/sidebar"
import { SidebarNavigatorItem } from "@/types"
import PageHeading from "../page-wrapper/partials/heading"
import PageBreadcrumb from "@/components/reusables/page-breadcrumb/page-breadcrumb"

interface IPageWrapperWithNavigatorsProps {
  title?: string
  hasContainer?: boolean
  container?: Breakpoint
  sx?: SxProps<Theme>
  hasPaper?: boolean
  headerMetaData?: React.ReactElement
  sidebarItems?: SidebarNavigatorItem[]
  loading?: boolean
}

const PageWrapperWithNavigators: React.FunctionComponent<
  IPageWrapperWithNavigatorsProps
> = (props) => {
  const {
    children,
    hasContainer = true,
    container = "xl",
    sx,
    hasPaper = false,
    sidebarItems = [],
    loading = false
  } = props

  const renderContent = (
    <Grid container spacing={3}>
      <Grid item lg={2.5} md={3} xs={12} xl={2}>
        <NavigationSidebar items={sidebarItems} />
      </Grid>
      <Grid item lg={9.5} md={9} xs={12} xl={10}>
        {hasPaper ? (
          <Paper
            sx={{
              boxShadow: (t) =>
                `0px 2px 1px ${alpha(
                  t.palette.common.black,
                  0.05
                )}, 0px 0px 1px ${alpha(t.palette.common.black, 0.05)}`,
              minHeight: "calc(70vh)",
              mb: 12
            }}
          >
            {loading ? (
              <Box sx={{ py: 4 }}>
                <LinearIndeterminate hasTitle />
              </Box>
            ) : (
              children
            )}
          </Paper>
        ) : (
          children
        )}
      </Grid>
    </Grid>
  )
  return (
    <Box
      sx={{
        minHeight: "100vh"
      }}
    >
      <PageHeading metaData={<PageBreadcrumb />} />
      {/** Content */}
      <Box sx={{ my: 2, ...sx }}>
        {hasContainer ? (
          <Container maxWidth={container}>{renderContent}</Container>
        ) : (
          <>{renderContent}</>
        )}
      </Box>
      {/** Content */}
    </Box>
  )
}

export default PageWrapperWithNavigators
