import * as React from "react";

import {
  Box,
  Breakpoint,
  Container,
  Grid,
  Paper,
  SxProps,
  Theme,
  Typography,
  alpha,
} from "@mui/material";

interface IPageWrapperInnerWithoutSidebarProps {
  heading?: string;
  hasContainer?: boolean;
  container?: Breakpoint;
  sx?: SxProps<Theme>;
}

const PageWrapperInnerWithoutSidebar: React.FunctionComponent<
  IPageWrapperInnerWithoutSidebarProps
> = (props) => {
  const {
    children,
    heading,
    hasContainer = true,
    container = "lg",
    sx,
  } = props;

  const renderContent = (
    <>
      {heading && (
        <Box
          sx={{
            mb: 4,
            pb: 4,
            borderBottom: 1,
            borderColor: (t) => alpha(t.palette.common.black, 0.12),
          }}
        >
          <Typography component="h1" variant="h1">
            {heading}
          </Typography>
        </Box>
      )}
      <Box sx={sx}>{children}</Box>
    </>
  );

  return (
    <Box
      sx={{
        py: 7,
        minHeight: "calc(100vh - 72px)",
      }}
    >
      {hasContainer ? (
        <Container maxWidth={container}>
          <Paper>{renderContent}</Paper>
        </Container>
      ) : (
        renderContent
      )}
    </Box>
  );
};

export default PageWrapperInnerWithoutSidebar;
