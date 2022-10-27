import * as React from "react"

import { Box, Breakpoint, Container, SxProps, Theme } from "@mui/material"

import LinearIndeterminate from "@/components/normal/linear-indeterminated"
import PageHeading from "./partials/heading"

interface IPageWrapperProps {
  metaData?: React.ReactElement
  hasContainer?: boolean
  container?: Breakpoint
  sx?: SxProps<Theme>
  loading?: boolean
}

const PageWrapper: React.FunctionComponent<IPageWrapperProps> = (props) => {
  const {
    metaData,
    children,
    hasContainer = true,
    container = "xl",
    sx,
    loading = false
  } = props

  const renderChildren = !loading ? (
    children
  ) : (
    <LinearIndeterminate hasTitle={true} />
  )

  return (
    <Box>
      <PageHeading metaData={metaData} container={container} />
      {/** Content */}
      <Box sx={sx}>
        {hasContainer ? (
          <Container maxWidth="xl">{renderChildren}</Container>
        ) : (
          renderChildren
        )}
      </Box>
      {/** Content */}
    </Box>
  )
}

export default PageWrapper
