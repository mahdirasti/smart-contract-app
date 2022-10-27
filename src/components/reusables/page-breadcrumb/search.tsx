import * as React from "react";

import { Box, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

interface IPageBreadcrumbSearchHeaderProps {}

const PageBreadcrumbSearchHeader: React.FunctionComponent<
  IPageBreadcrumbSearchHeaderProps
> = (props) => {
  return (
    <Box sx={{ mr: 2 }}>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default PageBreadcrumbSearchHeader;
