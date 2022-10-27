import * as React from "react";

import { Box } from "@mui/material";

interface IMiniContainerProps {}

const MiniContainer: React.FunctionComponent<IMiniContainerProps> = ({
  children,
}) => {
  return (
    <Box sx={{ mx: "auto", width: 320, maxWidth: "98%", my: 2 }}>
      {children}
    </Box>
  );
};

export default MiniContainer;
