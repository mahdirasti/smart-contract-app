import * as React from "react";
import { Box, Theme, alpha, useTheme, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IJuryStatementStatusProps {
  status: string;
  sx?: SxProps<Theme>;
}

export const AccessibilityStatus: React.FunctionComponent<
  IJuryStatementStatusProps
> = ({ status, sx = {} }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        p: 1,
        py: 0.5,
        width: 134,
        maxWidth: "100%",
        textAlign: "center",
        borderRadius: "8px",
        bgcolor: (t) => t.palette.divider,
        color: (t) => t.palette.common.black,
        ...sx,
      }}
    >
      {status}
    </Box>
  );
};
