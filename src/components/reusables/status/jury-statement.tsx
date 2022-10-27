import * as React from "react";
import { Box, Theme, alpha, useTheme, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

export type StatusVariant = "contained" | "text";

interface IJuryStatementStatusProps {
  status: string;
  sx?: SxProps<Theme>;
  variant?: StatusVariant;
}

export const JuryStatementStatus: React.FunctionComponent<
  IJuryStatementStatusProps
> = ({ status, sx = {}, variant = "contained" }) => {
  const { t } = useTranslation();

  const theme = useTheme<Theme>();

  let orderStatusBGColor = "";
  let orderStatusColor = "";
  let orderLabel = "";

  const sharpnesColor = 0.1;

  switch (status) {
    case "pending":
      orderStatusBGColor = theme.palette.warning.dark;
      orderStatusColor =
        variant === "contained"
          ? theme.palette.common.white
          : theme.palette.warning.dark;
      orderLabel = t("pending");
      break;
    case "vote-for-contractor":
      orderStatusBGColor = theme.palette.secondary.main;
      orderStatusColor =
        variant === "contained"
          ? theme.palette.common.white
          : theme.palette.secondary.main;

      orderLabel = t("vote_for_contractor");
      break;
    case "vote-for-employer":
      orderStatusBGColor = theme.palette.extended_colors.green.main;
      orderStatusColor =
        variant === "contained"
          ? theme.palette.common.white
          : theme.palette.extended_colors.green.main;
      orderLabel = t("vote_for_employer");
      break;
    default:
      orderStatusBGColor = theme.palette.secondary.main;
      orderStatusColor =
        variant === "contained"
          ? theme.palette.common.white
          : theme.palette.secondary.main;
      orderLabel = t("pending");
  }

  return (
    <Box
      sx={{
        p: 1,
        py: 0.5,
        width: variant === "contained" ? "75px" : "auto",
        maxWidth: "100%",
        textAlign: "center",
        borderRadius: "8px",
        bgcolor: variant === "contained" ? orderStatusBGColor : "transparent",
        color: orderStatusColor,
        ...sx,
      }}
    >
      {orderLabel}
    </Box>
  );
};
