import * as React from "react";

import { Box, Grid, Typography, alpha } from "@mui/material";

interface IPageWrapperInnerWithSideBarProps {
  sidebar: React.ReactElement;
  heading: string;
  fixSidebarOnScroll?: boolean;
}

const PageWrapperInnerWithSideBar: React.FunctionComponent<
  IPageWrapperInnerWithSideBarProps
> = (props) => {
  const { children, sidebar, heading, fixSidebarOnScroll = false } = props;

  return (
    <Grid container spacing={8}>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <Box
          component="aside"
          sx={{
            position: fixSidebarOnScroll ? "sticky" : "relative",
            top: fixSidebarOnScroll ? "32px" : 0,
          }}
        >
          {sidebar}
        </Box>
      </Grid>
      <Grid item lg={9} md={9} sm={12} xs={12}>
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
        <Box>{children}</Box>
      </Grid>
    </Grid>
  );
};

export default PageWrapperInnerWithSideBar;
