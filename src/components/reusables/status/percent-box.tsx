import * as React from "react";

import { Box, Theme, alpha, SxProps } from "@mui/material";

interface IPercentBoxProps {
  percent?: number | string;
  sx?: SxProps<Theme>;
}

export const PercentBox: React.FunctionComponent<IPercentBoxProps> = ({
  percent,
  sx = {},
}) => {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 2,
        width: "80px",
        maxWidth: "100%",
        textAlign: "center",
        borderRadius: "8px",
        bgcolor: (t) =>
          percent < 0
            ? alpha(t.palette.error.main, 0.12)
            : alpha(t.palette.success.main, 0.12),
        color: (t) =>
          percent < 0 ? t.palette.error.main : t.palette.success.main,
        ...sx,
      }}
    >
      {`${percent} %`}
    </Box>
  );
};
